import React from 'react'

import './CSS/home.css'
import { BsFillArrowRightCircleFill } from "react-icons/bs";


import { useNavigate } from 'react-router-dom';

const Home = () => {

const navigate = useNavigate();

const jump_to =()=>{
     
    navigate('/post')

}

  return (

    <div className='home_div'>
          <div className='first_home_div'>
                 <h1 className='home_heading'>
                 crud app in react
                 </h1>
               
                 <button className='home_button' onClick={jump_to}>
                     Go <BsFillArrowRightCircleFill />
                 </button>
                
          </div>
    </div>

  )

}

export default Home