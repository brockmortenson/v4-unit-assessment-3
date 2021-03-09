import { Component } from 'react';
import Header from './Components/Header';
import BookList from './Components/BookList';
import Shelf from './Components/Shelf';
import data from './Components/data';
import SearchBar from './Components/SearchBar';
import './App.css';

// Before you start reading my code just know that I couldn't get the books to show up despite a million things I tried so I decided to just continue on with the code...

class App extends Component {
  constructor(){
    super();
    this.state = {
      books: data,
      shelf: []
    }
  }

  addToShelf = (book) => {
    // const book = this.state.books.index
    // this.setState({ shelf: this.book })
  }

  clearShelf = () => {
    this.setState({ shelf: [null] })
  }

  filterBooks = (input) => {
    // Not quite sure how to write this one..
    let filteredArray = this.state.books.input
    if (this.state.books.filter(input)){
      return this.state.books.input
    }
  }

  reset = () => {
    this.setState({ filterBooks: null })
  }

  render(){
    // I continued on with the code after not being able to get the books to display just to try and complete what I could of the assessment
    return(
      <div className='App'>
        <Header />
        <BookList books={this.state.books} 
        addToShelf={this.addToShelf }/>
        <Shelf shelf={this.state.shelf}/>
        <SearchBar filterBooks={this.state.filteredArray}
        reset={this.state.reset} />
      </div>
    )
  }
}

export default App