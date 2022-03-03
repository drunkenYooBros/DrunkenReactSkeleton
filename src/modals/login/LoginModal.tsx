import Modal from "layout/modal/Modal"

function LoginModal(props: any) {
  return (
    <Modal
      content={Content}
    />
  )
}

function Content(props: any) {
  
  const closePopup = (params: any={}) => {
    console.log('LoginModal :: closeModal', params)
    props.closePopup(params);
  }

  return (
    <>
      <section className="modal-card-body">
        <h2>loginModal :: props {props.age}</h2>
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success" onClick={() => closePopup()}>Save changes</button>
        <button className="button" onClick={() => closePopup({data:{}})}>Cancel</button>
      </footer>
    </>
  )
}

export default LoginModal


