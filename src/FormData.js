

import React from 'react'

const FormData = (props) => {
    const {newdata}=props
  return (
    <div>
        {
            newdata.map((user,index)=>{
                return (
                    <center>
                    <div key={index}>
                        <p>username: {user.username}</p>
                        <p>email: {user.email}</p>
                        <p>mobile no: {user.phone}</p>
                        <p>password: {user.password}</p>
                    </div>
                    </center>
                )
            })
        }
    </div>
  )
}

export default FormData