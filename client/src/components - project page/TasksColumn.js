import Capitalize from "../functions/Capitalize";

const TasksColumn = ({ tasks, selectTask }) => {
  return (
    <div className="flex flex-col w-full space-y-4 md:space-y-6">
      {tasks.map((task) => (
        <button
          key={task.taskId}
          className="flex flex-col w-60 h-28 justify-between border-2 border-bckgrnd-blue_dark px-3 py-2 bg-bckgrnd-task rounded-md transition-all duration-300"
          onClick={() => selectTask(task)}
        >
          <p
            className="text-text-dark font-medium text-sm text-start"
            style={{
              fontSize: task.taskName.length > 30 ? "0.875rem" : "1rem",
              lineHeight: "1.2em",
            }}
          >
            {task.taskName}
          </p>

          <p className="text-text-dark text-xs md:text-sm truncate">
            {task.assignedTo}
          </p>

          <div
            className={`w-fit h-auto mt-2 px-3 py-1 rounded-lg text-white text-xs md:text-sm ${
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
      ))}
    </div>
  );
};

export default TasksColumn;