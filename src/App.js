import React, { useState } from "react";
import './styles/App.scss'

import Main from './pages/Main'
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {

  const [modal, setModal] = useState(false)

  return (
    <div className="wrapper">
      <Header setModal={setModal}/>
      <Main visible={modal} setModal={setModal}/>
      <Footer />
    </div>
  );
}

export default App;
