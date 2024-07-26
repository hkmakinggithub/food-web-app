/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets';
import { useEffect } from 'react';
import { StoreContext } from '../Context/StoreContext';
import axois from 'axios'

const Login = ({ setShowLogin }) => {
  const { url, settoken } = useContext(StoreContext)
  const [currState, setCurrState] = useState("sign-up");
  const [data, setdata] = useState({ name: "", email: "", password: "" })

  const onchangehander = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata(data => ({ ...data, [name]: value }))
  }

  const onlogin = async (event) => {
    event.preventDefault()
    let newurl = url;
    if (currState === "Login") {
      newurl += "/api/user/login"
    }
    else {
      newurl += "/api/user/register"
    }
    const responce = await axois.post(newurl, data);
    if (responce.data.success) {
settoken(responce.data.token);
localStorage.setItem("token",responce.data.token)
setShowLogin(false)
}else{
  alert(responce.data.message)
}
  }
  useEffect(() => {
    console.log(data);
  }, [data])

  return (
    <div className='login-popup'>
      <form onSubmit={onlogin} className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currState === "sign-up" ? "Sign Up" : "Login"}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close icon"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "sign-up" && (
            <input
              onChange={onchangehander}
              value={data.name}

              type="text"
              name="name"
              placeholder='Your name'
              required
            />
          )}
          <input
            onChange={onchangehander}
            value={data.email}

            type="email"
            name="email"
            placeholder='Your email'
            required
          />
          <input
            onChange={onchangehander}
            value={data.password}

            type="password"
            name="password"
            placeholder='Password'
            required
          />
        </div>
        <button type="submit">
          {currState === "sign-up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "login" ? (
          <p>Create a new account?
            <span onClick={() => setCurrState("sign-up")}>
              Click here
            </span>
          </p>
        ) : (
          <p>Already have an account?
            <span onClick={() => setCurrState("login")}>
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;
