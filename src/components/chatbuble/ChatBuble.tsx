 type contentType = {
  content: string;
  userType: string;
};
export const ChatBuble = (props: contentType) => {
  return (
    <div className="px-10 ">
      {props.userType.length > 0 ? (
        <div className="flex justify-start    ">
          
          <div className="flex items-center bg-white shadow-sm rounded-xl p-2 gap-1  ">
          <img src={""} className=" bg-black w-6 rounded-full h-6" /> <p className="text-black text-m  ">{props.content}</p>
          </div>
        </div>
      ) : (
        <div className="flex justify-start">
           
          <div className="flex items-center bg-gray-300 shadow-sm rounded-xl p-2 gap-1  ">
          <img src={""} className=" bg-black w-6 rounded-full h-6" /> <p className="text-black text-m">{props.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};
