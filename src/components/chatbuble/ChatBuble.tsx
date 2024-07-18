 import logo from '../../assets/ai.png'
 type contentType = {
  content: string;
  userType: string;
};
export const ChatBuble = (props: contentType) => {
  return (
    <div className=" ">
      {props.userType.length > 0 ? (
        <div className="flex justify-end   ">
          
          <div className="flex items-center bg-white shadow-sm rounded-xl p-2 gap-1 flex-row-reverse  ">
            <p className="text-black text-m  ">{props.content}</p>
          </div>
        </div>
      ) : (
        <div className="flex justify-start   gap-2">
           <img src={logo} className="   w-6 rounded-full h-6" />
          <div className="flex items-center bg-gray-300 shadow-sm rounded-xl p-2 gap-1  ">
           <p className="text-black text-m">{props.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};
