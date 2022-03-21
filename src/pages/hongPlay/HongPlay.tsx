import LoginModal from 'modals/login/LoginModal';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modalListState, openModalSelector } from 'state';

function HongPlay() {
  const openModal = useSetRecoilState(openModalSelector)

  const openModalClick = () => {
    const config = {
      component: LoginModal,
      title: 'Login Modal Title',
      params: {
        menu: 'HongPlay'
      },
      close: () => {
        console.log('hongplay :sp: modal close')
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