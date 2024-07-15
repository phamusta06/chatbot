import { MessagesSquare } from "lucide-react";
import { FC } from "react";

interface CartRecentProps {
  size: number;
  icon?: boolean;
  content?: string;
  time?: string;
}

const CartRecent: FC<CartRecentProps> = ({ size, content, time ,icon}) => {
  
    
  
  return (
    <div style={{ height:`${size}rem`}} className={`flex flex-col justify-between  rounded-xl shadow-sm p-4 hover bg-white bg-opacity-90 cursor-pointer hover:bg-white/40 hover:shadow-lg`}>
      <div className={icon?'':'hidden'}><MessagesSquare className="w-4 text-black/70" /></div>
      <h2 className="font-semibold text-sm  text-black/90">Mdscds</h2>
      <p className="text-gray-400">a</p>
    </div>
  );
}

export default CartRecent;