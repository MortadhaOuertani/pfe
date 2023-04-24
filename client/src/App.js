import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { useDispatch, useSelector } from 'react-redux';
import FormCandidate from './pages/candidate/FormCandidate.js';
import FormCompany from './pages/company/FormCompany.js';
import { useEffect } from 'react';
import { Logout, setUser } from './redux/actions/authActions.js';
import store from './redux/store';
import jwt_decode from "jwt-decode";
import { setAuth } from './util/setAuth.js';
import OffersPage from './pages/offerspage/offerspage.js';
import OfferDetails from './pages/offerspage/offerDetails.js';
import Post from './pages/postingoffers/post';
import CompanyHomePage from './pages/company Interface/CompanyHomePage.js';
import Admin from './pages/admin/Admin.js';
import ForgotPasswordForm from './pages/login/forgot password/ForgotPasswordForm.js';
import Appling from './pages/OffersAppliedTo/Appling'
import Nnavbar from './components/Navbar/Nnavbar'
import ResetPasswordForm from './pages/login/forgot password/ResetPasswordForm';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminSettings from './pages/admin/AdminSettings';
import Technical from './pages/OffersAppliedTo/technical';
import Accepted from './pages/OffersAppliedTo/AcceptedList';
import CV from './components/CandidateInfo/CV';
import ProtectedRoute from './components/protection/protection';
import ProtectedAdmin from './components/protection/protectionAdmin';
import FinishRegister from './pages/company/FinishRegister';
import FinishRegistering from './pages/candidate/FinishRegistering';
import Profile from './pages/Profile/Profile';
import EditOffer from './pages/offerspage/EditOffer';




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

  const user = {
    isConnected: auth.isConnected,
    role: auth.user.role
  }
  console.log(user.isConnected)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/Profile/:id' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/offers' element={<OffersPage />} />
        <Route path='/forgotpassword' element={<ForgotPasswordForm />} />
        <Route path='/reset-password/:id/:token' element={<ResetPasswordForm />} />
        <Route path='/registercompany/:token' element={<FinishRegister />} />
        <Route path='/registercandidat/:token' element={< FinishRegistering />} />
        <Route element={<ProtectedRoute Role="USER" auth={user} />}>
          <Route path='/offers/:id' element={<OfferDetails />} />
        </Route>
        <Route element={<ProtectedRoute Role="COMPANY" auth={user} />}>
        <Route path='/offers/:id' element={<OfferDetails />} />
          <Route path='/postoffer' element={<Post />} />
          <Route path='/edit/:id' element={<EditOffer />} />
          <Route path='/appliedOffer/:id' element={<Appling />} />
          <Route path='/company' element={<CompanyHomePage />} />
          <Route path='/technicaltest/:id' element={<Technical />} />
          <Route path='/accepted/:id' element={<Accepted />} />
          <Route path='/:id/candidate' element={<CV/>} />
        </Route>
        <Route element={<ProtectedAdmin auth={user} />}>
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/users' element={<AdminUsers />} />
          <Route path='/admin/settings' element={<AdminSettings />} />
        </Route>


      </Routes>
    </Router>
  )

}

export default App;