import React, { useEffect, useState } from "react";
import {getDatabase,onValue,ref,remove} from 'firebase/database';
import { app } from "../Firebase";

const Studentlist=() => {

    const [studentData,setStudentData]=useState(null);
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
