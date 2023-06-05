import './login.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';


export default function LogIn({setIsLoggedIn}) {
  const handleLogin = () => setIsLoggedIn(true)

  return (
    <div className="login_wrapper">
        <Header />

        <h1 className="page_title">Sign In</h1>
        <div className="form_container">
          <div className="login_form_inner">
            <div className="login_img">
              <img src="/images/common/logo_login.png" alt="logo_login" />
            </div>
            <form className="formx">
              <div className="login_info">
                <label>E-mail </label><input type="text" id="userEmail" />
                <label>Password </label><input type="password" id="userPass" />
              </div>

              <div className="btn_container">
                <button type="submit" className="btn_submit" onClick={handleLogin}>sign in</button>
              </div>
            </form>
            <div className="btn_sign_link">Don't have an account? <Link to="/signup">Sign up</Link></div>
          </div>
        </div>
    </div>
  )
}