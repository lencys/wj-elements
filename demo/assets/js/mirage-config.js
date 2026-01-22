import { faker } from '@faker-js/faker';
import { createServer, Model, Factory } from 'miragejs';

faker.seed(200)
export const serverPromise = makeServer();

function makeServer() {
  return new Promise((resolve, reject) => {
    try {
      let server = createServer({
        models: {
          user: Model,
          applicant: Model,
          option: Model,
        },

        factories: {
          user: Factory.extend({
            image(i) {
              return faker.image.urlLoremFlickr({ category: 'city' });
            },
            fullName(i) {
              return faker.person.fullName();
            },
            jobTitle(i) {
              return faker.person.jobTitle();
            },
            description(i) {
              return faker.person.bio();
            },
          }),
          applicant: Factory.extend({
            user(i) {
              return {
                id: faker.number.int(99),
                fullName: faker.person.fullName(),
                image: faker.image.avatar(),
                title: faker.person.jobTitle(),
                years: faker.number.int(99),
                address: faker.location.city(),
              };
            },
            status(i) {
              return {
                id: faker.number.int(99),
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
          option: Factory.extend({
            value(i) {
              return faker.string.uuid();
            },
            text(i) {
              return faker.location.country();
            },
            label(i) {
              return this.text;
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

            let data = schema.users.all();
            let paginatedOptions = !(isNaN(page) && isNaN(size)) ? data.slice(page * size, (page + 1) * size) : data;
            let options = this.serialize(paginatedOptions).users;

            let totalPages = Math.ceil(data.length / size);
            return {
              page: page,
              size: size,
              totalPages: totalPages,
              data: options,
            };
          });

          this.get('/api/applicants', function (schema, request) {
            server.db.applicants.remove(); // musime najprv precistit
            server.createList('applicant', 10);

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
            const headers = request.requestHeaders || {};
            // Mirage môže mať hlavičky s rôznym casingom
            const contentRange = headers['Content-Range'] || headers['content-range'];

            // Ak nemáme Content-Range, berieme to ako obyčajný (nechunkovaný) upload
            if (!contentRange) {
              return { message: 'Upload complete' };
            }

            const [chunkRange, totalSizeRaw] = contentRange.split('/');
            const [start, end] = chunkRange.split('-').map(Number);
            const totalSize = Number(totalSizeRaw);

            // Ak je to posledný chunk, upload je dokončený
            if (end >= totalSize - 1) {
              return { message: 'Upload complete' };
            }

            // Inak vrátime info o priebehu nahrávania
            const progress = (end / totalSize) * 100;
            return { progress, message: 'Chunk received' };
          });

          this.passthrough();
          this.passthrough('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
          this.passthrough('https://cdn.jsdelivr.net/**');
        },
        logging: true,
      });

      resolve(server);
    } catch (error) {
      reject(error);
    }
  });
}
