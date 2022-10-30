import React, { useState, useEffect } from 'react'
// import {NavLink} from 'react-router-dom'
import axios from 'axios';
import './CSS/update.css'
import './CSS/read.css'
import { useNavigate } from 'react-router-dom'

const Read = () => {

  

const navigate = useNavigate();

const back_to=()=>{
navigate('/post');
}

  const [fetch,setfetch]=useState([]);
  const [fill,setfill]=useState({ email:"" , password:"" });

  useEffect(() => {fetch_data()}, [fetch])
  

const fetch_data=()=>{
  axios.get('http://localhost:3000/records')
  .then(response => {

  const repo_data = response.data;

    setfetch(repo_data)


// setfill(response.data[0])

  //  console.log(response.data[0])
  });
}
const Filled=(user)=>{

  setfill(user)
}

const postdelete=(id)=>{

  axios.delete(`http://localhost:3000/records/${id}`).then(() => {});
  fetch_data()

}


const  fill_value=(event)=>{
  const {name,value} = event.target;

  setfill((values) => ({
		...values,
		[name]: value,
	}));

}




const  Data_Update=(event)=>{
  event.preventDefault();
  axios.put(`http://localhost:3000/records/${fill.id}`,fill
)
  alert("updated")
  console.log(fill);
  fetch_data()
  setfill ({email:"" , password:""}) 
  
}



  return (
    <div className='read_div'>
            <div className='read_first_div'>
            <table className="table table-hover table-bordered  table_style">
  <thead className='table_head'>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody className='table_body'>

    {
      fetch.map((user,i)=>
      <tr key={i}>
      <th scope="row"> {user.id}  </th>
      <td> {user.email} </td>
      <td> {user.password} </td>
      <td>
         <button
         className='delete_btn_css'
          onClick={()=>postdelete(user.id)}
          >
            Delete
          </button>
         
         <button
           className='update_btn_css'
           onClick={()=>Filled(user)}
         >
          Update
           </button>
         
      </td>
    </tr>
      )
    }
    
    

  </tbody>
</table>

<button className='go_back' onClick={back_to}> Go Back</button>


<form action=""  onSubmit={(e)=>Data_Update(e)}>
<div>
<input type="email"
name='email'
value={fill.email}
autoComplete="off"
 className='post_input'
 onChange={fill_value}
   placeholder='enter your email'
   />
</div>
<div>
<input 
type="password"
 className='post_input'
 name='password'
 value={fill.password}
 
 autoComplete="off"
 onChange={fill_value}
placeholder='enter your password'
   />
</div>
<div className='btn_div'>

<button type="submit" className='view_btn' >Update</button>

</div>

       </form>


            </div>
  

    

    </div>



  )
}

export default Read