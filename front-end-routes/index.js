const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public'))); // telling express it is using pub files to manipulate DOM

const port = 4000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
