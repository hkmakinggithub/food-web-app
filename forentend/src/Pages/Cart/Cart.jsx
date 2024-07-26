// import React, { useContext } from 'react';
// import './Cart.css';
// import { StoreContext } from '../../Components/Context/StoreContext';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//   const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
//   const navigate = useNavigate();
  
//   // Filter items based on cartItems object
//   const cartItemS = food_list.filter(item => cartItems[item._id] > 0);

//   return (
//     <div className='cart'>
//       <div className="cart-items">
//         <div className="cart-title">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         <hr />
//         {cartItemS.length === 0 ? (
//           <p>Your cart is empty</p>
//         ) : (
//           cartItemS.map((item) => (
//             <div key={item._id} className="cart-title cart-items-item">
//               <img src={item.image} alt={item.name} />
//               <p>{item.name}</p>
//               <p>₹{item.price}</p>
//               <p>{cartItems[item._id]}</p>
//               <p>₹{item.price * cartItems[item._id]}</p>
//               <p className='xros' onClick={() => removeFromCart(item._id)}>x</p>
//               <hr />
//             </div>
//           ))
//         )}
//       </div>
//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>Cart Total</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>Subtotal</p>
//               <p>₹{getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Delivery Fee</p>
//               <p>₹{getTotalCartAmount() === 0 ? 0 : 20}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}</b>
//             </div>
//           </div>
//           <button onClick={() => navigate('/placeorder')}>Proceed to Checkout</button>
//         </div>
//         <div className="cart-promocode">
//           <div>
//             <p>If you have a promo code, enter it here</p>
//             <div className="cart-promocode-input">
//               <input type="text" placeholder='Promo code' />
//               <button>Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
import  { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Components/Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount,url } = useContext(StoreContext);
  const navigate = useNavigate();
  
  const cartItemS = food_list.filter(item => cartItems[item._id] > 0);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {cartItemS.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItemS.map((item) => (
            <div key={item._id} className="cart-title cart-items-item">
              <img src={url+"/images/"+item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>₹{item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>₹{item.price * cartItems[item._id]}</p>
              <p className='xros' onClick={() => removeFromCart(item._id)}>x</p>
              <hr />
            </div>
          ))
        )}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 20}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}</b>
            </div>
          </div>
          <button onClick={() => navigate('/placeorder')}>Proceed to Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;