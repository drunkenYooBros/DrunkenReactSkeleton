import { useSetRecoilState } from 'recoil';
import { ModalState } from 'state';

function HongPlay() {
  const setModalList = useSetRecoilState(ModalState)

  const openModalClick = () => {
    console.log('openModalClick')
    const config = {
      name: 'modal name',
      component: 'modal component id',
      params: {}
    }
    setModalList((oldList) => {
      return [
        ...oldList,
        config
      ]
    })
  }

  return (
    <div>
      <h1>HongPlay page</h1>
      <button onClick={openModalClick}>open modal</button>
    </div>
  );
}

export default HongPlay;