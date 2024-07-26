/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import {React} from 'react';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidbar from './Components/Sidbar/Sidbar';
import { Route, Routes } from 'react-router-dom';
import Add from './Pages/Add/Add';
import List from './Pages/List/List';
import Orders from './Pages/Orders/Orders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const url = "http://localhost:5000";

  return (
    <>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-component">
        <Sidbar />
        <Routes>
          <Route path='/Add' element={<Add url={url} />} />
          <Route path='/List' element={<List title="All food list" url={url} />} />
          <Route path='/Orders' element={<Orders url={url} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
