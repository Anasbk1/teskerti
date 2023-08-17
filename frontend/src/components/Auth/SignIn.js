import React,{useState} from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import '../../App.css'
function SignIn(props) {
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")
    const navigate = useNavigate();
    const[error,setError]=useState("")
    const handelSubmit=()=>{
     axios.get(`http://localhost:3001/api/user/${email}`)
     .then((response)=>{
        if(response.data[0].password==password){
         navigate('/')}
         else{
            setError("Wrong password")
         }
        })
        .catch((error)=>{setError("User does not exist please sign up")});
     }
          
          const handleLoginClick = () => {
            navigate('/signup');
          };
    return (
        <div className='sign'>
        <h3>Sign In</h3>
        <input type="email" className='inp' placeholder='User E-mail'onChange={e=>setEmail(e.target.value)}/><br />
          <input type="password" className='inp' placeholder='User Password'onChange={e=>setPassword(e.target.value)}/><br />
          <input type="button" className='btn' value="Submit" onClick={handelSubmit}/>
          <input type="button" className='btn' value="Dont have an account" onClick={handleLoginClick}/><br />
          <h4>{error}</h4>
      </div>
    );
}

export default SignIn;