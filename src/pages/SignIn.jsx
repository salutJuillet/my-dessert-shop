import './signin.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';


export default function SignIn({setIsSigngedIn}) {
  const handleSignin = () => {
    setIsSigngedIn(true);
  }

  return (
    <div className="signin_wrapper">
        <Header />

        <h1 className="page_title">Sign In</h1>
        <div className="form_container">
          <div className="signin_form_inner">
            <div className="signin_img">
              <img src="/images/common/logo_signin.png" alt="logo_signin" />
            </div>
            <form className="formx">
              <div className="signin_info">
                <label>E-mail </label><input type="text" id="userEmail" />
                <label>Password </label><input type="password" id="userPass" />
              </div>

              <div className="btn_container">
                <button type="submit" className="btn_submit" onClick={handleSignin}>sign in</button>
              </div>
            </form>
            <div className="btn_sign_link">Don't have an account? <Link to="/signup">Sign in</Link></div>
          </div>
        </div>
    </div>
  )
}