const TaskBoardCard = ({ title, tasks, category, bgColor }) => {
    const filteredTasks = tasks.filter((task) => task.category === category);
  
    return (
      <div className={`p-5 rounded-lg shadow-lg ${bgColor}`}>
        <h2 className="text-xl font-bold text-center mb-3">{title}</h2>
        <div className="space-y-3">
          {filteredTasks.length === 0 ? (
            <p className="text-center text-gray-600">No tasks available</p>
          ) : (
            filteredTasks.map((task) => (
              <div key={task._id} className="p-3 bg-white rounded-lg shadow">
                <h3 className="font-semibold">{task.title}</h3>
                <p className="text-sm text-gray-600">{task.description}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(task.timestamp).toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  
  export default TaskBoardCard;
  