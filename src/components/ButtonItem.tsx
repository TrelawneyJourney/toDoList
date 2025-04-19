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
            ? "bg-gray-500 hover:bg-gray-400"
            : "bg-lila hover:bg-lila-2"
        }`}
    >
      {children}
    </button>
  );
}

export default ButtonItem;
