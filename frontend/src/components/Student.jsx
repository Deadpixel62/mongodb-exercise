import React from 'react';
import {useState} from 'react';
import axios from 'axios'

function Student() {
    const [student, setStudent] = useState({
        firstName: "",
        lastName:"",
        email:"",
        group:""
    })


    const handleSubmit = (e) => {
       e.preventDefault();
       axios.post("http://localhost:4000/students/addStudent", student)
       .then(res=> console.log(res.data));
       setStudent({
         firstName: "",
         lastName: "",
         email: "",
         group: "",
       });
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your first Name"
          value={student.firstName}
          required
          onChange={(e) => {
            setStudent({
              ...student,
              firstName: e.target.value,
            });
          }}
        />
        <input
          type="text"
          placeholder="Enter your last Name"
          value={student.lastName}
          required
          onChange={(e) => {
            setStudent({
              ...student,
              lastName: e.target.value,
            });
          }}
        />
        <input
          type="email"
          placeholder="Enter your Email"
          required
          onChange={(e) => {
            setStudent({
              ...student,
              email: e.target.value,
            });
          }}
        />
        <input
          type="number"
          placeholder="Enter your group number"
          required
          onChange={(e) => {
            setStudent({
              ...student,
              group: e.target.value,
            });
          }}
        />
        <input type="submit" value="Add Student" />
      </form>
    </div>
  );
}

export default Student;
