import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios'

function List() {
     const [exos, setExos] = useState([]);
     const [students, setStudents] = useState([])

     useEffect(
       () =>
         axios
           .get("http://localhost:4000/exos/allExo")
           .then((res) => setExos(res.data))
           .then(console.log(exos)),
           axios.get("http://localhost:4000/students/allStudents")
           .then(res=> console.log(res.data)),  

       []
     );
  return(
      <div>
<ul>
{exos.map((exo)=>{
    return <li>{exo.title} : {exo.description} <br/> 
    applied students : -- {students.filter((student) => student._id == "620254117e40c92c751320c3").lastName}
    </li>
})}
</ul>
<p>Total number of exercises: {exos.length}</p>
      </div>
  );
}

export default List;
