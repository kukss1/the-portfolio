import { useEffect, useState } from "react";
import randomColor from "randomcolor";
import Draggable from "react-draggable";
import { v4 } from "uuid";
import { styled } from '@mui/material/styles';
import { Box, Button, TextField } from '@mui/material';

const TodoWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

const TodoItem = styled(Box)(({ backgroundColor }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '200px',
  padding: '8px',
  backgroundColor: backgroundColor
}));

function ToDo() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const newItem = () => {
    if (item.trim() !== "") {
      const newItem = {
        id: v4(),
        item,
        color: randomColor({
          luminosity: "light",
        }),
        defaultPos: {
          x: 1,
          y: -1,
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
    <TodoWrapper sx={{ my: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          value={item}
          type="text"
          placeholder="Enter something"
          onChange={(e) => setItem(e.target.value)}
          onKeyDown={(e) => keyPress(e)}
        />
        <Button
          className="enter"
          variant="contained"
          onClick={newItem}
          sx={{ ml: 1 }}
        >
          Enter
        </Button>
      </Box>
      {items.map((item, index) => {
        return (
          <Draggable
            key={index}
            defaultPosition={item.defaultPos}
            onStop={(e, data) => {
              updatePosition(data, index);
            }}
          >
            <TodoItem backgroundColor={item.color}>
              <span>{item.item}</span>
              <button className="delete" onClick={() => deleteNote(item.id)}>
                X
              </button>
            </TodoItem>
          </Draggable>
        );
      })}
    </TodoWrapper>
  );
}

export default ToDo;
