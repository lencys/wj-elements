// import { faker } from '@faker-js/faker';
// import { createServer, Model, Factory } from 'miragejs';

import { createServer, Model, Factory } from 'https://cdn.jsdelivr.net/npm/miragejs@0.1.48/+esm';
import { faker } from 'https://esm.sh/@faker-js/faker';

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    models: {
      user: Model,
      option: Model,
      applicant: Model,  // Add this line
    },

    factories: {
      user: Factory.extend({
        image(i) {
          return faker.image.urlLoremFlickr({ category: 'city' });
        },
        fullName(i) {
          return faker.location.city();
        },
        jobTitle(i) {
          return faker.location.country();
        },
        description(i) {
          return faker.lorem.sentence();
        },
      }),
      option: Factory.extend({
        value(i) {
          return faker.string.uuid();
        },
        text(i) {
          return faker.location.country();
        },
        label(i) {
          return faker.location.state();
        },
      }),
      applicant: Factory.extend({
        user(i) {
          return {
            id: faker.string.uuid(),
            fullName: faker.person.fullName(),
            image: faker.image.avatar(),
            title: faker.person.jobTitle(),
            years: faker.number.int(20),
            address: faker.location.city(),
          };
        },
        status(i) {
          return {
            id: faker.string.uuid(),
            name: faker.helpers.arrayElement([
              'Nový/á',
              'Preverený/á telefonátom',
              'Naplánované prvé kolo pohovoru',
              'Naplánované druhé kolo pohovoru',
              'Ponuka',
              'Zamietnuté',
              'Iné',
            ]),
          };
        },
        body(i) {
          return faker.lorem.sentence();
        },
        sendCV(i) {
          return faker.date.recent();
        },
      }),
    },

    seeds(x) {
      x.createList('user', 100);
      x.createList('option', 100);
    },

    routes() {
      this.get('/api/users', function (schema, request) {
        const page = +request.queryParams.page;
        const size = +request.queryParams.size;

        server.db.users.remove(); // musime najprv precistit
        server.createList('user', size);

        let data = schema.users.all();
        let users = this.serialize(data).users;

        return {
          page: page,
          size: size,
          totalPages: 10,
          data: users,
        };
      });

      this.get('/api/applicants', function (schema, request) {
        server.db.applicants.remove(); // Clear existing applicants
        server.createList('applicant', 10); // Create 10 fake applicants

        let data = schema.applicants.all();
        let applicants = this.serialize(data).applicants;

        return applicants;
      });

      this.get('/api/options', function (schema, request) {
        const page = +request.queryParams.page;
        const size = +request.queryParams.size;

        let data = schema.options.all();
        let paginatedOptions = !(isNaN(page) && isNaN(size)) ? data.slice(page * size, (page + 1) * size) : data;
        let options = this.serialize(paginatedOptions).options;

        let totalPages = Math.ceil(data.length / size);
        return {
          page: page,
          size: size,
          totalPages: totalPages,
          data: options,
        };
      });

      this.get('/api/options/:search', function (schema, request) {
        const page = +request.queryParams.page;
        const size = +request.queryParams.size;

        let search = request.params.search;
        let data = schema.options.where((option) => option.text.toLowerCase().includes(search.toLowerCase()) || option.label.toLowerCase().includes(search.toLowerCase()));

        let paginatedOptions = data.slice(page * size, (page + 1) * size);
        let options = this.serialize(paginatedOptions).options;

        let totalPages = Math.ceil(data.length / size);
        return {
          page: page,
          size: size,
          totalPages: totalPages,
          data: options,
        };
      });

      this.post('/upload', (schema, request) => {
        let headers = request.requestHeaders;
        let contentRange = headers['Content-Range'];
        let [chunkRange, totalSize] = contentRange.split('/');
        let [start, end] = chunkRange.split('-').map(Number);
        totalSize = Number(totalSize);

        // Tu môžete simulovať aktualizáciu stavu nahrávania na serveri
        // Napríklad by ste mohli ukladať pokrok v nejakej internej štruktúre
        // Ak je to posledný chunk, odošlite správu o dokončení
        if (end >= totalSize - 1) {
          return new Response(200, {}, { message: 'Upload complete' });
        } else {
          // Možno by ste chceli vrátiť percentuálny pokrok
          const progress = (end / totalSize) * 100;
          return new Response(200, {}, { progress: progress, message: 'Chunk received' });
        }
      });

      this.passthrough();
      this.passthrough('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
    },
    // logging: false
  });

  return server;
}
