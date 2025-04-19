import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  completed?: boolean;
};

function ButtonItem({ children, onClick, completed }: Props) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer px-3 py-2 text-white  rounded-full 
        ${
          completed
            ? "bg-[#6433567c] hover:bg-[#d299c2]"
            : "bg-[#d299c2] hover:bg-[#d480bc]"
        }`}
    >
      {children}
    </button>
  );
}

export default ButtonItem;
