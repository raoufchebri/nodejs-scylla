const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = 4000;

routes(app);

app.get('/', (req, res) => res.send(`Running on port ${PORT}`));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
