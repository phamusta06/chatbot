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
    <div className={`flex flex-col justify-between h-${size} border-1 rounded-xl   backdrop-blur-xl shadow-sm p-2 hover `}>
      <div className={icon?'':'hidden'}><MessagesSquare className="w-4 text-black/70" /></div>
      <h2 className="font-normal text-base text-black/95">Mdscds</h2>
      <p className="text-gray-400">a</p>
    </div>
  );
}

export default CartRecent;