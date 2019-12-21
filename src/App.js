import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import QuoteAdd from "./containers/QuoteAdd/QuoteAdd";
import QuoteList from "./containers/QuoteList/QuoteList";
import QuoteEdit from "./containers/QuoteEdit/QuoteEdit";
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={QuoteList} />
              <Route path="/add" component={QuoteAdd}/>
              <Route path="/quotes/:id/edit" component={QuoteEdit}/>
              <Route path="/quotes/:categoryId" component={QuoteList}/>
            </Switch>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
