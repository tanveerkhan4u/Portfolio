const express = require('express');

const ContactRouter = require('./router/contactRouter');

const cors = require ('cors')

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use('/contact', ContactRouter);

app.listen(port, () => { console.log('server started!!'); });