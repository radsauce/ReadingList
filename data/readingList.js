let books = []
let selectedBook = {}

module.exports = {
  getBooks () {
    return books
  },
  setBook (id) {
    const index = books.findIndex(bookID => bookID.id === id)
    selectedBook = books[index]
  },
  getBook () {
    return selectedBook
  },
  addBook (book) {
    books.push(book)
  },
  editBook (id) {
    const index = books.findIndex(bookID => bookID.id === id)
    books[index] = book
  },
  delBook (id) {
    const index = books.findIndex(bookID => bookiD.id === id)
    books.splice(index, 1)
  }
}