import logo from "../../assets/ai.png";
type contentType = {
  content: string;
  userId: string;
};
export const ChatBuble = (props: contentType) => {
  return (
    <div className=" ">
      {props.userId !== "6699b6c51d28f4c2b1a215af" ? (
        <div className="flex justify-end   ">
          <div className="flex items-center bg-white shadow-sm rounded-xl p-2 gap-1 flex-row-reverse  ">
            <p className="text-black text-lg px-3  ">{props.content}</p>
          </div>
        </div>
      ) : (props.content.length!==0 &&
    (    <div className="flex justify-start    gap-2">
          <img src={logo} className="w-8 rounded-full h-8" />
          <div className="flex items-center  rounded-xl p-2 gap-1  ">
            <p className="text-black text-lg">{props.content}</p>
          </div>
        </div>)
      )}
    </div>
  );
};
