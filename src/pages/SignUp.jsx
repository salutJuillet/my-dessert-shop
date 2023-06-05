import './signup.css'
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function SingUp({setIsLoggedIn}) {
  const handleLogin = () => setIsLoggedIn(true)

  return (
    <div className="signup_wrapper">
        <Header />

        <h1 className="page_title">Sign Up</h1>
        <div className="form_container">
            <form className="formx">
              <div className="file_container">
                <div className="file_img_container">
                  <img src="/images/common/file_attachment.jpg" alt="사진 첨부" />
                  {/* <a href="https://www.flaticon.com/kr/free-icons/-" title="생강 빵 아이콘">생강 빵 아이콘  제작자: Freepik - Flaticon</a> */}
                </div>
                <label htmlFor="file_profile">
                  <i className="fa-solid fa-paperclip"></i>
                  {/* 아이콘 클릭 시 이벤트로 #file_profile에 정보 담고 사진 바뀌게 */}
                </label>
                <input type="file" id="file_profile" style={{display:"none"}} />
              </div>

              <div className="user_info">
                <label>UserName </label><input type="text" id="userId" />
                <label>E-mail </label><input type="text" id="userEmail" />
                <label>Password </label><input type="password" id="userPass" />
              </div>

              <div className="btn_container">
                <button type="submit" className="btn_submit" onClick={handleLogin}>submit</button>
              </div>
              <div className="btn_sign_link">Already have an account? <Link to="/login">Sign in</Link></div>
            </form>
        </div>
    </div>
  )
}

// export default function Settings() {
//   return (
//     <div className="settings">
//         <div className="settingsWrapper">
//             <div className="settingTitle">
//                 <div className="settingsUpdateTitle">Update Your Account</div>
//                 <div className="settingsUpdateTitle">Delete Account</div>
//             </div>
//         </div>
        
//     </div>
//   )
// }
