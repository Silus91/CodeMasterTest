import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './components/Navigation/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

class App extends Component {
  render() {
    return (  
      <BrowserRouter>
        <Navbar />
        {/* <Header /> */}
         <Switch>
          <Route exact path="/" component={Home} />
        </Switch> 
        {/* <Footer /> */}
      </BrowserRouter>
    );
  }
}

export default App;