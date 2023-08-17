import React,{useState} from 'react'
import "../App.css"
import axios from 'axios';
function Edit(props) {
    const [image, setImage] = useState(props.e.image);
    const [name, setProducName] = useState(props.e.name);
    const [category, setCategory] = useState(props.e.category);
    const [price, setPrice] = useState(props.e.price);
    const [details, setDetails] = useState(props.e.details);
    var ticket={
        image: image,
        name:name,
        category:category,
        price:price,
        details:details,
    }

    
    const handleUpdate = (id) => {
   axios.put(`http://localhost:3001/api/ticket/${id}`,ticket)
   .then(response => {props.render()})
   .catch(error=>console.log(error))
    };
  return (
    <div className='edit'>
         {props.showEdit?(
    <div>
         <>
         <input
           placeholder="image"
           value={image}
           onChange={(e) => setImage(e.target.value)}
         />
          <input
            placeholder="producName"
            value={name}
            onChange={(e) => setProducName(e.target.value)}
          />
          <input
            placeholder="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
            <input
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          <input
            placeholder="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          <button onClick={() => {handleUpdate(props.e.id)}} >Submit</button>
          </>
    </div>
          ):null}  
          </div>
  )
}

export default Edit