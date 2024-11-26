import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

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

const Button = ({ children, ...props }: IProps) => {
  return (
    <button
      className="
        !bg-[#C1FF00] 
        !px-6 
        !py-2 
        !rounded-full 
        !text-black 
        !font-medium
        hover:!opacity-90
        !transition-all
        !h-auto
      "
      {...props}
    >
      {children}
    </button>
  );
};

export { MiniButton, Button };
