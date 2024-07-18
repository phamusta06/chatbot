import { useState } from "react";
import toast from 'react-hot-toast';
import axios from 'axios';
 


const useLogine = () => {
  const urlApi:string=import.meta.env.VITE_API_URL
  const [loading, setLoading] = useState(false);
  const login =async ({email,password}:{email:string,password:string}) => {
    try {
      setLoading(true)
      const res =await axios.post(`${urlApi}/api/v1/login`,{email,password},{withCredentials:true})
      if(res.data.success){
         

        setLoading(false)
        localStorage.setItem("tokenChatBot",res.data.success?.token)
        window.location.href = '/';
      }




    } catch (error:any) {
      setLoading(false)
      

     toast.error(error.response?.data?.message||error.message )
    }finally{
      setLoading(false)
    }
  };

  return { loading, login };
};
export default useLogine;
