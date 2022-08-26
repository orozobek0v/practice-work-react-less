import { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import NewAddItems from "./components/NewAddItems";

const data = [
  {
    id: "el1",
    title: "NextJS",
    checked: false,
  },
  {
    id: "el2",
    title: "ReactJs",
    checked: false,
  },
  {
    id: "el3",
    title: "JS",
    checked: false,
  },
];

function App() {
  const [ items, setItems ] = useState(data);
  const [newItems,setNewItems] = useState([])

  function addItemHandler(item) {
    const uppDate = [];
    items.map((el) => {
      el.id === item.id
        ? uppDate.push({ ...el, checked: true })
        : uppDate.push(el);
    });
    setItems(uppDate);

    const newItemsValue = [...newItems,item]
    setNewItems(newItemsValue)
  }
  return (
    <div className="App">
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            text={item.title}
            checked={item.checked}
            onClick={() => addItemHandler(item)}
          />
        )
      })}
    {/* {console.log(newItems)} */}
          <NewAddItems getItems={newItems}/>
    </div>
  );
}

export default App;
