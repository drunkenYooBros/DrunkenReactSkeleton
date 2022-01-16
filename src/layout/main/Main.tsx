import React from 'react';
import Content from '../content/Content';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function Main() {
  return (
    <div className="container is-fluid">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Main;
