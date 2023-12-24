
import { useState } from "react"
import "./Students.scss"
import axios from "axios";
import { useEffect } from "react";

const Students = () => {
    
    const [student, seStudent] = useState([]);

    const getAllStudent = async () => {
        const studentData= await axios.get("http://localhost:6060/students")

        seStudent(studentData.data);
    }
    

    useEffect(()=>{
        getAllStudent();
    }, []);
 

  return (
    <>
    <div className="students">
        <div className="container">
            <div className="row my-2">
                <h2>Ours Students</h2>
                <div className="student-area">
                    {
                        student.map((item, index)=>{
                            return(
                                <div className="card student-loop" key={index}>
                        <div className="card-body">
                            <img src={item.photo} alt="" />

                            <h4>Name: {item.name} </h4>
                            <div className="class-roll">
                                <h6>class:{item.class}</h6>
                                <h6>Roll: 02</h6>
                            </div>
                            <h6>Gender: { item.gender}</h6>
                            <div className="location-school">
                                <p>Location: { item.location}</p>
                            </div>
                            
                            
                        </div>
                    </div>
                            )
                        })
                    }
                    

                    
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Students