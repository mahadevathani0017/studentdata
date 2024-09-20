import React, { useState } from "react";
import { getDatabase, ref, set, update } from "firebase/database";
import { app } from "../Firebase";
import { useNavigate,useLocation } from "react-router-dom";
const UpdateStudent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  

  const [name, setName] = useState(location.state[1].studentName);
  const [phone, setPhone] = useState(location.state[1].phoneNumber);
  const [usnnumber, setUsnumber] = useState(location.state[1].registerNumber);
  
  const submitHandler = (event) => {
    event.preventDefault();
    const db = getDatabase(app);
    const studentref= ref(db,'student/'+location.state[0]);
    update(studentref,{
      studentName:name,
      phoneNumber:phone,
    })
    .then (res => {
      navigate('/studentList');
    })
    .catch(err => {
      console.log(err);
    })
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          disabled
          value={usnnumber}
          onChange={(e) => setUsnumber(e.target.value)}
          type="Number"
          placeholder="Enter your register number"
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Student Name"
        />
        <input
           value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="Number"
          placeholder="Student Phonenumber"
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};
export default UpdateStudent;
