import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { motion } from "framer-motion";

export default function App() {
  const [start, setStart] = useState([
    { id: "1", name: "c", status: "start" ,date:new Date()},
    { id: "2", name: "cpp", status: "start" ,date:new Date()},
  ]);
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
    moved.status = destination.droppableId;
     if (destination.droppableId === "end" && !moved.completedDate) {
      moved.completedDate = new Date();
    }

    copyTo.splice(destination.index, 0, moved);

    setFrom(copyFrom);
    setTo(copyTo);
  };

   const getTimeDiff = (startDate, endDate) => {
    if (!startDate || !endDate) return "";
    const diffMs = endDate - startDate;
    const diffSec = Math.floor(diffMs / 1000);
    if (diffSec < 60) {
      return `${diffSec} sec`;
    }
    return `${Math.floor(diffSec / 60)} min ${diffSec % 60} sec`;
  };

  const listStyle = {
    background: "#fafafa",
    padding: 10,
    minHeight: 200,
    width: 200,
    border: "1px solid #ccc",
  };
  const items = ["🍎 Apple", "🍌 Banana", "🍇 Grapes"];

  

  return (
    <div style={{ display: "flex", gap: 20, padding: 20 }}>
      <DragDropContext onDragEnd={onDragEnd}>
        {["start", "end"].map((id) => (
          <Droppable droppableId={id} key={id}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={listStyle}
              >
                <h3>{id}</h3>
                {(id === "start" ? start : end).map((item, i) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id} 
                    index={i}
                  >
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
                        {item.name} - {item.status}- {item.date?.toLocaleString()}
                        {item.status === "end" && (
                          <>
                            <div>
                              End: {item.completedDate?.toLocaleTimeString()}
                            </div>
                            <div>
                              Time Taken:{" "}
                              {getTimeDiff(item.date, item.completedDate)}
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </Draggable>
                ))}
                
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    
    </div>
  );
}
