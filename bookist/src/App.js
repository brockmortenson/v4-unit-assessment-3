import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Header from './Components/Header';
import BookList from './Components/BookList';
import Shelf from './Components/Shelf';
import data from './Components/data';
import SearchBar from './Components/SearchBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      books: data
    }
  }

  render(){
    return(
      <div className='App'>
        <Header />
        <BookList data={this.state.books}/>
        <Shelf />
        <SearchBar />
      </div>
    )
  }
}

export default App