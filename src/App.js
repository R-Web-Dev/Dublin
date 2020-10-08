import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Contacts from './components/Contacts/Contacts';
import Products from './components/Products/Products';
import Blog from './components/Blog/Blog';
import Demonstration from './components/Demonstration/Demonstration';
import {Route, BrowserRouter} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
    <div className = 'container'>
        
        <div className = 'app-wrapper-content'>
          <Header />
            <Route exact path='/contacts' 
                         render = { () => <Contacts />} />
            <Route exact path='/products' 
                         render = { () => <Products 
                            state={props.state.productsPage} />} />
            <Route exact path='/demonstration' 
                         render = { () => <Demonstration />} />
            <Route exact path='/home' 
                         render = { () => <Home />} />
            <Route exact path='/blog' 
                         render = { () => <Blog 
                            state={props.state.blogPage} />} />
        </div>
        <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
