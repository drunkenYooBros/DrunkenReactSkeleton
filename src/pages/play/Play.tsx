import CharacterCounter from "components/CharacterCounter";
import Http from 'service/Http';

function Play() {
  const getMenu = () => {
    Http.get('/menu')
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
