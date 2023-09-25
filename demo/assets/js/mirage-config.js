import { faker } from '@faker-js/faker';
import { createServer, Model, Factory } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    models: {
      user: Model,
    },

    factories: {
      user: Factory.extend({
        image(i) {
          return faker.image.urlLoremFlickr({ category: 'city' });
        },
        fullName(i) {
          return faker.location.city()
        },
        jobTitle(i) {
          return faker.location.country()
        },
        description(i) {
          return faker.lorem.sentence()
        }
      }),
    },

    seeds(server) {
      server.createList("user", 0);

    },

    routes() {
      this.get("/api/users", function(schema, request) {
        const page = +request.queryParams.page;
        const size = +request.queryParams.size;

        server.db.users.remove(); // musime najprv precistit
        server.createList("user", size);

        let data = schema.users.all();
        let users = this.serialize(data).users;

        return {
          page: page,
          size: size,
          totalPages: 10,
          data: users,
        }
      })

      this.passthrough("/demo/**", "/public/**");
    },
  })

  return server;
}