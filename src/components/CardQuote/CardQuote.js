import React, {Component} from 'react';

import './CardQuote.css'

class CardQuote extends Component {

    render() {

        return (
            <div className="CardQuote">
                <p>{this.props.quoteText}</p>
                <p><strong>Author: </strong> {this.props.author}</p>
                <button onClick={this.props.edit} className="Edit">Edit</button>
                <button onClick={this.props.delete} className="Delete">Delete</button>
            </div>
        );
    }
}

export default CardQuote;
