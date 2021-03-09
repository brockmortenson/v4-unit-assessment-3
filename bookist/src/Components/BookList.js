import React, { Component } from 'react';
// import SearchBar from './SearchBar';

class BookList extends Component {
    constructor() {
        super();
        this.state = {
            mappedBooks: []
        };
    }

    render(){
        // const mappedBooks = data.map(books => <li>{books}</li>) I cannot remember or figure out how to map this
        // const mappedBooks = this.props.books.map(books => <li>{books}</li>)   
        return(
            // Once again, couldn't figure out how to get the books to display so I am really just following the instructions blindly without any visual cues of what is happening
            <div className='book-list'>
                <h1 onClick={this.props.addToShelf}></h1>
            </div>
        )
        
        
        
    }
}

export default BookList
