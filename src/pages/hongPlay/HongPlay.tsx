import Page from 'layout/page/Page';
import { useSetRecoilState } from 'recoil';
import { openLoginModalSelector } from 'state';

function HongPlay(props: any) {
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
    <Page
      {...props}
    >
      <button onClick={loginClick}>Login</button>
    </Page>
  );
}

export default HongPlay;