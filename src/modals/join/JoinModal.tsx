function JoinModal(props: any) {

  const closeClick = (params: any={}) => {
    props.close(params);
  }

  return (
    <>
      <section className="modal-card-body">
        <h2>JoinModal.tsx :: props {JSON.stringify(props)}</h2>
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success" onClick={() => closeClick({data:{}})}>Save changes</button>
        <button className="button" onClick={() => closeClick()}>Cancel</button>
      </footer>
    </>
  )
}

export default JoinModal


