import { useState, useEffect } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types
const List = ({title,url}) => {
  const [list, setList] = useState([]);
 

  // const url = "http://localhost:5000";

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      console.log(response.data);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching the list");
      }
    } catch (error) {
      toast.error("An error occurred while fetching the list");
    } 
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removefood =async(foodId)=>{
const response =await axios .post(`${url}/api/food/remove`,{id:foodId})
await fetchList();
if(response.data.success){
  toast.success(response.data.message)
}
else{
  toast.error("error")
}
  }

  return (
    <div className="list add flex-col">
      <h2>{title}</h2>
   
        {/* <p>No items available</p> */}
     <div className="list-table">
<div className="list-table-format title">
  <b>image</b>
  <b>name</b>
  <b>category</b>
  <b>price</b>
  <b>action</b>
</div>
       
          {list.map((item, index) => (
            
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt={item.name} className="list-item-image" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>₹{item.price}</p>
              <p className='cursor' onClick={()=>{removefood(item._id)}}>x</p>
            </div>
          ))}
        </div>
          </div>
     
    
  )
  
    
  
};

export default List;
