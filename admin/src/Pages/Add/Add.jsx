/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios'
import { toast } from 'react-toastify';
const Add = ({url}) => {
  // const url = "http://localhost:5000"
  
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",  // Fix the typo from 'desciption' to 'description'
    price: "",
    category: "salad"
  });

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",  // Fix the typo from 'desciption' to 'description'
        price: "",
        category: "salad"
      })
      setImage(false)
      toast.success(response.data.message)
    }
    else {
      toast.error(response.data.message)
    }
    // You can send formData to your server here using fetch or axios
    // Example:
    // await fetch('/your-endpoint', {
    //   method: 'POST',
    //   body: formData
    // });
  };

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload Area"
            />
          </label>
          <input
            onChange={handleImageChange}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
            required
          />
        </div>

        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}  // Fix the typo from 'desciption' to 'description'
            name="description"
            rows="6"
            placeholder="Write content"
            required
          />
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              name="category"
              value={data.category}  // Ensure category value is set
              required
            >
              <option value="salad">Salad</option>
              <option value="rolls">Rolls</option>
              <option value="deserts">Deserts</option>
              <option value="sandwich">Sandwich</option>
              <option value="cake">Cake</option>
              <option value="pure veg">Pure Veg</option>
              <option value="pasta">Pasta</option>
              <option value="noodles">Noodles</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="₹200"
              required
            />
          </div>
        </div>

        <button type="submit" className="add-btn">Submit</button>
      </form>
    </div>
  );
}

export default Add;
