import { Route, Routes, Link } from 'react-router-dom';
import Profile from './Profile';

const RouteTest = () => {
  return (
    <>
      <Link to="/profile/msw">msw 프로필</Link>
      <Routes location>
        <Route path='/profile/:username' element={Profile}/>
      </Routes>
      </>
  )
}

export default RouteTest;