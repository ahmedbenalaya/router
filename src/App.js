import React from 'react';
import './App.css';
import Home from './Home'
import Category from './Category'
import Products from './Products'

import Admin from './Admin'
import Welcome from './Welcome'
import { Link, Route,  Switch } from 'react-router-dom';



function App() {


  return (
    <div className="App">
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category">Category</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/admin">Admin area</Link></li>
      </ul>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/category" exact component={Category}/>
          <Route path="/products" exact component={Products}/>
          <Route path="/admin" exact component={Admin}/>
          <Route path="/welcome" exact component={Welcome}/>
        

      </Switch>
    </div>

  );
}

export default App;
