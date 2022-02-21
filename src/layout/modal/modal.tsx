import React from 'react';
import { useSetRecoilState } from 'recoil';
import { closeModalSelector } from 'state';

function Modal(props: any) {
  const removeModal = useSetRecoilState(closeModalSelector)
  const closeButtonClick = () => {
    removeModal()
  }
  const closePopup = (params: any={}) => {
    console.log('closePopup', params)
    removeModal()
  }
  const content = React.createElement(() => props.children, {
    age: '39',
    closePopup
  })
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


