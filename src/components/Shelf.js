//https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be Ryan Waite 9/22/18 Walk through
import React from "react";
import Book from './Book';
import { Link } from 'react-router-dom';

class Shelf extends React.Component {
  render() {
    return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.name}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {/* rendering book components*/}
                { 
                  this.props.books.map((book, key) => <Book updateBook={this.props.updateBook} book={book} key={key} />)
                }          
                </ol>
              </div>
            </div>
        
  );
  }
}

export default Shelf;



















