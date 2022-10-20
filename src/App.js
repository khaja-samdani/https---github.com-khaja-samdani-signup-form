
import './App.css';
import React, { useContext } from 'react'
import { Routes ,Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Signup from './Signup';
import FormData from './FormData';
import { formData } from './Context';

const App=()=>{
  const {newdata,setNewData}=useContext(formData)
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="formdata" element={<FormData newdata={newdata} setNewData={setNewData} />} />
      </Routes>
    </div>
  )
}

export default App
