import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { closeModalSelector } from 'state';

function Modal(props: any) {
  const closeModal = useSetRecoilState(closeModalSelector)

  useEffect(() => {
    // console.log('Modal :: props', props)
  })

  const close = (params: any={}) => {
    closeModal(params)
    // props.close(params)
  }

  const content = React.createElement(props.component, {
    ...props,
    close,
  })

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{props.title}</p>
          <button className="delete" aria-label="close" onClick={() => close()}></button>
        </header>
        {content}
      </div>
    </div>
  )
}

export default Modal