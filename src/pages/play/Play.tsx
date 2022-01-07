import Http, { RequestArgs } from 'service/Rest';

function Play() {
  const getMenu = async () => {
    const params: RequestArgs = { // TODO : RequestArgs type 사용
      url: '/menu',
      payload: {name: 'hong'},
    }
    const data = await Http.get(params)
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
