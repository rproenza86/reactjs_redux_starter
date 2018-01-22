import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';
import * as logger from 'morgan';
import * as cors from 'cors';
import router from './routes/v1';
import config from './config/main';
const app = express();

// init mongoose
// (mongoose.connection as any).openUri(config.db);
const mongoOptions = {
  useMongoClient: true
};
mongoose.connect(config.db, mongoOptions ).then(
  () => { console.log("DB ready! ",mongoose.connection.readyState); },
  err => { 
    console.log("DB connection error! Error details:"); 
    console.log(err); 
  }
);

// express middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));
app.use(helmet());
app.use(cors());

// init server
let server;
if (process.env.NODE_ENV !== config.test_env) {
  server = app.listen(config.port);
  console.log(`Server listening on port ${config.port}`);
} else {
  server = app.listen(config.test_port);
  console.log(`Server listening on port ${config.test_port}`);
}

// router
router(app);

// export
module.exports = server;