import React,{useState} from 'react'
import "../App.css"
import axios from 'axios';
import Edit from './Edit';
function Detail(props) {
  const [show,setShow]=useState(false)
  const [showEdit, setShowEdit] = useState(false)
  
  const handleShow = () => {
    setShow(!show);
    
  };
 

  const handleDelete=(id)=>{
   axios.delete(`http://localhost:3001/api/ticket/${id}`)
   .then((response)=>props.render())
   .catch((error)=>console.error(error))
}

  return (
    <div key={props.i} className="card">
      <div>
        <div className='card-content'>
        <button className="btn1" onClick={handleShow}>°°°</button>
             {show?(
              <>
              <button className="btn2" onClick={() => setShowEdit(!showEdit)}>EDIT </button>
              <button className="btn2" onClick={() => {handleDelete(props.e.id)}}>DELETE</button>
             </>
             ):null}
              </div>   
              <img src={props.e.image} alt={props.e.name}/>
              <div className="card-body">
              <h1 className="card-name">{props.e.name}</h1>
              <h2 className="card-category">{props.e.category}</h2>
              <h2 className="card-price">{props.e.price}</h2>
              <h3  className="card-details" >{props.e.details}</h3>
              </div>
            </div>
            <Edit e={props.e} render={props.render} showEdit={showEdit}/>
    </div>
  )
}

export default Detail