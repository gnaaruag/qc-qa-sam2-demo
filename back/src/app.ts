import express, { Application } from 'express';
import cors from 'cors';

import dummy from './routes/dummy.route';
import qcqa from './routes/qc-qa-all'

export const app: Application = express();

app.use(express.json());

app.use(cors({
	origin: 'http://localhost:3000',
	methods: ['GET', 'POST'],
}));

app.use('/', dummy);
app.use('/', qcqa);

