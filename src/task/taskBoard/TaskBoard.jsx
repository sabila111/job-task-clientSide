import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState, useEffect } from "react";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://job-task-server-ten-hazel.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    movedTask.category = result.destination.droppableId;
    updatedTasks.splice(result.destination.index, 0, movedTask);

    setTasks(updatedTasks);

    // Update backend
    fetch(`https://job-task-server-ten-hazel.vercel.app/jobs/${movedTask._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category: movedTask.category })
    });
  };

  const categories = ["To-Do", "In Progress", "Done"];

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-3 gap-4 p-4">
        {categories.map((category) => (
          <Droppable key={category} droppableId={category}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-gradient-to-t from-indigo-700 to-indigo-200 p-4 rounded-md min-h-[300px]"
              >
                <h2 className="text-xl font-bold text-center mb-4">{category}</h2>
                {tasks
                  .filter((task) => task.category === category)
                  .map((task, index) => (
                    <Draggable key={task._id} draggableId={task._id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white p-3 my-2 rounded-md shadow-md"
                        >
                          <h3 className="font-bold">{task.title}</h3>
                          <p className="text-sm">{task.description}</p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;