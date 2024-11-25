import { ReactNode } from "react";

const MiniButton = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="
    bg-[#C1FF00] 
    text-black 
    text-[14px]
    font-medium 
    
    h-[18px]
    rounded-[20px]
    flex
    items-center
    justify-center
    py-4
    px-[1em]
    flex-row
  "
    >
      {children}
    </div>
  );
};

export { MiniButton };
