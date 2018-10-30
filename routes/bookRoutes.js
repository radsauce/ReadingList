const books = require('../data/readingList')

module.exports = (app) => {
  app.get('/books', (req, res) => {
    res.json(books.getBooks())
  });
  app.post('/books', (req, res) => {
    res.sendStatus(200)
    books.addBook(req.body)
  });
  app.get('/books', (req, res) => {
    res.sendStatus(200)
    books.setBook(req.params.id)
  });
  app.put('/books/:id', (req, res) => {
    res.sendStatus(200)
    books.editBook(req.params.id, req.body)
  });
  app.delete('/books/:id', (req, res) => {
    res.sendStatus(200)
    books.delBook(req.params.id)
  })
}