const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');

const authorsPath = path.join(__dirname, 'data/authors.csv');
const booksPath = path.join(__dirname, 'data/books.csv');
const magazinesPath = path.join(__dirname, 'data/magazines.csv');

const authors = [];
const books = [];
const magazines = [];

fs.createReadStream(authorsPath)
  .pipe(csv({ separator: ';' }))
  .on('data', (data) => authors.push(data));

fs.createReadStream(booksPath)
  .pipe(csv({ separator: ';' }))
  .on('data', (data) => books.push(data));

fs.createReadStream(magazinesPath)
  .pipe(csv({ separator: ';' }))
  .on('data', (data) => magazines.push(data));

const app = express();
app.use(cors());
app.get('/', (req, res) => void res.json({ authors, books, magazines }));

app.listen(3000);
