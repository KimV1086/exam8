import React, {Component} from 'react';
import QuoteForm from "../../components/QuoteForm/QuoteForm";

import axios from '../../axios-quote';
import Spinner from "../../components/UI/Spinner/Spinner";

class QuoteEdit extends Component {
    state = {
        quotes: null
    };

    getUrl = () => {
        const id = this.props.match.params.id;
        return 'quotes/' + id + '.json'
    };

    componentDidMount() {
        axios.get(this.getUrl()).then(response => {
            this.setState({quotes: response.data})
        })
    }

    editQuote = quotes => {
        axios.put(this.getUrl(), quotes).then(() => {
            this.props.history.replace('/');
        })
    };

    render() {
        let formQuote = <QuoteForm
            onSubmit={this.editQuote}
            quotes={this.state.quotes}
        />;

        if (!this.state.quotes) {
            formQuote = <Spinner />
        }
        return (
            <div>
                <h2>Edit quote: </h2>
                {formQuote}
            </div>
        );
    }
}

export default QuoteEdit;
