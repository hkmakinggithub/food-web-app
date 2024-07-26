import  { useContext } from 'react';
import './Fooddisplay.css';
import { StoreContext } from '../Context/StoreContext';
import Fooditem from '../Fooditem/Fooditem';

function Fooddisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list
          .filter((item) => category === "All" || category === item.category)
          .map((item) => (
            <Fooditem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
}

export default Fooddisplay;