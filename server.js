import 'dotenv/config'
import express from 'express';
import logger from './config/winston.js';
import userRoutes from './routes/userRoutes.js';
import mongoose from 'mongoose';

const server = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI);

server.use(express.json());
server.use('/api/users', userRoutes);

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info('Database Connected')
    server.listen(PORT, () => {
      logger.info(`App is running on port ${PORT}`);
    });
  })
  .catch(err => logger.error(`Mongo-error ${err}`));