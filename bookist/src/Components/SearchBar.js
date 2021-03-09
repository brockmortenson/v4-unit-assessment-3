import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: ''
        }
    }

    handleChange = (userInput) => {
        this.setState({ searchInput: userInput })
    }

    handleClick = () => {
        this.props.filterBooks(this.state.searchInput)

    }

    handleClear = () => {
        this.setState({ searchInput: null })
        this.props.reset()
    }

    render(){
        return(
            <div className='search-bar'>
                <input onChange={ (e) => this.handleChange(e.target.value)} placeholder='Find your book...' 
                value={this.state.input} />
                <button onClick={this.handleClick}>Search</button>
                <button onClick={this.handleClear}>Clear Search</button>
            </div>
        )
    }
}

export default SearchBar