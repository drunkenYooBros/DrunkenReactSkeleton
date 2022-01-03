import { Routes, Route } from "react-router"
import Grid from "../../pages/grid/Grid"
import Play from "../../pages/play/Play"
import Login from 'pages/login/Login'
import Users from "pages/users/Users";

function Content() {
  return (
    <div className="container is-fluid">
      <Routes>
        <Route path="/play" element={<Play />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/users/*" element={<Users />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Content;
