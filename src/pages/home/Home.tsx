import { ArrowRight, ArrowUp, ChevronUp, MessagesSquare } from "lucide-react";
import CardRecent from "../../components/cardRecent/CartRecent";
export const Home = () => {

  return (
    <div className="  w-full">
      <div className="flex flex-col gap-6 pt-20 min-h-screen max-w-[750px] mx-auto w-full py-3">
        <div className="flex justify-center items-center  w-full ">
          <h1 className="text-3xl  text-center font-semibold text-gray-800  ">
            Welcome to ChatBot
          </h1>
        </div>
        {/* input message */}
        <div>
          <div className="relative bg-white w-full rounded-3xl overflow-hidden p-2 pr-10 shadow-sm">
            <button className="absolute right-2 top-2 w-8 h-8 rounded-2xl bg-slate-900 hover:bg-slate-700 text-center ">
              {" "}
              <ArrowUp size={17} className="text-white mx-auto" />
            </button>
            <textarea
              style={{}}
              placeholder="How can chatbot help you today"
              className="  w-full  p-3 resize-none outline-none overflow-y-hidden max-h-[400px] text-sm text-slate-900 font-medium"
            >
           
            </textarea>
            <div className="px-4 text-center font-bold">chatbot</div>
          </div>
        </div>
        <div className="space-y-4">
          {/* recent coversition */}
          <div className="flex justify-between font-semibold ">
            <div className="flex items-center gap-2">
              <div className="flex gap-2  items-center ">
                {" "}
                <MessagesSquare className="w-4 text-cyan-500 " />
                <h3>Your recent chats</h3>{" "}
              </div>

              <span className="flex hover:bg-slate-300/30 items-center px-1 rounded-lg">
                <ChevronUp className="w-4 h-4 " />
                {"show"}{" "}
              </span>
            </div>
            <div className="group flex gap-2 items-center cursor-pointer   ">
              <h4 className="hover:underline">View all </h4>{" "}
              <ArrowRight className="w-4 h-4 group-hover:scale-110 group-hover:ml-1 transition-all duration-900 " />
            </div>
          </div>
          {/* show Cards */}
          <div className="grid grid-cols-3 gap-3 flex-wrap ">
            {[...Array(90)].map((item, index) => (
              <CardRecent key={index} size={9} icon={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
