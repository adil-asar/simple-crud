import React from 'react'

const Update = () => {
  return (
    <div>
      <form action="" >
<div>
<input type="email"
name='email'
// value={fill.email}
autoComplete="off"
 className='post_input'
//  onChange={fill_value}
   placeholder='enter your email'
   />
</div>
<div>
<input 
type="password"
 className='post_input'
 name='password'
//  value={fill.password}
 autoComplete="off"
//  onChange={update_value}
placeholder='enter your password'
   />
</div>
<div className='btn_div'>

<button type="submit" className='view_btn' >Update</button>

</div>
       </form>
    </div>
  )
}

export default Update