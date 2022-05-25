import ModalContainer from "layout/modal/ModalContainer"
import PageContainer from "layout/page/PageContainer"
import Footer from "../footer/Footer"
import Header from "../header/Header"

function Main() {
  return (
    <div className="container is-fluid">
      <Header />
      <PageContainer />
      <Footer />
      <ModalContainer />
    </div>
  )
}

export default Main
