import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './screens/Home'
import Products from "./screens/Products";
import Donate from "./screens/Donate";

function App() {  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/donate" component={Donate} />
      </Switch>
    </div>
  );
}

export default App;
