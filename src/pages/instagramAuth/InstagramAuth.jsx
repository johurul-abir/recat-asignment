
import { Link } from 'react-router-dom';
import './InstagramAuth.scss';
import { AiFillFacebook } from "react-icons/ai";
import authimg from '../../assets/ins.jpg'

const InstagramAuth = () => {
  return (
    <>
    <div className="instagram">
        <div className="container">
            <div className="auth-area">

                <div className="auth-left">
                    <img src={authimg} alt="" />
                </div>

                <div className="auth-right">
                    <div className="login-box">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png" alt="" />

                        <form action="" >
                            <input type="text" name="poe" placeholder='Phone number, username, or email'/>
                            <input type="text" name="pass" placeholder='Password' />

                            <button className='login-btn'>Log in</button>
                            
                        </form>
                        <hr />
                        <div className="facebook">
                            <h4> <AiFillFacebook/> Log in with Facebook</h4>
                            <Link>Forgot password?</Link>
                        </div>
                    </div>
                    <div className="signup-box">
                        <p>Don't have an account? <Link> Sign up</Link></p>
                    </div>
                    <p>Get the app</p>
                    <div className="app-box">
                        <Link><img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="" /></Link>
                        <Link>
                        <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="" />
                        </Link>

                    </div>
                </div>
            </div>

            <div className="auth-link">
                <Link>Meta </Link>
                <Link>About </Link>
                <Link>Blog</Link>
                <Link>Jobs </Link>
                <Link>Help</Link>
                <Link>API</Link>
                <Link>Privacy</Link>
                <Link>Terms </Link>
                <Link>Locations</Link>
                <Link>Instagram Lite</Link>
                <Link>Threads </Link>
                <Link>Contact Uploading & Non-Users </Link>
                <Link>Meta Verified </Link>
            </div>

            <div className="auth-footer">
            <select name="" id="">
                <option value="">English</option>
                <option value="">Bangla</option>
                <option value="">Urdu</option>
                <option value="">Hindi</option>
            </select>
            <p> &copy; 2023 Instagram from Meta</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default InstagramAuth