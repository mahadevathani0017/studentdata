import React, { useEffect, useState } from "react";
import {getDatabase,onValue,ref,remove} from 'firebase/database';
import { app } from "../Firebase";
import { useNavigate,useLocation } from "react-router-dom";

const Studentlist=() => {

    const [studentData,setStudentData]=useState(null);
    const navigate=useNavigate();
    const location=useLocation();
    console.log(location);
    useEffect(()=>{
       const db = getDatabase(app);
       const studentref =ref(db,'student');
       onValue(studentref,(snapshot) => {
        
        const data=snapshot.val();
       
        setStudentData(data);
    })
    },[])

    const deleteData = (key) => {
     const db=getDatabase(app);
     const studentref=ref(db,"student/"+key);
     remove(studentref);
    }
    return(
        <div>
          <h>Student List</h>
          {studentData && (
            <div>
              {Object.entries(studentData).map(([key,value])=>{
                return (
                  <div key={key}>
                    <p>
                       {value.registerNumber}{value.studentName} 
                       {value.phoneNumber}
                       <button onClick={()=>{deleteData(key)}}>Delete</button>
                       <button onClick={()=>{navigate('/updateStudent',{state:'124'})}}>Update</button> 
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
    )
}
export default Studentlist;
