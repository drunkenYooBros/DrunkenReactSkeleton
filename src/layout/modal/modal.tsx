import { useSetRecoilState } from 'recoil';
import { removeModalSelector } from 'state';

function Modal(props: any) {
  const removeModal = useSetRecoilState(removeModalSelector)
  const closeButtonClick = () => {
    removeModal()
  }
  const content = <props.content />
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button className="delete" aria-label="close" onClick={closeButtonClick}></button>
        </header>
        <section className="modal-card-body">
          {content}
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


