import Modal from "layout/modal/modal"

function JoinModal() {
  const content = (props: any) => (
    <>
      <h2>login.tsx :: content {props.age}</h2>
      <button onClick={() => props.closeHandler()}>only close</button>
      <button onClick={() => props.closeHandler({data:{}})}>send close</button>
    </>
  )

  return (
    <Modal
      content={content}
    />
  )
}

export default JoinModal


