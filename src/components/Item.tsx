// export type ItemId = `${string}-${string}-${string}-${string}-${string}`;

export interface Item {
  //   id: ItemId;
  id: `${string}-${string}-${string}-${string}-${string}`;
  text: string;
}

type Props = {
  text: string;
  handleClick: () => void;
};

function Item({ text, handleClick }: Props) {
  return (
    <li>
      {text}
      <button onClick={handleClick}>x</button>
    </li>
  );
}

export default Item;
