
import Navbar from './components/Navbar/Navbar.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { useSelector } from 'react-redux';
import FormCandidate from './pages/candidate/FormCandidate.js';
import FormCompany from './pages/company/FormCompany.js';
import { useEffect } from 'react';
import { Logout, setUser } from './redux/actions/authActions.js';
import store from './redux/store';
import jwt_decode from "jwt-decode";
import { setAuth } from './util/setAuth.js';
import OffersPage from './pages/offerspage/offerspage.js';

function App() {
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (window.localStorage.jwt) {
      const decode = jwt_decode(window.localStorage.jwt)
      store.dispatch(setUser(decode))
      setAuth(window.localStorage.jwt)
      const currentDate = Date.now / 1000

      if (decode.exp > currentDate) {
        store.dispatch(Logout())
      }
    }
  }, [])
  const user ={
    isConnected: auth.isConnected,
    role:auth.user.role
  }
  
  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/formCandidate' element={<FormCandidate />} />
        <Route path='/formCompany' element={<FormCompany />} />
        <Route path='/offers' element={<OffersPage/>} />
      </Routes>
    </Router>
  )

}

export default App;
