import { makeServer } from './mirage-config.js';

if (import.meta.env.DEV) {

  makeServer();

  console.log("Development mode: Mirage server started.");
}