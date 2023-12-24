import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom";

const AddDevs = () => {
    const [inputDev, setInputDev] = useState({
        "name" : "",
        "location" : "",
        "skill" : "",
        "photo" : "",
    });
    const handleInputChange= (e) => {
        setInputDev((preState)=> ({
          ...preState, [e.target.name] : e.target.value
        }));
    }

    //handleDevsFormSubmiit
    const handleDevsFormSubmiit = (e)=> {
      e.preventDefault()

      axios.post("http://localhost:6060/devs", inputDev);
      setInputDev({
        "name" : "",
        "location" : "",
        "skill" : "",
        "photo" : ""
      });
      
      AddDevs();
    }

  return (
    <>
    <div className="devs my-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-5">
                <div className="card">

                  <div className="card-header">
                    <Link to="/"><button className='btn btn-warning'>Go back</button></Link>
                    <h2 className='text-center'>Add new devs</h2>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleDevsFormSubmiit}> 
                        <div className="item my-3">
                            <label htmlFor="">Name</label>
                            <input type="text" name="name" className="form-control" value={inputDev.name} onChange={handleInputChange} />
                        </div>

                        <div className="item my-3">
                            <label htmlFor="">Location</label>
                            <input type="text" name="location" className="form-control" value={inputDev.location} onChange={handleInputChange}  />
                        </div>

                        <div className="item my-3">
                            <label htmlFor="">Skill</label>
                            <input type="text" name="skill" className="form-control"  value={inputDev.skill} onChange={handleInputChange}/>
                        </div>

                        <div className="item my-3">
                            <label htmlFor="">Choose Your Photo</label>
                            <input type="link" name="photo" className="form-control"  value={inputDev.photo} onChange={handleInputChange}/>
                        </div>

                        <div className="item">
                            <button className="btn btn-success" type="submit"> Add Devs</button>
                        </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default AddDevs