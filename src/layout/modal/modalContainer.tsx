import LoginModal from 'modals/login/Login';
import React from 'react';
import { useRecoilState } from 'recoil';
import { modalListState } from 'state';

function ModalContainer(props: any) {
  const [modalList, setModalList] = useRecoilState(modalListState)
  const closeButtonClick = () => {
    setModalList(modalList.slice(0, -1))
  }
  const modalHtml = modalList.map((d: any, i: number) => 
    React.createElement(() => d.component, {key: i}) 
  )
  return (
    <>
      modal length is : {modalList.length}
      {modalHtml}
    </>
  )
}

export default ModalContainer


