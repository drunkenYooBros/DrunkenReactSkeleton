function JoinModal(props: any) {

  const closePopup = (params: any={}) => {
    props.closePopup(params);
  }

  return (
    <>
      <section className="modal-card-body">
        <h2>JoinModal.tsx :: props {props.params?.id}</h2>
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success" onClick={() => closePopup({data:{}})}>Save changes</button>
        <button className="button" onClick={() => closePopup()}>Cancel</button>
      </footer>
    </>
  )
}

export default JoinModal


