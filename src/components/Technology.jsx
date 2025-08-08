import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function App() {
  const [start, setStart] = useState(["C", "C++", "Java", "Python", "React"]);
  const [end, setEnd] = useState([]);

  const onDragEnd = ({ source, destination }) => {
    if (!destination) return;

    const from = source.droppableId === "start" ? start : end;
    const to = destination.droppableId === "start" ? start : end;
    const setFrom = source.droppableId === "start" ? setStart : setEnd;
    const setTo = destination.droppableId === "start" ? setStart : setEnd;

    const copyFrom = [...from];
    const copyTo = [...to];
    const [moved] = copyFrom.splice(source.index, 1);
    copyTo.splice(destination.index, 0, moved);

    setFrom(copyFrom);
    setTo(copyTo);
  };

  const listStyle = {
    background: "#fafafa",
    padding: 10,
    minHeight: 200,
    width: 200,
    border: "1px solid #ccc",
  };

  return (
    <div style={{ display: "flex", gap: 20, padding: 20 }}>
      <DragDropContext onDragEnd={onDragEnd}>
        {["start", "end"].map((id) => (
          <Droppable droppableId={id} key={id}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} style={listStyle}>
                <h3>{id}</h3>
                {(id === "start" ? start : end).map((item, i) => (
                  <Draggable key={item} draggableId={item} index={i}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          padding: 8,
                          marginBottom: 6,
                          background: "#eee",
                          ...provided.draggableProps.style,
                        }}
                      >
                        {item}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}
