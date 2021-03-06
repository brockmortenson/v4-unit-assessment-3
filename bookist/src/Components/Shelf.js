import React, { Component } from 'react';

class Shelf extends Component {

    render(){
        return(
            <div className='book-shelf'>
                <h1>Your Shelf</h1>
                <button>Clear Shelf</button>
            </div>
        )
    }
}

export default Shelf