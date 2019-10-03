import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Home from './stranice/home/home'
import Error from './stranice/Error/error'
import Onama from './stranice/onama/onama'
import Proizvodi from './stranice/proizvodi/proizvodi'
import Heder from './stranice/komponente/heder'
import { Switch } from 'react-router/esm/react-router';
import './stranice/proizvodi/proizvodi.css'

function App() {
  return (

    <div className="App">
      <Heder />
      <div className="naziv">
      <Switch>
      <Route exact path="/" component={Home}/>
       <Route exact path="/home" component={Home}/>
       <Route exact path="/onama" component={Onama}/>
       <Route exact path="/proizvodi" component={Proizvodi}/>
       {/* <Route path={`${match.url}/:id`} component={Proizvodi}/> */}
       <Route component={Error}/>
     </Switch>
     </div>
 
    </div>

  );
}

export default App;