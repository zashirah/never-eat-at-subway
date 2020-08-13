import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './screens/Home'
import Products from "./screens/Products";
import Donate from "./screens/Donate";
import Layout from "./components/shared/Layout/Layout";

function App() {  
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/donate" component={Donate} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
