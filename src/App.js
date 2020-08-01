import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <section className={'app'}>
          <Header />
          <Main/>
          <Footer/>
      </section>
  );
}

export default App;