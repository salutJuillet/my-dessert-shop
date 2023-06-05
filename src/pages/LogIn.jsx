import './login.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';


export default function LogIn({setIsLoggedIn}) {
  const handleLogin = () => setIsLoggedIn(true)

  return (
    <div id="login_wrapper">
        <Header />

        <h1 className="login_title">Sign In</h1>
        <div className="login_form_container">
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
            <h4 className="btn_signup_link">Don't have an account? <Link to="/settings">Sign up</Link></h4>
          </div>
        </div>
    </div>
  )
}