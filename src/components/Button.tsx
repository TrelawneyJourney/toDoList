import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  rounded?: string;
};

function Button({ children, onClick, rounded }: Props) {
  return (
    <button
      className={`bg-lila hover:bg-lila-2 text-white font-semibold   transition-colors text-lg px-4 py-2
        ${rounded || "rounded-full"} 
        `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
