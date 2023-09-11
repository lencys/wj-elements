import "../../../website/static/wj-elements/wj-main.js";
import { makeServer } from './mirage-config.js';

if (import.meta.env.DEV) {
  makeServer();
}