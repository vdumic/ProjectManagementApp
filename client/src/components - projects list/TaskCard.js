import Initials from "../functions/Initials";

const TaskCard = ({ title, priority, isAssigned, assignee }) => {
  const bckgrnd = "bg-bckgrnd-" + priority.toLowerCase();

  return (
    <div className="flex flex-col justify-between w-1/6 border-2 border-bckgrnd-blue_dark px-3 pt-2 pb-2 bg-bckgrnd-task rounded-md mr-12">
      <p className="text-text-dark font-medium text-sm">{title}</p>
      <div className="flex justify-between mt-2">
        <div
          className={`w-fit h-fit mt-1 ${bckgrnd} px-4 py-0.5 rounded-lg text-white text-sm`}
        >
          {priority}
        </div>
        {isAssigned && (
          <div className="flex flex-col justify-center bg-bckgrnd-blue_dark rounded-full w-7 h-fit">
            <p className="text-center text-white px-1 py-0.5">{Initials(assignee)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
