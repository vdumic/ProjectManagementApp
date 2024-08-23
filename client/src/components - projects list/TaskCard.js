import Capitalize from "../functions/Capitalize";

const TaskCard = ({ title, priority, assignee }) => {
  return (
    <div className="flex flex-col justify-between w-60 h-28 border-2 border-bckgrnd-blue_dark px-3 pt-2 pb-2 bg-bckgrnd-task rounded-md mr-12 mb-6">
      <p className="text-text-dark font-medium text-sm text-wrap">{title}</p>
      <p className="text-text-dark text-sm text-wrap pb-2">{assignee}</p>
      <div
        className={`w-fit h-fit mt-1 px-4 py-0.5 rounded-lg text-white text-sm ${
          priority.toLowerCase() === "high"
            ? "bg-bckgrnd-high"
            : priority.toLowerCase() === "medium"
            ? "bg-bckgrnd-medium"
            : "bg-bckgrnd-low"
        }`}
      >
        {Capitalize(priority)}
      </div>
    </div>
  );
};

export default TaskCard;
