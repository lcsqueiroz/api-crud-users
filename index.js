import express from 'express';
import router from './src/routes/index.js';
import connectDB from './src/config/database.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(router);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
  });
});
