
import './Home.scss'
import { Link } from 'react-router-dom'


const Home = () => {

  return (
    <>
 
    <div className="container home-con">
      <ul>
        <li><Link to="/facebookauth">facebook</Link></li>
        <li><Link to="/twitterauth">twitter</Link></li>
        <li><Link to="/instagramauth">instagram</Link></li>
      </ul>
    </div>

    </>



  )
}

export default Home