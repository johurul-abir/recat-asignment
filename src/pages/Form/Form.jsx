
import { useState } from "react";
import "./Form.scss";

const Form = () => {

// setphoto useState Hook
const [usePhoto, setUsePhoto] = useState([])


//subject array
const subjects = ["Physics", "Chemistry",  "Biology", "Higher Math", "ICT", "English"];

 //selected useState Hook
const [selected, setSelected] = useState([])

//handleSelect
const handleSubject =(item)=>{
const oldval = [...selected]
if(selected.includes(item)){
    oldval.splice(selected.indexOf(item), 1)

    } else{
        oldval.push(item)
    }
    setSelected(oldval)
}

// input use hook
const [useInput, setUseInput] = useState({

    "name" : "",
    "phone": "",
    "email": "",
    "pass": "",
    "gender": "",
    "class": "",
    "subject" : selected,

})

//handleInput
const handleInput = (e)=>{
    setUseInput((prevState)=>({
        ...prevState, [e.target.name] : e.target.value
    }));
}

//

//photo handler
const handlePhoto = (e) => {
    setUsePhoto((prevState)=> 
        [...prevState, ...Array.from(e.target.files)]
    ) 
}//handleRemoveImg
const handleRemoveImg = (i) => {
   const img = usePhoto.filter((item)=> item!== i)

    setUsePhoto(img)
    
}

  return (
    <div className="test_form my-3">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <h1 className="text-center bg-light">Our Form</h1>
                        <div className="card-body">
                            <form action="">
                                <div className="item my-2">
                                    <label> Name </label>
                                    <input type="text"  name="name" placeholder="Type your name" className="form-control" onChange={handleInput}/>
                                </div>

                                <div className="item my-3">
                                    <label> Phone </label>
                                    <input type="text"  name="phone" placeholder="Type your Phone No" className="form-control" onChange={handleInput}/>
                                </div>

                                <div className="item my-3">
                                    <label> Email </label>
                                    <input type="text"  name="email" placeholder="Type your E-mail" className="form-control" onChange={handleInput}/>
                                </div>

                                <div className="item my-3">
                                    <label> Password </label>
                                    <input type="text"  name="pass" placeholder="Type your Password" className="form-control" onChange={handleInput}/>
                                </div>

                                <div className="item my-3">
                                    <h6>Gender</h6>
                                    <label> Femail &nbsp;
                                        <input type="radio"  name="gender" value="femail" onChange={handleInput}/>
                                    </label> &nbsp;

                                    <label> Mail &nbsp;
                                        <input type="radio"  name="gender" value="mail" onChange={handleInput}/>
                                    </label> 
                                </div>

                                <div className="item my-3">
                                    <label> Select your class </label>
                                    <select name="class" id="" className="form-control" onChange={handleInput} >
                                        <option> --select-- </option>
                                        <option value="Admission"> Admission </option>
                                        <option value="hsc"> HSC </option>
                                        <option value="ssc"> SSC </option>
                                    </select>
                                </div>

                                <div className="item my-3">
                                    <h6> Choose Your Subject </h6>

                                    {
                                        subjects.map((item, index)=> {
                                            return(
                                                <label key={index}> {item} &nbsp;
                                                    <input type="checkbox"  name="subject" checked={selected.includes(item)} onChange={()=>handleSubject(item)}/> &nbsp;
                                                </label>
                                                
                                            )
                                        })
                                    }
                                </div>

                                <div className="item my-3">
                                    <label> Select Photo </label>
                                    <input type="file"  name="photo" multiple className="form-control" onChange={handlePhoto}/>
                                    <div className="previmg w-100">
                                    {
                                        
                                        
                                        usePhoto.map((item, index) => {
                                            const previmg = URL.createObjectURL(item)

                                            return(
                                            
                                                <div className="img-box w-25" key={index} >
                                                    <img src={previmg} className="w-100" />
                                                <button type="button" className="btn btn-danger" onClick={() => handleRemoveImg(item)}>X</button>
                                                </div>
                                            
                                            )
                                        })
                                       
                                    }
                                    </div>
                                    
                                </div>

                                <div className="item my-3">
                                    <button className="btn btn-success">submit Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form