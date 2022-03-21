import JoinModal from 'modals/join/JoinModal';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modalListState, openModalSelector } from 'state';

function LoginModal(props: any) {
  const openModal = useSetRecoilState(openModalSelector)
  
  const openJoinModal = () => {
    const config = {
      component: JoinModal,
      title: 'Join Modal Title',
      params: {
        name: 'hongsik'
      }
    }
    openModal(config)
  }

  const closePopup = (params: any={}) => {
    props.closePopup(params);
  }

  return (
    <>
      <section className="modal-card-body">
        <h2>loginModal :: props {props.params?.menu}</h2>
        <button className="button" onClick={openJoinModal}>Join</button>
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success" onClick={() => closePopup({data:{}})}>Save changes</button>
        <button className="button" onClick={() => closePopup()}>Cancel</button>
      </footer>
    </>
  )
}

export default LoginModal