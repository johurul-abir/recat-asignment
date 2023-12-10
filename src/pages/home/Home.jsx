
import { useState } from 'react'
import './Home.scss'


const Home = () => {
  const [wish, setwish] = useState();

  const wishHeandler = (e) => {
    setwish(() =>e.target.value)
  }
  return (
    <>
 
    <h1>Our home page </h1>
    <div className="box">
      <br />
      <br />
      <div className="input">
        <label htmlFor="">Type your wish</label> <br />
        <input type="text" name="wish" onChange={wishHeandler} />

        <br />
        <button className='btn btn-primary'>hello</button>
        <br />
        <br />
        <br />
        <h1>{wish}</h1>
      </div>
    </div>

    </>



  )
}

export default Home