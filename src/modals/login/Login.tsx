import Modal from "layout/modal/modal"

function LoginModal() {
  const closeButtonClick = () => {
    // setModalList(modalList.slice(0, -1))
  }
  const content = () => (
    <>
      <h2>login.tsx :: content</h2>
    </>
  )
  return (
    <Modal
      content={content}
    />
  )
}

export default LoginModal


