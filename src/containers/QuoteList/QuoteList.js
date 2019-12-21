import React, {Component, Fragment} from 'react';
import CardQuote from "../../components/CardQuote/CardQuote";

import {NavLink} from 'react-router-dom'
import {CATEGORIES} from "../../constans";
import axios from '../../axios-quote';
import Header from "../../components/Header/Header";

import './QuoteList.css'

class QuoteList extends Component {

    state = {
        quotes: null
    };

    loadData() {
        let url = 'quotes.json';

        const categoryId = this.props.match.params.category;
        if (categoryId) {
            url += `?orderBy="category"&equalTo="${categoryId}"`;
        }


        axios.get(url).then(response => {
            if (response.data === null) {
                this.setState({quotes: response.data})
                alert('No quotes! Please, submit new quote!')
            } else {
                const  quotes = Object.keys(response.data).map(id => {
                    return {...response.data[id], id};
                });
                this.setState({quotes})
            }
        });
    }

    componentDidMount() {
        this.loadData()
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.categoryId !== prevProps.match.params.categoryId) {
            this.loadData()
        }
    }

    editQuote = (id) => {
        this.props.history.push({
            pathname: '/quotes/' + id + '/edit'
        });
    };

    deleteQuote = (id) => {
        axios.delete('/quotes/' + id + '.json').then(() => {
            this.loadData()
        });
    };

    render() {
        let quotes = null;

        if (this.state.quotes) {
            quotes = this.state.quotes.map(quote => (
                <CardQuote
                    key={quote.id}
                    author={quote.author}
                    quoteText={quote.quoteText}
                    edit={() => this.editQuote(quote.id)}
                    delete={() => this.deleteQuote(quote.id)}
                />
            ))
        }

        return (
            <Fragment>
                <Header/>
                <div className="MainWrap">
                    <div className="Category">
                        <h3>Categories: </h3>
                        <NavLink to="/">All quotes</NavLink>
                        {Object.keys(CATEGORIES).map(categoryId => (
                            <NavLink key={categoryId}
                                     to={'/quotes/' + categoryId}
                                     exact
                            >
                                {CATEGORIES[categoryId]}
                            </NavLink>
                        ))}
                    </div>
                    <div className="AllQuotes">
                        <h2>All quotes: </h2>
                        {quotes}
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default QuoteList;
