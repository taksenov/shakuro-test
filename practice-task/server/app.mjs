import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import serverConfig from '../etc/config';
const { serverPort } = serverConfig;

import * as db from './utils/DataBaseUtils';

const app = express();
const SERVER_PORT = +serverPort;

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

/**
 * Mobile API
 */
app.get('/payment-result', (req, res) => {
    res.send(db.paymentResult());
});
app.get('/mobile-operators-list', (req, res) => {
    res.send(db.mobileOperatorsList());
});
// Mobile API

const server = app.listen(SERVER_PORT, () => {
    console.log(`Server is up and running on ${SERVER_PORT} port`);
});
