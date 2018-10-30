const React = require('react')
const Fragment = React.Fragment

const Book = props =>
  <Fragment>
    <li id="bookTitle" data-bookTitle={props.title}>Title: {props.title}</li>
    <li id="bookAuthor" data-bookAuthor={props.author}>Author: {props.author}</li>
    <li id="bookPages" data-bookPages={props.pages}>Pages: {props.pages}</li>
    <li id="bookCPage" data-bookCPage={props.cpage}>Current Page: {props.cpage}</li>
    <li id="bookIsRead" data-bookIsRead={props.isRead}>Is Read: {props.isRead ? "I've read this!" : "I have yet to read this."}</li>
    <li id="button">
    <button id='editBTN' data-id={props.title}>EDIT</button>
    <button id='delBTN' data-id={props.title}>DELETE</button>
    </li>
  </Fragment>

  module.exports = Book