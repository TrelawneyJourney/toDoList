import { useState } from "react";
import { type Item } from "../components/Item";

export const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (text: string) => {
    const newItem: Item = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };

    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => {
      return prevItems.filter((currentItem) => currentItem.id !== id);
    });
  };

  const checkedItem = (id: string) => {
    setItems((prevItems) => {
      return prevItems.map((item) =>
        item.id == id ? { ...item, completed: !item.completed } : item
      );
    });
  };

  return {
    items,
    addItem,
    removeItem,
    checkedItem,
  };
};
