import LoginModal from 'modals/login/Login';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modalListState, appendModalSelector } from 'state';

function HongPlay() {
  const appendModal = useSetRecoilState(appendModalSelector)

  const openModalClick = () => {
    const config = {
      name: 'modal name',
      component: <LoginModal />,
      params: {},
    }
    appendModal(config)
  }

  return (
    <div>
      <h1>HongPlay page</h1>
      <button onClick={openModalClick}>open modal</button>
    </div>
  );
}

export default HongPlay;