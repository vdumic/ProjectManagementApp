const getInitials = (name) => {
  const names = name.split(" ");
  const first = names[0].charAt(0).toUpperCase();
  const last = names[names.length - 1].charAt(0).toUpperCase();

  return first + last;
};

const StatusTasksBox = ({ status, tasks }) => {
  return (
    <div className="flex h-full flex-col justify-start w-1/5 mx-4">
      <h1 className="text-text-dark text-xl font-medium mb-4 break-normal">
        {status}
      </h1>
      <div className="flex flex-col justify-start bg-bckgrnd-block h-3/4 overflow-auto">
        {tasks.map((task) => {
          return (
            <div className="flex w-full items-stretch justify-between">
              <p className="text-text-dark break-normal text-lg m-2">
                {task.name}
              </p>
              {task.isAssigned && (
                <div className="flex flex-col justify-center border-2 border-button-blue rounded-full m-2 h-fit">
                  <p className="text-center px-3 py-2">
                    {getInitials(task.user)}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatusTasksBox;
