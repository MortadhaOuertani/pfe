
import Navbar from './components/Navbar/Navbar.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { useSelector } from 'react-redux';
import FormCandidate from './pages/candidate/FormCandidate.js';
import FormCompany from './pages/company/FormCompany.js';


function App() {
  const auth = useSelector(state => state.auth)
  const user ={
    isConnected: auth.isConnected,
    role:auth.user.role
  }
  return(
    <Router>
     <Navbar user={user} /> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/formCandidate' element={<FormCandidate/>} />
        <Route path='/formCompany' element={<FormCompany/>} />
      </Routes>
    </Router>
  )
  
}

export default App;
