import { useState } from "react";

const useLogine = () => {
  
    const [loading , setLoading] = useState(false);
     const login=() => {  
        try{
""
        }
        catch(err){
            console.log(err)

        }
        

    }


    return{loading,login}
 
}
export default useLogine;