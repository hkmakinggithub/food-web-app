import React from 'react'
import './Explore.css'
import { menu_list } from '../../assets/assets'
const Explore = ({category,setcategory}) => {
    
    return (
      
            <div className="explore-menu" id='explore-menu'>
                <h1>Explore our menu</h1>
                <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum neque dolor ratione, illo, dolorum magnam, consequatur beatae ducimus illum voluptate obcaecati maxime sapiente quisquam id autem provident ullam porro hic!</p>
                <div className="explore-menu-list">
                    {menu_list.map((item,index) => {
                        return (

                            <div onClick={()=>{setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} }  key={index} className="explore-menu-list-item">
                                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" /> 
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })
                    }
                </div>
                <hr />
            </div>
      
    )
}


export default Explore