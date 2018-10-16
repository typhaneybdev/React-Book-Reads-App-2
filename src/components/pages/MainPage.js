//https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be Ryan Waite 9/22/18 Walk through
import React from "react";
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import Shelf from '../Shelf';

class MainPage extends React.Component { //starting books state
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
    }

componentDidMount() { //when component mounts load list
    BooksAPI.getAll()
    .then(resp => {
        this.setState({ books: resp }); //add response to component state
    });
}

updateBook = (book, shelf) => { //updates book shelves
    BooksAPI.update(book, shelf)
    .then(resp => {
      book.shelf = shelf
      this.setState(state => ({
         books: state.books.filter(b => b.id !== book.id).concat(book) 
         
      }));
    });    
};

  render() { 
    return ( 
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
              {/*pass name and book to book shelf and filter books per shelf*/}
              <Shelf updateBook={this.updateBook} name='Currently Reading' books={this.state.books.filter(b => b.shelf === "currentlyReading" )}/>
              <Shelf updateBook={this.updateBook} name='Want To Read' books={this.state.books.filter(b => b.shelf === "wantToRead" )}/>
              <Shelf updateBook={this.updateBook} name='Read' books={this.state.books.filter(b => b.shelf === "read" )}/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/Search">Add a book</Link>
        </div>
        </div>
    );
  }
}

export default MainPage;
