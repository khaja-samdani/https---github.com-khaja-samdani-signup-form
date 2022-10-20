import { createContext } from "react";
import { useState } from "react";

export const formData=createContext()
export const Context=({children})=>{
    const [data,setData]=useState({
        username:"",
        email:"",
        phone:"",
        password:""
    })
    const [newdata,setNewData]=useState([])
    return (
        <formData.Provider value={{data,setData,newdata,setNewData}}>
            {children}
        </formData.Provider>
    )
}
