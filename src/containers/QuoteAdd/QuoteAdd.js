import React, {Component, Fragment} from 'react';
import QuoteForm from "../../components/QuoteForm/QuoteForm";

import axios from '../../axios-quote';


class QuoteAdd extends Component {
    addQuote = quote => {
        axios.post('quotes.json', quote).then(() => {
            this.props.history.replace('/');
        });
    };

    render() {
        return (
            <Fragment>
                <h1>Submit new quote</h1>
                <QuoteForm onSubmit={this.addQuote}/>
            </Fragment>
        );
    }
}

export default QuoteAdd;
