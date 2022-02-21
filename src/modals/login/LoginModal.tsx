import Modal from "layout/modal/modal"

function LoginModal(props: any) {
  // const content = (props: any) => (
  //   <>
  //     <h2>login.tsx :: content {props.age}</h2>
  //     <button onClick={() => closeHandler()}>only close</button>
  //     <button onClick={() => closeHandler({data:{}})}>send close</button>
  //   </>
  // )

  const closeHandler = (params: any={}) => {
    console.log('LoginModal :: closeModal', params)
    props.closePopup(params);
  }

  return (
    <Modal>
      <h2>login.tsx :: content {props.age}</h2>
      <button onClick={() => closeHandler()}>only close</button>
      <button onClick={() => closeHandler({data:{}})}>send close</button>
    </Modal>
  )
}

export default LoginModal


