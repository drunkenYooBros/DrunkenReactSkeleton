import LoginModal from 'modals/login/LoginModal';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modalListState, openModalSelector } from 'state';

function HongPlay() {
  const openModal = useSetRecoilState(openModalSelector)

  const openModalClick = () => {
    const config = {
      name: 'modal name',
      component: LoginModal,
      params: {},
      close: () => {
        console.log('hongplay :: modal close')
      }
    }
    openModal(config)
  }

  return (
    <div>
      <h1>HongPlay page</h1>
      <button onClick={openModalClick}>open modal</button>
    </div>
  );
}

export default HongPlay;