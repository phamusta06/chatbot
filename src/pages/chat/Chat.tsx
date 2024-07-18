import { useRef } from "react"
import { ChatBuble } from "../../components/chatbuble/ChatBuble"


 const Chat = () => {
  const txtArea=useRef(null)
   
  return (
    <div className=" flex justify-center w-full ">
        <div className="  flex flex-col items-center px-10  mb-24 max-w-[750px] w-full  ">
          <div className=" w-full space-y-3   py-10 pb-  ">
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType="fdef"/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType="rfref"/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType="fdef"/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType="rfref"/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType="fdef"/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType="rfref"/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType="fdef"/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType="rfref"/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType="fdef"/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType="rfref"/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType="fdef"/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType="rfref"/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType="fdef"/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType="rfref"/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType="fdef"/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType="rfref"/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType="fdef"/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType="rfref"/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType=""/>
     
  

          </div>
         <div className="flex justify-center w-full mt-3 ">
         <div className=" bg-white w-full  fixed bottom-0 rounded-t-3xl max-w-[750px] border-[1px] border-gray-700/15 overflow-hidden p-0">
          <textarea style={{}} ref={txtArea} className="  w-full  p-3 resize-none outline-none  max-h-[400px] font-semibold text-lg   " >re</textarea>
          <div className="     px-4 text-center">chatbot</div>         
             </div>
         </div>
         </div>

    </div>
  )
}
export default Chat