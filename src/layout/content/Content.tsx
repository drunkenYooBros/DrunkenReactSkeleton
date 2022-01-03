import { Routes, Route } from "react-router"
import Grid from "../../pages/grid/Grid"
import Play from "../../pages/play/Play"
import Login from 'pages/login/Login'
import UserList from "pages/userList/UserList";

function Content() {
  // Route 동적으로 생성하기
  return (
    <div className="container is-fluid">
      <Routes>
        <Route path="/play" element={<Play />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Content;
