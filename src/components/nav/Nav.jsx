
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <>
        <nav>
            <div className="container nav-container">
                <div className="logo">
                    <Link to="/">Assignment</Link>
                </div>
                <div className="nav-menu">

                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/facebookauth">facebook-auth</Link></li>
                        <li><Link to="">Twitter-auth</Link></li>
                        <li><Link to="/instagramauth">Instagram-auth</Link></li>
                    </ul>

                </div>
            </div>
        </nav>
    
    </>
  )
}

export default Nav