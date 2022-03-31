import React from 'react';
import { useRecoilValue } from 'recoil';
import { modalListState } from 'state';
import Modal from './Modal';

function ModalContainer(props: any) {
  const modalList = useRecoilValue(modalListState)

  const defaultModalProps = {
    params: {},
    close: () => null,
    cancel: () => null,
  }
  
  const getModalProps = (modalProps: any) => ({
    ...defaultModalProps, // 기본값
    ...modalProps // 사용자 설정값
  })

  const modalHtml = modalList.map((d: any, i: number) => 
    <Modal
      key={i}
      {...getModalProps(d)}
    />
  )
  return (
    <>
      {modalHtml}
    </>
  )
}

export default ModalContainer