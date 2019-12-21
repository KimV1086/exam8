import React, {Component} from 'react';
import {CATEGORIES} from "../../constans";

import './QuoteForm.css'

class QuoteForm extends Component {
    constructor(props) {
        super(props);
        if (props.quotes) {
            this.state = {...props.quotes};
        } else {
            this.state = {
                quoteText: '',
                category: Object.keys(CATEGORIES)[0],
                author: ''
            };
        }
    }

    valueChanged = event => {
        const {name, value} = event.target;

        this.setState({[name]: value})
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.onSubmit({...this.state});
    };

    render() {
        return (
            <form className="QuoteForm" onSubmit={this.submitHandler}>
                <p>Category: </p>
                <select name="category" onChange={this.valueChanged} value={this.state.category} className="SelectQuote">
                    {Object.keys(CATEGORIES).map(categoryId => (
                        <option key={categoryId} value={categoryId}>{CATEGORIES[categoryId]}</option>
                    ))}
                </select>
                <p>Author: </p>
                <input type="text" name="author" placeholder="Author" value={this.state.author}
                       onChange={this.valueChanged} className="InputQuote" />
                <p>Quote text: </p>
                <textarea name="quoteText" placeholder="Quote text" value={this.state.quoteText}
                          onChange={this.valueChanged} className="InputQuote"/>
                <button type="submit" className="Save">Save</button>
            </form>
        );
    }
}

export default QuoteForm;
