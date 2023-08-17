import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import '../../App.css'
const Signup=()=> {
  const[name,setName]=useState("")
  const[password,setPassword]=useState("")
  const[email,setEmail]=useState("")
  const navigate = useNavigate();
  const[error,setError]=useState("")
  const handelSubmit=()=>{
    axios.post("http://localhost:3001/api/user",{
      name:name,
      email:email,
      password:password
    })
    .then(suc=>{console.log(suc)
      navigate('/login')})
    .catch(err=>{console.log(err)
    setError(err.response.data)})
      }
      const handleLoginClick = () => {
        navigate('/login');
      };
  return(
    <div className='sign'>
      <h3>Sign up</h3>
        <input type="text" className='inp' placeholder='User Name'onChange={e=>setName(e.target.value)}/><br />
        <input type="password" className='inp' placeholder='User Password'onChange={e=>setPassword(e.target.value)}/><br />
        <input type="email" className='inp' placeholder='User E-mail'onChange={e=>setEmail(e.target.value)}/><br />
        <input type="button" className='btn' value="Submit" onClick={handelSubmit}/>
        <input type="button" className='btn' value="Already have an account" onClick={handleLoginClick}/><br />
        <h4>{error}</h4>
    </div>
  )
}
export default Signup