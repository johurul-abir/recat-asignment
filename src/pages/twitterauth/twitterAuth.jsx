
import { Link } from 'react-router-dom';
import './twitterAuth.scss';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const TwitterAuth = () => {
  return (
    <>
    <div className="twitter">
        <div className="container tw-cotainer">
            <div className="tw_left">
                <i><BsTwitterX/></i>
            </div>
            <div className="tw_right">
                <div className="right-box">
                    <h1>Happening now</h1>
                    <h4>Join today.</h4>
                    <button><Link> <span><FcGoogle/> </span> Sign up with Google</Link></button>

                    <button className='apple-btn'><Link> <span><FaApple/> </span> Sign up with Apple</Link></button>

                    <div className="divider">
                        <div className='d'></div>
                        or
                        <div className='d'></div>
                    </div>
                    <button className='create-acc'>Create account</button>
                    <p>By signing up, you agree to the <Link>Terms of Service</Link> and <Link>Privacy Policy</Link> , including <Link>Cookie Use.</Link></p>
                    <br />
                    <h5>Already have an account?</h5>
                    <button className='sing-btn'>Sing in</button>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default TwitterAuth