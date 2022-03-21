// import { useRecoilState, useSetRecoilState } from 'recoil';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modalListState, openModalSelector } from 'state';

function ModalUtil(props: any) {

  const xx = useSetRecoilState(openModalSelector)
  return (
    <></>
  )
}
export default ModalUtil

// const openModal = (): any => {
  
//   return ''
// }

// export default {
//   openModal,
// };