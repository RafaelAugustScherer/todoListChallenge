import 'dotenv/config';
import express, { Router } from 'express';
import cors from 'cors';
import appRouter from './router';
import { checkEnvironment } from './utils/app';

class App {
  public router: Router;
  public app = express();

  constructor(router: Router) {
    this.router = router;
    this.setup();
  }

  private setup() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(this.router);
  }

  public start() {
    checkEnvironment();

    const APP_PORT = process.env.APP_PORT || 3000;
    this.app.listen(
      APP_PORT,
      () => console.log(`Api is running at port: ${APP_PORT}`),
    );
  }
}

const app = new App(appRouter);
app.start();