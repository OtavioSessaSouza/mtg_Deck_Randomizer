import express from 'express';
const app = express();
app.use(express.json());
const port = 3080;

const cors = require('cors');
// Allow requests from localhost:3000
app.use(cors({
  origin: 'http://localhost:3000'
}));




const routes = require('./routes');
app.use(routes);


app.listen(port, () => {
  return console.log(`http://localhost:${port}/`);
});