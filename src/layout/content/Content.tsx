import { Routes, Route } from "react-router";
import Grid from "../../pages/grid/Grid";
import Play from "../../pages/play/Play";

function Content() {
  return (
    <div className="container is-fluid">
      <Routes>
        <Route path="/play" element={<Play />} />
        <Route path="/grid" element={<Grid />} />
      </Routes>
    </div>
    
  );
}

export default Content;