import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { closeModalSelector } from 'state';

function Modal(props: any) {
  const removeModal = useSetRecoilState(closeModalSelector)

  useEffect(() => {
    // console.log('Modal :: props', props)
  })

  const closeButtonClick = () => {
    closePopup()
  }

  const closePopup = (params: any={}) => {
    console.log('closePopup', params)
    removeModal()
    props.close()
  }

  const content = React.createElement(props.content, {
    ...props,
    closePopup
  })

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{props.title}</p>
          <button className="delete" aria-label="close" onClick={closeButtonClick}></button>
        </header>
        {content}
      </div>
    </div>
  )
}

export default Modal


