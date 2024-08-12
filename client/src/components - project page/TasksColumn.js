import Capitalize from "../functions/Capitalize";

const TasksColumn = ({ tasks, selectTask }) => {
  return (
    <div className="flex flex-row md:flex-col w-full justify-start h-3/4">
      {tasks.map((task) => {
        return (
          <button
            key={task.taskId}
            className="flex flex-col w-44 h-auto justify-between border-2 border-bckgrnd-blue_dark px-3 pt-2 pb-2 bg-bckgrnd-task rounded-md mb-6 mr-2"
            onClick={() => selectTask(task)}
          >
            <p className="text-text-dark font-medium text-sm text-wrap">
              {task.taskName}
            </p>
            <p className="text-text-dark text-sm text-wrap pb-2">
              {task.assignedTo}
            </p>
            <div
              className={`w-fit h-fit mt-1 px-4 py-0.5 rounded-lg text-white text-sm ${
                task.priorityName.toLowerCase() === "high"
                  ? "bg-bckgrnd-high"
                  : task.priorityName.toLowerCase() === "medium"
                  ? "bg-bckgrnd-medium"
                  : "bg-bckgrnd-low"
              }`}
            >
              {Capitalize(task.priorityName)}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default TasksColumn;
