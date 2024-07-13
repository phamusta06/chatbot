import logo from '../../assets/logo.png'
type contentType={
    content:string,userType:string
 }
export const ChatBuble = ( props:contentType) => {
    
  return (
    <div className='px-1'>
     
   {     props.userType.length>0 ? (
            <div className="flex justify-end w-[80%]  ">
                <img src={logo}  className='w-12 ' />
                <div className="bg-transparent   rounded-lg
                    py-2   w-full">
                    <p className="text-black text-m  ">{props.content}</p>
                </div>
            </div>
        ) : (
            <div className="flex justify-end">
                <div className="bg-white rounded-full px-4 py-2 max-w-[80%]">
                    <p className="text-black text-m">{props.content}</p>
                </div>
            </div>
        )
     }
    </div>
  )
}
