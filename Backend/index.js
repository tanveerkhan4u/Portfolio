const express = require('express');

const ContactRouter = require('./router/contactRouter');

const cors = require ('cors')

const app = express();
const port = 5500;

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173', 'https://portfolio-gamma-murex-77.vercel.app/'] 
  
  
}));

app.use('/contact', ContactRouter);

app.listen(port, () => { console.log('server started!!'); });