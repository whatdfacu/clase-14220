import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemCount from "./components/ItemCount/ItemCount";
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './views/Home/Home'
import About from './views/About/About'
import Contact from './views/Contact/Contact'

function App() {

    return (
      <Router>
        <div className='App'>
          <Header />
          <NavBar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/About' component={About} />
            <Route path='/Contact' component={Contact} />
          </Switch>
        <ItemCount />
        </div>
      </Router>

    );
  }


export default App;
