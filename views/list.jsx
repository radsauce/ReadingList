const React = require('react')
const Book = require('./book')

const List = props => {
  <Fragment>
    <html lang="en">
    <head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Book List</title>
    </head>
    <body>
      <div className="container">
        <h1>Book List</h1>
        {props.list.map(book =>
          <Book title={book.title} author={book.author} pages={book.pages} cpage={book.cpage} isRead={book.isRead} />
        )}

      </div>
      <script src="/list.js"></script>
    </body>
    </html>
  </Fragment>
}

module.exports = List