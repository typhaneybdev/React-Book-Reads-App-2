//https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be Ryan Waite 9/22/18 Walk through
import React from "react";
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import Book from '../Book';


    class SearchPage extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                books: [],
                results: [],
                query: ""
            }
        }
    
    componentDidMount() { //when component mounts load currently reading list
        BooksAPI.getAll()
        .then(resp => {
            this.setState({ books: resp }); //add response to component state
        });
    }

    updateQuery = (query) => { //update query when characters are typed in search input
        this.setState({query: query}, this.submitSearch);
    }

    submitSearch() { //return search results 
        if(this.state.query === "" || this.state.query === undefined) {
            return this.setState({ reseults: [] });
    }

    BooksAPI.search(this.state.query.trim()).then(res => {
        if(res.error) { 
            return this.setState({ results: [] });
        }

        else {
            res.forEach(b => { // results list
                let f = this.state.books.filter(B => B.id === b.id) 
                b.shelf = f[0] ? f[0].shelf: null; //shows main page shelf book in results on proper shelf
            });
            return this.setState({ results: res})
        }
    });//
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
    <div className="search-books">
    <div className="search-books-bar">
      <Link className="close-search" to="/">Close</Link>
      <div className="search-books-input-wrapper"> 
        <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={e => this.updateQuery(e.target.value)}/>
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid" >
        {
            this.state.results.map((book, key) => <Book updateBook={this.updateBook} book={book} key={key} />)
        }
    </ol>
    </div>
    </div>
  );
  }
}

export default SearchPage;
