import React from 'react';
import './App.css';
import {history} from './_helpers/history';
import {Router} from 'react-router-dom';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <Router history={history}>
          <section className={'app'}>
                  <Header />
                  <Main/>
                  <Footer/>
          </section>
      </Router>
  );
}

export default App;