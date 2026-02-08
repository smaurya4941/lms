import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import Detail from './components/pages/Detail';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import MyCourses from './components/account/MyCourses';
import MyLearning from './components/account/MyLearning';
import WatchCourses from './components/account/WatchCourses';
import ChangePassword from './components/account/ChangePassword';
import { Toaster } from 'react-hot-toast';
import Dashboard from './components/account/Dashboard';
import { RequireAuth } from './components/common/RequireAuth';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/courses' element={<Courses/>} />
        <Route  path='/detail' element={<Detail/>} />
        <Route  path='/account/login' element={<Login/>} />
        <Route  path='/account/register' element={<Register/>} />
        <Route  path='/account/my-courses' element={<MyCourses/>} />
        <Route  path='/account/my-learning' element={<MyLearning/>} />
        <Route  path='/account/watch-course' element={<WatchCourses/>} />
        <Route  path='/account/change-password' element={<ChangePassword/>} />
        {/* <Route  path='/account/dashboard' element={<Dashboard/>} /> */}
        <Route  path='/account/dashboard' element={
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>
        } />
      </Routes>
    </BrowserRouter>

    {/* //Toaster to diaplay messages  */}
    <Toaster
     position='top-center'
     reverseOrder={false}
      />

    
    </>
  )
}

export default App
