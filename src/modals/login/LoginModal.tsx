function LoginModal(props: any) {
  const closePopup = (params: any={}) => {
    console.log('LoginModal :: closeModal', params)
    props.closePopup(params);
  }

  return (
    <>
      <section className="modal-card-body">
        <h2>loginModal :: props {props.params?.menu}</h2>
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success" onClick={() => closePopup({data:{}})}>Save changes</button>
        <button className="button" onClick={() => closePopup()}>Cancel</button>
      </footer>
    </>
  )
}

export default LoginModal


