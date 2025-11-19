import express from 'express';
import connectToMongo from './db.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

connectToMongo();

const app = express();
const port = 3000;
// app.use(cors({origin:"https://zohrif-notes-app-frontend.vercel.app"}));
app.use(cors({origin:["https://zohrif-notes-app-frontend.vercel.app","http://localhost:5173"]}));

app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello World!');
});

import authRouter from './routes/auth.js';
import noteRouter from './routes/note.js';

app.use('/api/auth', authRouter);
app.use('/api/notes', noteRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});