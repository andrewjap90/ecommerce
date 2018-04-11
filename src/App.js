import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import store from './store'
import './App.css';

import Home from './Home'
import About from './About'
import Products from './Products'
import Navbar from './Navbar'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
    }
  }
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
          <Route
            exact path="/"
            component={Home}
          />
          <Route
            exact path="/about"
            component={About}
          />
          <Route
            exact path="/products"
            component={Products}
          />
        </Switch>
        <Footer />
      </div>
      </BrowserRouter>
    </Provider>
    );
  }
}

export default App;
