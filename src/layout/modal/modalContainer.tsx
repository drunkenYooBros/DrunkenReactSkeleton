import React from 'react';
import { useRecoilValue } from 'recoil';
import { modalListState } from 'state';
import Modal from './Modal';

function ModalContainer(props: any) {
  const modalList = useRecoilValue(modalListState)
  const modalHtml = modalList.map((d: any, i: number) => 
    <Modal
      key={i}
      {...d}
    />
  )
  return (
    <>
      {modalHtml}
    </>
  )
}

export default ModalContainer