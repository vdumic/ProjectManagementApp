const TasksList = ({ tasks }) => {
  return (
    <div className="ml-5 overflow-auto">
      {tasks.map((task) => {
        return (
          <p className="text-text-dark my-2 text-lg text-start">{task.name}</p>
        );
      })}
    </div>
  );
};

export default TasksList;
