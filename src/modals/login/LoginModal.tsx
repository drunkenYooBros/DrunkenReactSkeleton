import { useSetRecoilState } from 'recoil';
import { openJoinModalSelector } from 'state';

function LoginModal(props: any) {
  const openJoinModal = useSetRecoilState(openJoinModalSelector)
  
  const joinClick = () => {
    const config = {
      params: {
        menu: 'HongPlay'
      },
      close: () => console.log('Join Modal Close')
    }
    openJoinModal(config)
  }

  const closeClick = (params: any={}) => {
    props.closePopup(params);
  }

  return (
    <>
      <section className="modal-card-body">
        <h2>loginModal :: props {JSON.stringify(props)}</h2>
        <button className="button" onClick={joinClick}>Join</button>
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success" onClick={() => closeClick({data:{}})}>Save changes</button>
        <button className="button" onClick={() => closeClick()}>Cancel</button>
      </footer>
    </>
  )
}

export default LoginModal