import { useRecoilState } from 'recoil';
import { ModalState } from 'state';

function Modal(props: any) {
  const closeButtonClick = () => {
    // setModalList(modalList.slice(0, -1))
  }
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button className="delete" aria-label="close" onClick={closeButtonClick}></button>
        </header>
        <section className="modal-card-body">
          modal content ....
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button className="button">Cancel</button>
        </footer>
      </div>
    </div>
  )
}

export default Modal


