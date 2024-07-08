import express from 'express';
const app = express();
const port = 3000;


const routes = require('./routes');

app.use(express.json());
app.use(routes);


app.listen(port, () => {
  return console.log(`http://localhost:${port}`);
});