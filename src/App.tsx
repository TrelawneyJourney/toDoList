import "./App.css";
import Item from "./components/Item";
import { useItems } from "./hooks/useItems";

function App() {
  const { addItem, items, removeItem } = useItems();

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

  return (
    <main>
      <h1>ToDo List</h1>
      <section>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">
            <input
              type="text"
              name="item"
              placeholder="Add your Task"
              required
            />
            <button>Add</button>
          </label>
        </form>
      </section>
      <section>
        {items.length === 0 ? (
          <p>No tasks to perform.</p>
        ) : (
          <ul>
            {items.map((item) => {
              return (
                <Item
                  key={item.id}
                  text={item.text}
                  handleClick={handleRemoveItem(item.id)}
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
