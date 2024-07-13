import { ArrowRight, ArrowUp, ChevronUp, MessagesSquare } from "lucide-react";
import logo from "../../assets/logo.png";
import CardRecent from "../../components/cardRecent/CartRecent";
export const Home = () => {
  return (
    <div className="  w-full">
      <div className="flex flex-col gap-6 pt-20 min-h-screen max-w-[750px] mx-auto w-full py-3">
        <div className="flex justify-center items-center  w-full ">
          <img src={logo} alt="" className="w-14 h-14 " />

          <h1 className="text-3xl  text-center font-semibold text-gray-800  ">
            Welcome to ChatBot
          </h1>
        </div>
        {/* input message */}
        <div>
          <div className="relative bg-white w-full rounded-3xl border-[1px] border-gray-700/15 overflow-hidden p-2 pr-10">
          <button className="absolute right-3 w-8 h-8 rounded-xl bg-orange-800 hover:bg-orange-700 text-center "> <ArrowUp size={17} className="text-white mx-auto"/></button>
            <textarea
              style={{}}
              placeholder="How can chatbot help you today"
              className="  w-full  px-3 resize-none outline-none overflow-y-hidden max-h-[400px] font-semibold text-lg"
            >
           azazeze
            </textarea>
            <div className="px-4 text-center font-bold">chatbot</div> 
          </div>
        </div>
      <div className="space-y-4">
          {/* recent coversition */}
          <div className="flex justify-between font-semibold ">
          <div className="flex items-center gap-2">
            <div className="flex gap-2  items-center "> <MessagesSquare className="w-4 text-cyan-500 "/><h3>Your recent chats</h3> </div>
            
            <span className="flex hover:bg-slate-300/30 items-center px-1 rounded-lg"><ChevronUp className="w-4 h-4 "/>{"show"} </span>
          </div>
          <div className="group flex gap-2 items-center cursor-pointer   ">
          <h4 className="hover:underline">View all </h4> <ArrowRight className="w-4 h-4 group-hover:scale-110 group-hover:ml-1 transition-all duration-900 "  /> 
          </div>
        </div>
        {/* show Cards */}
        <div className="grid grid-cols-3 gap-3 flex-wrap ">
        {
            [...Array(6)].map((item,index) =>(<CardRecent key={index} size={40} icon={true}/>)
                
                 
             )
        }
           </div>
       
      </div>
      </div>
    </div>
  );
};
