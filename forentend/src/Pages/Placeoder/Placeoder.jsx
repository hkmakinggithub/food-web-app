import { useContext, useState } from 'react'
import './Placeoder.css'
import { StoreContext } from '../../Components/Context/StoreContext'
import { useEffect } from 'react'
import axios from 'axios'

const Placeoder = () => {
  const { getTotalCartAmount, food_list,
    cartItems, url,token, } = useContext(StoreContext)


  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: ""
  })


  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata(data => ({ ...data, [name]: value }))
  }


  const placeorder = async (event) => {
    event.preventDefault();
    let orderItems = [];
  
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    });
  
    console.log(orderItems);
    
    let oredrdate ={
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2
      
    };
      let response = await axios.post(url+"/api/order",oredrdate,{headers:{token}})
      if (response.data.suuccess) {
        const{session_url} = response.data;
        window.location.replace(session_url)
      }
      else{
        alert("error")
      }

}
useEffect(()=>{
console.log(data);
},[data])

  return (
    <form onSubmit={placeorder} className='place-order'>
      <div className="place-order-left">
        <p className="title">delivery infromation</p>
        <div className="multi-felids">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name' />
        </div>
        <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email Address' />

        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
        <div className="multi-felids">
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
        </div>
        <div className="multi-felids">
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />


          <input required name='zipCode' onChange={onChangeHandler} value={data.zipCode} type="text" placeholder='Zip Code' />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="tel" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>cart total</h2>
          <div className="">
            <div className="cart-total-details">
              <p>delivey fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 20}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>food total Or delivery charge</b>
              <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}</b>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>total</b>
              <b>₹{getTotalCartAmount() + 20}</b>
            </div>

          </div>
          <button type='submit'>process to chckeout</button>
        </div>
      </div>

    </form>
  )
}

export default Placeoder