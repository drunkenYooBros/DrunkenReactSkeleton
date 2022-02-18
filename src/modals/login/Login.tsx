import Modal from "layout/modal/modal"

function LoginModal() {
  const buttonClick = () => {
    console.log('xxx')
  }
  const content = () => (
    <>
      <h2>login.tsx :: content</h2>
      <button onClick={buttonClick}>process</button>
    </>
  )
  return (
    <Modal
      content={content}
    />
  )
}

export default LoginModal


