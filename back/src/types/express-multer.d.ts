import { Multer } from 'multer';

declare module 'express-serve-static-core' {
  interface Request {
    file?: Express.Multer.File;
  }
}
