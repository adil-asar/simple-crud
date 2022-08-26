import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
 import './CSS/post.css'
const Post = () => {

const navigate = useNavigate();

const direct_to=()=>{
  navigate('/read');
}

const [input,setinput]=useState({ email:"" , password:"" });

const input_value=(event)=>{

  const {name,value} = event.target;

  setinput((values) => ({
		...values,
		[name]: value,
	}));
}

const handle_submit=(event)=>{
  event.preventDefault();

  axios.post(`http://localhost:3000/records`,input
   
)
alert("data send ")
setinput ({email:"" , password:""}) 

}

  return (
        <div className='post_div'>
      <div className='post_first_div'> 
      
      <h1 className='post_heading'>
        Add Student Data
      </h1>
       <form action="" onSubmit={handle_submit}>
<div>
<input type="email"
name='email'
onChange={input_value}
autoComplete="off"
 className='post_input'
value={input.email}
   placeholder='enter your email'
   />
</div>
<div>
<input 
type="password"
 className='post_input'
 name='password'
 onChange={input_value}
 autoComplete="off"
 value={input.password}
placeholder='enter your password'
   />
</div>
<div className='btn_div'>
<input type="submit" className='post_input' id='btn_css'  />
<button className='view_btn' onClick={direct_to}>View</button>
</div>

       </form>
      </div>

      
        </div>
  )
}

export default Post