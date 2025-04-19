import "./App.css";
import Button from "./components/Button";
import Item from "./components/Item";
import { useItems } from "./hooks/useItems";

function App() {
  const { addItem, items, removeItem, checkedItem } = useItems();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { elements } = event.currentTarget;
    const input = elements.namedItem("item");
    const isInput = input instanceof HTMLInputElement;
    if (!isInput || input == null) return;
    addItem(input.value);
    input.value = "";
  };
  const handleRemoveItem = (id: string) => () => {
    removeItem(id);
  };

  const handleCheckedItem = (id: string) => () => {
    checkedItem(id);
  };

  return (
    <main className="min-h-screen bg-white text-gray-600 p-8 border border-[#d299c2] rounded-2xl">
      <h1 className="text-gray-500 text-3xl mb-8 font-bold">ToDo List</h1>

      <section>
        <form onSubmit={handleSubmit}>
          <div className="flex shadow-lg shadow-[#d299c2] rounded-xl mb-5">
            <input
              type="text"
              name="item"
              placeholder="Add your task"
              required
              className="flex-1 rounded-l-xl px-4 py-2 outline-none border border-gray-300 focus:ring-1 focus:ring-[#d299c2] "
            />
            <Button rounded="rounded-r-xl">Add</Button>
          </div>
        </form>
      </section>

      <section>
        {items.length === 0 ? (
          <p className="text-gray-500">No tasks to perform.</p>
        ) : (
          <ul className="">
            {items.map((item) => {
              return (
                <Item
                  key={item.id}
                  text={item.text}
                  completed={item.completed}
                  handleClick={handleRemoveItem(item.id)}
                  handleClickCompleted={handleCheckedItem(item.id)}
                />
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
