import RouteTest from './component/reactRouter/Route'
import {Link, Route, Routes} from "react-router-dom";
import Profile from "./component/reactRouter/Profile";
import Home from './component/reactRouter/Home'
import Tasks from './component/reactRouter/Tasks'
import About from './component/reactRouter/About'
import { useState, useRef } from 'react';

export default function App() {
  const [ state, setState ] = useState(false);
  const testRef = useRef('text-blue-500 text-xl');

  const onClick = () => {
    setState(!state);

    testRef.current = state ?  'text-blue-500 text-xl' : 'text-yellow-500'
  }

  return (
    <>
      <button onClick={onClick}>클릭</button>
      <Link to="/"><div className={testRef.current}>홈</div></Link>
      <Link to="msw">msw 프로필</Link>
      {/*<Link to="/profile/msw">msw 프로필</Link>*/}
      {/*<Link to="/profile/msw">msw 프로필</Link>*/}
      {/*<Link to="/profile/msw">msw 프로필</Link>*/}

      <Routes>
        <Route path="/users" element={<Home />}>
          <Route
            path=":username"
            element={<Profile />}
          />
          <Route path="tasks" element={<Tasks />} />
        </Route>
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}