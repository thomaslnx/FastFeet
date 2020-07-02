import express from 'express';
import cors from 'cors';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    // this.server.use(express.static('../node_modules/font-awesome/css'));
    this.server.use(express.static('./app/views/emails/assets/images'));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
