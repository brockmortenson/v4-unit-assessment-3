import React, { Component } from 'react';

class Shelf extends Component {

    render(){
        // const mappedTitles = this.props.title.map(title => <li>{title}</li>)
        // I definitely need help with mapping these...
        // also not sure why I get an error every time I try to render something in brackets in JSX
        return(
            <div className='book-shelf'>
                <h1>Your Shelf</h1>
                <button onClick={this.props.clearShelf}>Clear Shelf</button>
                {/* <p>{mappedTitles}</p> */}
            </div>
        )
    }
}

export default Shelf