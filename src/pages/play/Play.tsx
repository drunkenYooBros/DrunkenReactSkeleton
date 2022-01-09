import Http, { RestRequestConfig } from 'service/Rest';

function Play() {
  const getMenu = async () => {
    const config: RestRequestConfig = {
      url: '/menu',
      payload: {name: 'hong'},
    }
    const data = await Http.get(config)
    console.log(data)
  }
  return (
    <div>
      <h1>play page</h1>
      <button onClick={getMenu}>get menu</button>
    </div>
  );
}

export default Play;
