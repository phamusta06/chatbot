import { useContext, useEffect, useRef, useState } from "react";
import { ChatBuble } from "../../components/chatbuble/ChatBuble";
import useNewMessage from "../hooks/useNewMessage";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { ArrowUp } from "lucide-react";
import axios from "axios";

interface messageUser {
  message: string;
  userId: string;
}
const urlApi: string = import.meta.env.VITE_API_URL;
const Chat = () => {
  const [enableArea, setEnableArea] = useState<string>("");
  const startConversation=useRef<boolean>(true)
  const txtArea = useRef<HTMLAreaElement>(null);
  const showMessages = useRef<HTMLDivElement>();
  const CurrentUserContext = useContext(UserContext);
  const { user } = CurrentUserContext;
  const idConversation = useParams();

  const { loading, data, handleMessage } = useNewMessage();
  const [messages, setMessages] = useState<messageUser[]>([]);

  const getConversation = async () => {

    if (idConversation.id && user?.id) {
      const res = await handleMessage({
        conversationId: idConversation.id,
        userId: user.id,
      });
      const getMessage: any[] = res?.messages;
      if (getMessage.length === 1) {
        
        setMessages([{ message: getMessage[0].text, userId: user.id }]);
        const message:string=getMessage[0].text
        if(startConversation.current)
        {
          handleSendMessage(message)  
          
        }

 
        
      } else {
        setMessages([]);
        getMessage.map((message) => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { message: message?.text, userId: message?.msgByUserId },
          ]);
        });
      }

      console.log(getMessage);
    }
  };
  useEffect(() => {
    getConversation();
  }, [idConversation]);
  
  useEffect(() => {
    if (showMessages?.current) {
      showMessages?.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages]);
 const handleSendMessage=async(text:string) => {
  
      setMessages((prev) => [...prev,{message:text,userId:user?.id}])
    await handleMessage({
      conversationId: idConversation.id??'',
      userId: user.id, text
    });
    setEnableArea('')
    txtArea.current.value = null;
    const res=await axios.post(`${urlApi}/api/v1/ai`,{prompt:text})
    setMessages((prev) => [...prev,{message:res.data?.generatedText,userId:'6699b6c51d28f4c2b1a215af'}])
    await handleMessage({
      conversationId: idConversation.id??'',
      userId: user.id, text:res.data?.generatedText
    });
   
  }

  

  return (
    <div ref={showMessages} className=" flex justify-center w-full ">
      <div className="  flex flex-col items-center px-10  mb-24 max-w-[750px] w-full  ">
        <div className=" w-full space-y-3   py-10 pb-6   ">
          {messages?.map((item, index) => (
            <ChatBuble
              key={index}
              content={item.message}
              userId={item.userId}
            />
          ))}
        </div>
        <div className="flex justify-center w-full mt-3 ">
          <div className=" bg-white w-full  fixed bottom-0 rounded-t-3xl max-w-[750px] border-[1px] border-gray-700/15 overflow-hidden p-0">
            <textarea
              onChange={(e) => {
                const target = e.target as HTMLTextAreaElement;
                setEnableArea(target.value);
              }}
              ref={txtArea}
              className="  w-full  p-3 resize-none outline-none  max-h-[400px] font-semibold text-lg   "
            ></textarea>
             <button
               disabled={enableArea.trim().length<=0}
          onClick={() => { handleSendMessage( txtArea?.current?.value) }}
        

                 
                className="absolute right-2 top-2 w-8 h-8 rounded-xl bg-slate-900 hover:bg-slate-700 text-center "
              >
                <ArrowUp size={17} className="text-white mx-auto" />
              </button> 
            <div className="px-4 text-center">chatbot</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat;
