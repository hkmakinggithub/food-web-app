import { } from 'react'
import './Sidbar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const Sidbar = () => {
    return (
        <div className='sidbar'>
            <div className="sidbar-options">
                <NavLink to='/Add' className="sidbar-option">
                    <img src={assets.add_icon} alt="" />
                    <p>add items</p>
                </NavLink>
                <NavLink to='/List' className="sidbar-option">
                    <img src={assets.order_icon} alt="" />
                    <p>list items</p>
                </NavLink>
                <NavLink to='/Orders' className="sidbar-option">
                    <img src={assets.order_icon} alt="" />
                    <p>order</p>
                </NavLink>

            </div>

        </div>
    )
}

export default Sidbar
