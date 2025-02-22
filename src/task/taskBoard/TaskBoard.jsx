import { useEffect, useState } from "react";
import TaskBoardCard from "./TaskBoardCard";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch jobs from the backend
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-bold text-center mb-16">Task Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <TaskBoardCard title="To-Do" tasks={tasks} category="To-Do" bgColor="bg-purple-200" />
        <TaskBoardCard title="In Progress" tasks={tasks} category="In Progress" bgColor="bg-blue-200" />
        <TaskBoardCard title="Done" tasks={tasks} category="Done" bgColor="bg-green-200" />
      </div>
    </div>
  );
};

export default TaskBoard;
