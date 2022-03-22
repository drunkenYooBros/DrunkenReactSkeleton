
function Page(props: any) {
  return (
    <section className="section">
      <h1 className="title">{props.title}</h1>
      {props.children}
    </section>
  )
}

export default Page