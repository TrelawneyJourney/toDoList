import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ButtonItem from "./ButtonItem";

export interface Item {
  id: `${string}-${string}-${string}-${string}-${string}`;
  text: string;
  completed: boolean;
}

type Props = {
  text: string;
  handleClick: () => void;
  completed: boolean;
  handleClickCompleted: () => void;
};

function Item({ text, handleClick, completed, handleClickCompleted }: Props) {
  return (
    <li className="w-full py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ButtonItem onClick={handleClickCompleted} completed={completed}>
            <FaCheck />
          </ButtonItem>
          <p
            className={` ${
              completed ? "line-through text-gray-400" : "text-gray-500"
            } font-thin text-lg`}
          >
            {text}
          </p>
        </div>

        <ButtonItem onClick={handleClick}>
          <MdDelete />
        </ButtonItem>
      </div>
    </li>
  );
}

export default Item;
