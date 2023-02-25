import { useEffect, useState } from "react";
import randomColor from "randomcolor";
import Draggable from "react-draggable";
import { v4 } from "uuid";

import './ToDo.css'

function ToDo() {
    const [item, setItem] = useState("");
    const [items, setItems] = useState(
      JSON.parse(localStorage.getItem("items")) || []
    );
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
      }, [items]);

      const newItem = () => {
        if (item.trim !== "") {
          const newItem = {
            id: v4(),
            item,
            color: randomColor({
              luminosity: "light",
            }),
            defaultPos: {
              x: 500,
              y: -500,
            },
          };
          setItems((items) => [...items, newItem]);
          setItem("");
        } else {
          alert("Enter Something...");
          setItem("");
        }
      };
    
      const deleteNote = (id) => {
        setItems(items.filter((item) => item.id !== id));
      };
    
      const updatePosition = (data, index) => {
        let newArray = [...items];
        newArray[index].defaultPos = { x: data.x, y: data.y };
        setItems(newArray);
      };
    
      const keyPress = (e) => {
        if (e.key === "Enter") {
          newItem();
        }

      };

    return (
        <div className="todo_wrapper">
      <div className="todo_wrapper_body">
        <input
          value={item}
          type="text"
          placeholder="Enter something"
          onChange={(e) => setItem(e.target.value)}
          onKeyDown={(e) => keyPress(e)}
        />

        <button className="enter" onClick={newItem}>
          Enter
        </button>
      </div>
      {items.map((item, index) => {
        return (
          <Draggable
            key={index}
            defaultPosition={item.defaultPos}
            onStop={(e, data) => {
              updatePosition(data, index);
            }}
          >
            <div className="todo__item" style={{ backgroundColor: item.color }}>
              {`${item.item}`}
              <button className="delete" onClick={() => deleteNote(item.id)}>
                X
              </button>
            </div>
          </Draggable>
        );
      })}
    </div>
    );
}

export default ToDo;