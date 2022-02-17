import { useRecoilState } from 'recoil';
import { ModalState } from 'state';

function ModalContainer() {
  const [modalList, setModalList] = useRecoilState(ModalState)
  const closeButtonClick = () => {
    setModalList(modalList.slice(0, -1))
  }
  const modalHtml = modalList.map((d: any, i: number) => 
    <div className="modal is-active" key={i}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button className="delete" aria-label="close" onClick={closeButtonClick}></button>
        </header>
        <section className="modal-card-body">

        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button className="button">Cancel</button>
        </footer>
      </div>
    </div>
  )
  return (
    <>
      modal length is : {modalList.length}
      {modalHtml}
    </>
  )
}

export default ModalContainer


