import LoginModal from 'modals/login/LoginModal';
import { useSetRecoilState } from 'recoil';
import { openLoginModalSelector } from 'state';

function HongPlay() {
  const openLoginModal = useSetRecoilState(openLoginModalSelector)

  const loginClick = () => {
    const config = {
      params: {
        menu: 'HongPlay'
      },
      close: () => console.log('Login Modal Close')
    }
    openLoginModal(config)
  }

  return (
    <div>
      <h1>HongPlay page</h1>
      <button onClick={loginClick}>Login</button>
    </div>
  );
}

export default HongPlay;