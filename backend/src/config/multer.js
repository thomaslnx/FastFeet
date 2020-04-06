import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export const avatar = multer.diskStorage({
  destination: resolve(__dirname, '..', '..', 'tmp', 'uploads', 'avatar'),
  filename: (req, file, cb) => {
    crypto.randomBytes(16, (err, res) => {
      if (err) {
        return cb(err);
      }

      return cb(null, res.toString('hex') + extname(file.originalname));
    });
  },
});

export const signature = multer.diskStorage({
  destination: resolve(__dirname, '..', '..', 'tmp', 'uploads', 'signature'),
  filename: (req, file, cb) => {
    crypto.randomBytes(16, (err, res) => {
      if (err) {
        return cb(err);
      }

      return cb(null, res.toString('hex') + extname(file.originalname));
    });
  },
});

// Old code for just one path
// export default {
//   // storage: multer.diskStorage({
//   //   destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
//   //   filename: (req, file, cb) => {
//   //     crypto.randomBytes(16, (err, res) => {
//   //       if (err) {
//   //         return cb(err);
//   //       }

//   //       return cb(null, res.toString('hex') + extname(file.originalname));
//   //     });
//   //   },
//   // }),
