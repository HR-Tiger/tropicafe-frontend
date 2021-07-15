const express = require('express');
const path = require('path');
// const multer = require('multer');

// const upload = multer({ dest: 'image_storage/' });

const app = express();
const port = 3001;
const html = path.join(__dirname, 'dist', 'index.html');

app.use(express.static(path.join(__dirname, 'dist')));

// app.post('/post', upload.array('photos'), (req, res) => {
//   console.log(req.body);
//   console.log('FILES: ', req.files);
// });

app.get('/*', (req, res) => res.sendFile(html));

app.listen(port, () => console.log(`listening on ${port}`));



