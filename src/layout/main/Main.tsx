import ModalContainer from 'layout/modal/ModalContainer';
import Content from '../content/Content';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function Main() {
  return (
    <div className="container is-fluid">
      <Header />
      <Content />
      <Footer />
      <ModalContainer />
    </div>
  );
}

export default Main;
