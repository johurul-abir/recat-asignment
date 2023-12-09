
import { Link } from 'react-router-dom';
import './facebookAuth.scss';
import { RxCross1 } from "react-icons/rx";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { useState } from 'react';
import {Day, Month} from '../../faker/dmy';
import { MdError } from "react-icons/md";


const Auth = () => {
  //modal state
  const [modal, setModel]= useState(false);

  //form input state
  const [input, setInput] =useState(
    {
      first_name: "",
      surname: "",
      poe: "",
      pass: "",
      day: "",
      month: "",
      year: "",
      gender: "",
    }
  )

  

  //heandler input
  const heandleInput = (e)=> {

    setInput((prevState) => ({
      ...prevState, 
      [e.target.name] : e.target.value,
    }))
  }

//form submit
const heandelUserRegister = (e)=>{

  e.preventDefault()
}


//blur border state
const [border, setBorder] = useState({
      first_name: true,
      surname: true,
      poe: true,
      pass: true,
      day: true,
      month: true,
      year: true,
      gender: true,
})

//form blur
const heandlerBlur = (e) =>{
  if(e.target.value=="" ){
    setBorder((prevState) => ({
      ...prevState, [e.target.name]:false,
  
    }))
  } else{
    setBorder((prevState) => ({
      ...prevState,
      [e.target.name]:true,
    }))
  }
  

}
//focus handler

const hendlFocus = (e)=>{
  setBorder((prevState)=>({

      ...prevState, [e.target.name]:true,
   
  }))
}
 

  //year array form
  const Years = Array.from({length:100},

    (a, i) => new Date().getFullYear() -i
    );
  
    
  return (
    <>
    
    <div className="auth">
        {
          modal&&(
            <div className="auth_model">
          <div className="modal-box">
            <div className="model-header">

              <h2>Sing up</h2>
              <i onClick={() => setModel(false)}> <RxCross1/> </i>
            </div>

            <p>It's quick and easy.</p>
            <hr />
            <div className="auth-from">
              <form action="" onSubmit={heandelUserRegister} >
                <div className="form-items">
                  

                  <div className="form-name">
                    <div className="error">         
                      <input className={ border.first_name ? "" : "bluer-border-red"} type="text" name='first_name' value={input.first_name} placeholder='First name' onChange={heandleInput} onBlur={heandlerBlur} onFocus={hendlFocus} />
                      <MdError style={border.first_name ? "" : {color:"red"}}/>
                    </div>

                   <div className="error">
                    <input className={ border.surname ? "" : "bluer-border-red"} type="text" name='surname' value={input.surname} placeholder='Surname' onChange={heandleInput} onBlur={heandlerBlur} onFocus={hendlFocus}/>
                    <MdError style={border.surname ? "" : {color:"red"}}/>
                   </div>
                  

                  </div> 

                  <div className="error w-100">
                    <input className={ border.poe ? "" : "bluer-border-red"} type="text" name='poe' value={input.poe} placeholder='Mobile number or email address' onChange={heandleInput} onBlur={heandlerBlur} onFocus={hendlFocus}/>
                    <MdError style={border.poe ? "" : {color:"red"}}/>
                  </div>

                  <div className="error w-100">
                    <input className={ border.pass ? "" : "bluer-border-red"} type="text" name='pass' value={input.pass} placeholder='Password' onChange={heandleInput} onBlur={heandlerBlur} onFocus={hendlFocus}/>
                    <MdError style={border.pass ? "" : {color:"red"}}/>
                  </div>
                </div> 
              

                <div className="auth-dob">
                    <p>Date of birth <span> <BsFillQuestionCircleFill/> </span></p>

                    <div className="select-dob">

                      <select className={ border.day ? "" : "bluer-border-red"} name="day" id="" value={input.day} onChange={heandleInput} onBlur={heandlerBlur} onFocus={hendlFocus} >
                        <option value="">Day</option>
                      {
                          Day?.map((item, index ) => (
                            <option selected={new Date().getDate()===item? true : false} value={item} key={index}> {item} </option>
                          
                           
                          ))
                        }
                        
                      </select>

                      <select className={ border.month ? "" : "bluer-border-red"} name="month" value={input.month} onChange={heandleInput} id="" onBlur={heandlerBlur} onFocus={hendlFocus}>
                        <option value="">Month</option>
                        {
                          Month?.map((item, index ) => (
                            <option selected={new Date().getMonth()===item? true : false} value={item} key={index}> {item} </option>
                          
                           
                          ))
                        }
                        
                        
                      </select>

                      <select className={ border.year ? "" : "bluer-border-red"} name="year" value={input.year} onChange={heandleInput} id="" onBlur={heandlerBlur} onFocus={hendlFocus}>
                        <option value="">year</option>
                      {
                          Years?.map((item, index ) => (
                            <option selected={new Date().getFullYear()===item? true:false} value={item} key={index} > {item} </option>           
                           
                          ))
                        }
                        
                       
                      </select>

                    </div>
                </div>

                <div className="auth-gender">
                  <p>Grender <span> <BsFillQuestionCircleFill/> </span></p>
                  <div className="gender-select">

                    <div className="gender-item">
                      <label>
                        <span>Female</span> 
                        <input type="radio" name='gender' value="female" onChange={heandleInput}/>
                      </label>
                    </div>

                    <div className="gender-item">
                      <label>
                        <span>Male</span> 
                        <input type="radio" name='gender' value="male" onChange={heandleInput}/>
                      </label>
                    </div>

                    <div className="gender-item">
                      <label>
                        <span>Custom</span> 
                        <input type="radio" name='gender' value="custom" onChange={heandleInput}/>
                      </label>
                    </div>

                   

                  </div>
                </div>
              
              <div className="form-paragraph">
                <p>People who use our service may have uploaded your contact information to Facebook. <Link to="">Learn more.</Link> </p>

                <p>By clicking Sign Up, you agree to <Link>our Terms, Privacy Policy</Link> and <Link>Cookies Policy.</Link> You may receive SMS notifications from us and can opt out at any time.</p>
                
              </div>
              <button className='form-btn' > Sign Up</button>
              </form>
            </div>
          </div>
        </div>
          )
        }







      <div className="container auth_container">

        <div className="auth-left">
          <div className="auth_banner_content">
            <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
            <h4>Facebook helps you connect and share with the people in your life.</h4>
          </div>
        </div>
        
        <div className="auth-right">
          <div className="login_box">
            <form action="">
              <div className="input_item">
                <input type="text" name='eop' placeholder='Email address or phone number' />
                <input type="text" name='eop' placeholder='Password' />
                <button type="submit" className='btn btn-primary login_btn' >Log in</button>
              </div>
            </form>
            <Link className='forgate'>Forgotten password?</Link>
            <hr />
            <button className='careate-new' onClick={()=> setModel(true)} >Create new account</button>
          </div>
          <p> <Link> Create a Page</Link> for a celebrity, brand or business. </p>
        </div>

      </div>





    </div>
    <div className="container">
       <div className="auth-footer">
      <div className="language">
        <p> English (UK)

          <Link>বাংলা</Link>
          <Link>অসমীয়া </Link>
          <Link>हिन्दी</Link>
          <Link>नेपाली</Link>
          <Link>Bahasa Indonesia </Link>
          <Link>العربية </Link>
          <Link> 中文(简体) </Link>
          <Link>Bahasa Melayu </Link>
          <Link> Español </Link>
          <Link> Português (Brasil) </Link>
          <span>+</span>
          
        </p>
        <hr />
      </div>
      <div className="link">
        <p>
          <Link>Sign Up</Link>
          <Link> Log in</Link>
          <Link>Messenger</Link>
          <Link>Facebook Lite</Link>
          <Link>Video </Link>
          <Link>Places </Link>
          <Link>Games </Link>
          <Link>Marketplace</Link>
          <Link>Meta Pay </Link>
          <Link> Meta Store</Link>
          <Link>Meta Quest</Link>
          <Link>Instagram </Link>
          <Link>Threads </Link>
          <Link> Fundraisers</Link>
          <Link>Services </Link>
          <Link>Voting Information Centre </Link>
          <Link>Privacy Policy</Link>
          <Link> Privacy Centre</Link>
          <Link> Groups</Link>
          <Link> About</Link>
          <Link>Create ad </Link>
          <Link> Create Page</Link>
          <Link> Developers</Link>
          <Link> Careers</Link>
          <Link>Cookies </Link>
          <Link> AdChoices</Link>
          <Link>Terms </Link>
          <Link>Help</Link>
          <Link>Contact uploading and non-users </Link>        
        </p>
      </div>
      <br />
     <p className='footer-tag'>Meta &copy; 2023</p>
     </div>
     
    </div>

   
    </>
  )
}

export default Auth