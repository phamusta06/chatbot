import { useRef } from "react"
import { ChatBuble } from "../../components/chatbuble/ChatBuble"


 const Chat = () => {
  const txtArea=useRef(null)
   
  return (
    <div className="flex justify-center px-2 w-full ">
        <div className="flex flex-col   min-h-screen max-w-[750px] w-full py-3b">
          <div className="grow space-y-3     ">
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType="fdef"/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType="rfref"/>
       <ChatBuble content="fkljge" userType=""/>
       <ChatBuble content="fkljge" userType=""/>

          </div>
          <div className="bg-white -full rounded-t-3xl border-[1px] border-gray-700/15 overflow-hidden p-0">
          <textarea style={{}} ref={txtArea} className="  w-full  px-3 resize-none outline-none overflow-y-hidden max-h-[400px] font-semibold text-lg   " >re</textarea>
          <div className="     px-4 text-center">zzzzzzzzzzzzzzzzzzzzzzzz</div>          </div>
            
         </div>

    </div>
  )
}
export default Chat