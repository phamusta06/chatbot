import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {

  const urlApi:string=import.meta.env.VITE_API_URL
  const [loading, setLoading] = useState(false);
  const signup = async ({name,email, password}:{name:string,email:string, password:string}) => {

    setLoading(true)
    try{
      const res =await axios.post(`${urlApi}/api/v1/register`,{name,email,password},{withCredentials:true})
      if(res.data.success){
        toast.success("User has been created successfully!") 
        window.location.href ='/login'
        
      }

    }catch(error:any)
    {
 toast.error(error.response?.data?.message||error.message )
    }
    finally{
      setLoading(false)
    }
  }

  return {signup,loading}
}

export default useSignup