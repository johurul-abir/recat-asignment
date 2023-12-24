import { useState } from "react";
import "./Admission.scss";
import { MdCancel } from "react-icons/md";
const Admission = () => {
  //photo manage useState
  const [photo, setPhoto] = useState([]);

  //image remove

  const [select, setSelect] = useState([]);

  //photo handlebar
  const handlePhoto = (e) => {
    setPhoto((prevState) => [...prevState, ...Array.from(e.target.files)]);
  };

  //Remove handlebar
  const handleRemove = (i) => {
    setPhoto(photo.filter((item) => item !== i));
  };
  //checkbox array

  const subject = [
    "Physics",
    "Chemistry",
    "Bilology",
    "Higher Math",
    "ICT",
    "English",
  ];

  //heandel select options
  const handleSelect = (item) => {
    const oldval = [...select];
    if(select.includes(item)){
        oldval.splice(select.indexOf(item), 1)
    }else{
        oldval.push(item);
    }

    setSelect(oldval)
    
  };

  

  return (
    <>
      <div className="admission-form">
        <div className="container">
          <div className="row justify-content-center my-5">
            <div className="col-md-6">
              <div className="form-area">
                <div className="card">
                  <div className="card-header">
                    <h1>Addmission Form</h1>
                  </div>
                  <div className="card-body">
                    <form action="">
                      <div className="data-item">
                        <label htmlFor="">Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                        />
                      </div>
                      <div className="data-item my-3">
                        <label htmlFor="">Fathers Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                        />
                      </div>
                      <div className="data-item my-3">
                        <label htmlFor="">Phone no</label>
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                        />
                      </div>
                      <div className="data-item my-3">
                        <select name="Clas" id="" className="form-control">
                          <option value=""> --Class-- </option>
                          <option value="HSC">HSC</option>
                          <option value="SSC">SSC</option>
                          <option value="University Addmission">
                            University Addmission
                          </option>
                        </select>
                      </div>

                      <div className="data-item my-3">
                        <label htmlFor=""> Choss your Subjects </label> <br />
                        {subject.map((item, index) => {
                          return (
                            <label className="m-2" key={index}>
                              {item} &nbsp;
                              <input
                                type="checkbox"
                                checked={select.includes(item)}
                                value={item}
                                onChange={() => handleSelect(item)}
                              />
                            </label>
                          );
                        })}
                      </div>

                      <div className="data-item upload-img my-3">
                        <input
                          type="file"
                          multiple={true}
                          name="photo"
                          className="form-control"
                          onChange={handlePhoto}
                        />

                        {photo.map((item, index) => {
                          const imgurl = URL.createObjectURL(item);
                          return (
                            <div className="imgbox" key={index}>
                              <img src={imgurl} alt="" />
                              <button
                                type="button"
                                onClick={() => handleRemove(item)}
                              >
                                <MdCancel />
                              </button>
                            </div>
                          );
                        })}
                      </div>

                      <div className="data-item my-3">
                        <button type="submit" className="btn btn-success">
                          
                          Addmission now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admission;
