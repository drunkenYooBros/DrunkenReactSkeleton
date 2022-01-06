import CharacterCounter from "components/CharacterCounter";
import Http from 'service/Http';

function Play() {
  const getMenu = async () => {
    const params = { // TODO : RequestArgs type 사용
      url: '/menu',
      query: {name: 'hong'}
    }
    const data = await Http.get(params)
    console.log(data)
  }
  return (
    <div>
      <h1>play page</h1>
      <button onClick={getMenu}>get menu</button>
      <CharacterCounter />
    </div>
  );
}

export default Play;
