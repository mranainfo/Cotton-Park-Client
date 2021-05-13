import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout'
import HomeBanner from './components/HomeBanner/HomeBanner';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NoMatch from './components/NoMatch/NoMatch';
import Footer from './components/Footer/Footer';
import AddProduct from './components/AddProduct/AddProduct';
import ManageProduct from './components/ManageProduct/ManageProduct';
import Orders from './components/Orders/Orders';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/product/:id">
            <Checkout />
          </PrivateRoute>

          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>

          <Route exact path="/">
            <HomeBanner />
            <Home />
            <Footer />
          </Route>

          <PrivateRoute path="/addProduct">
            <AddProduct />
          </PrivateRoute>

          <PrivateRoute path="/manageProduct">
            <ManageProduct />
          </PrivateRoute>

          <Route exact path="/notFound">
            <NoMatch />
          </Route>

        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
