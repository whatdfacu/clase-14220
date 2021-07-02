import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemList from "./components/ItemList/ItemList";
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Category from './views/Category/Category'
import ItemDetail from "./views/ItemDetail/ItemDetail";
import { CartProvider } from "./components/Contexts/CartContext";
import Cart from "./views/Cart/Cart";


function App() {

  return (
    <Router>
      <CartProvider>
      <div className='App'>
        <Header />
        <NavBar />
        <Switch>
          <Route path='/' exact component={ItemList} />
          <Route path='/Category' component={Category} />
          <Route path='/detail/:id' component={ItemDetail} />
          <Route path='/Cart' component={Cart} />
        </Switch>
      </div>
      </CartProvider>
    </Router>

  );
}


export default App;
