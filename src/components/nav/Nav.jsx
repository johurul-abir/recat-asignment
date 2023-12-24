
import { Link, useLocation } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
    const location = useLocation();
  return (
    <>
        <nav>
            <div className="container nav-container">
                <div className="logo">
                    <Link to="/">Assignment</Link>
                </div>
                <div className="nav-menu">

                    <ul>
                        <li><Link to="/" className={location.pathname ==="/" ? "active":""} >Home</Link></li>

                        <li><Link to="/facebookauth" className={location.pathname ==="/facebookauth" ? "active":""} >facebook-auth</Link></li>

                        <li><Link to="/twitterauth" className={location.pathname ==="/twitterauth" ? "active":""} >Twitter-auth</Link></li>

                        <li ><Link to="/instagramauth" className={location.pathname ==="/instagramauth" ? "active":""} >Instagram-auth</Link></li>

                        <li ><Link to="/addmission" className={location.pathname ==="/addmission" ? "active":""} >Addmission</Link></li>

                        <li ><Link to="/students" className={location.pathname ==="/students" ? "active":""} >Students</Link></li>

                        <li ><Link to="/form" className={location.pathname ==="/form" ? "active":""} >Form</Link></li>
                        <li ><Link to="/linkedin" className={location.pathname ==="/linkedin" ? "active":""} >LinkedIn</Link></li>
                    </ul>

                </div>
            </div>
        </nav>
    
    </>
  )
}

export default Nav