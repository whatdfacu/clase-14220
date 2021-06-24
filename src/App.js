import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemList from "./components/ItemList/ItemList";
import ItemCount from "./components/ItemCount/ItemCount";
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './views/Category/Category'
import ItemDetail from "./views/ItemDetail/ItemDetail";

function App() {

  return (
    <Router>
      <div className='App'>
        <Header />
        <NavBar />
        <Switch>
          <Route path='/' exact component={ItemList} />
          <Route path='/About' component={About} />
          <Route path='/detail/:id' component={ItemDetail} />
        </Switch>
        <ItemCount />
      </div>
    </Router>

  );
}


export default App;
