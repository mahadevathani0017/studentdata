import React, { useState } from "react";
import {getDatabase,ref,set} from 'firebase/database';
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom";
const AddStudent = () => {

    const [name,setName] =useState(null);
    const[phone,setPhone] = useState(null);
    const[usnnumber,setUsnumber]=useState(null);
    const navigate=useNavigate();
    const submitHandler= (event) => {
      
      event.preventDefault();
      const db = getDatabase(app);
      set(ref(db,'student/'+usnnumber),{
        studentName:name,
        phoneNumber:phone,
        registerNumber:usnnumber
      })
      .then(res=>{
        res.navigate("/studentList");
      })
      .catch( err=>{
        console.log(err);
      })
        
    }
    return (
      <div>
        <form onSubmit={submitHandler}>
          <input onChange={(e)=> setUsnumber(e.target.value)} type="Number" placeholder="Enter your register number"/>
          <input  onChange= {(e)=> setName(e.target.value)} type="text" placeholder="Student Name" />
          <input onChange= {(e)=> setPhone(e.target.value)} type="Number" placeholder="Student Phonenumber" />
          
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}
export default AddStudent;
