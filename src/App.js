import React from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Main from './views/Main';

function App() {
  return (
    <section className="main">
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

export default App;
