import "../../../dist/wj-main.js";
import { makeServer } from './mirage-config.js';

if (import.meta.env.DEV) {
  makeServer();
}