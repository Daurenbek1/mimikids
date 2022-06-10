import React, { useState } from "react";
import './styles/App.scss'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Main from './pages/Main';
import ProductPages from './pages/ProductPages';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {

  const [modal, setModal] = useState(false)

  return (
    <div className="wrapper">
      <Router>
      <Header setModal={setModal}/>
        <Switch>
          <Route exact path="/products" component={ProductPages} />
          <Route exact path="/" render={(props) => <Main visible={modal} setModal={setModal}/>} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
