import LoginModal from 'modals/login/LoginModal';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { modalListState } from 'state';

function ModalContainer(props: any) {
  const modalList = useRecoilValue(modalListState)
  const modalHtml = modalList.map((d: any, i: number) => 
    React.createElement(() => d.component, {key: i}) 
  )
  return (
    <>
      {modalHtml}
    </>
  )
}

export default ModalContainer


