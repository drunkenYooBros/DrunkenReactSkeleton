import React from 'react';
import Content from '../content/Content';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function Main( {data, loading}: {data: any, loading: boolean} ) {
  if (loading) return <></>
  return (
    <div className="container is-fluid">
      <Header menus={data}/>
      <Content menus={data}/>
      <Footer />
    </div>
  );
}

export default Main;
