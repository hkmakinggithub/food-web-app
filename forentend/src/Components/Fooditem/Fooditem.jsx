/* eslint-disable react/prop-types */
import { useContext } from 'react';

import './Fooditem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../Context/StoreContext';

const Fooditem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removefromcart, url } = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={url+"/images/"+image} alt={name} className="food-item-image" />
        {!cartItems[id] ? (
          <img
            className='add'
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt='Add to cart'
          />
        ) : (
          <div className='food-item-counter'>
            <img
              src={assets.remove_icon_red}
              onClick={() => removefromcart(id)}
              alt="Remove from cart"
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              alt="Add more to cart"
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">₹{price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
