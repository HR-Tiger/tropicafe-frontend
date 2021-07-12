const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const html = path.join(__dirname, 'dist', 'index.html');

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => res.sendFile(html));

app.listen(port, () => console.log(`listening on ${port}`));