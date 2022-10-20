
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useContext } from 'react'
import { formData } from './Context'
import  {useNavigate} from 'react-router-dom'

const Signup = () => {
    const navigate=useNavigate()
    const {data,setData,newdata,setNewData}=useContext(formData)
      
    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value
        setData({...data,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newUser={...data}
        setNewData([...newdata,newUser])
        setData({username:"",email:"",phone:"",password:""})
        navigate("formdata")
        
    }
  return (
    <div>
        <center>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" className="col-md-4">
                    <Form.Label htmlFor="username">Fullname</Form.Label>
                    <Form.Control type="text" value={data.username} 
                    name="username" id="username" onChange={handleInput} placeholder="Enter Name"/>
                </Form.Group>
                <Form.Group className="mb-3" className="col-md-4">
                    <Form.Label htmlFor="email">email</Form.Label>
                    <Form.Control type="text" value={data.email} name="email" 
                    id="email" onChange={handleInput} placeholder="Enter Email"/>
                </Form.Group>
                <Form.Group className="mb-3" className="col-md-4">
                    <Form.Label htmlFor="phone">phone</Form.Label>
                <Form.Control type="text" value={data.phone} name="phone"
                     id="phone" onChange={handleInput} placeholder="Enter number"/>
                </Form.Group>
                <Form.Group className="mb-3" className="col-md-4">
                    <Form.Label htmlFor="password">password</Form.Label>
                    <Form.Control type="password" value={data.password}
                     name="password" id="password" onChange={handleInput} placeholder="Enter password"/>
                </Form.Group>
                <div>
                <Button variant="primary" className="mt-3" type="submit">Registration</Button>
                </div>
            </Form>
        </center>
        
    </div>
  )
}

export default Signup