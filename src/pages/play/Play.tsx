import Http, { RestRequestConfig } from 'service/Rest';
import * as CONFIG from 'constant/config'

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
      <h1>CONFIG VERSION IS : {CONFIG.VERSION}</h1>
      <h1>play page</h1>
      <button onClick={getMenu}>get menu</button>
    </div>
  );
}

export default Play;
