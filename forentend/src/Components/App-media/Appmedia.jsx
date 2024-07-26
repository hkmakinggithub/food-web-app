import React from 'react'
import './Appmedia.css'
import { assets } from '../../assets/assets'
const Appmedia = (props) => {
  return (
    <div className='app-media' id='app-media'>
      <p>{props.title} <br /> {props.name}</p>
      <div className="app-download-platfroms">
        <img src={assets.play_store} alt="" /><img src={assets.app_store} alt="" />
  
      </div>
    </div>
  )
}

export default Appmedia