import TaskCard from "./TaskCard";

const inBacklog = [
  {
    name: "Set up error handling and logging mechanisms",
    priority: "High",
    assigned: false,
  },
  {
    name: "Develop end-to-end tests",
    priority: "Medium",
    assigned: false,
  },
  {
    name: "Set up CI/CD pipelines using Jenkins",
    priority: "Low",
    assigned: false,
  },
];

const inProgress = [
  {
    name: "Develop an admin dashboard for managing website content",
    priority: "Medium",
    assigned: true,
    assignee: "AP",
  },
  {
    name: "Implement multilingual support",
    priority: "Medium",
    assigned: true,
    assignee: "JE",
  },
];

const done = [
  {
    name: "Develop an SEO-friendly URL structure",
    priority: "High",
    assigned: true,
    assignee: "MJ",
  },
  {
    name: "Develop RESTful APIs for front-end and back-end communication",
    priority: "Medium",
    assigned: true,
    assignee: "HR",
  },
  {
    name: "Develop a responsive grid system",
    priority: "High",
    assigned: true,
    assignee: "JE",
  },
];

const TasksView = () => {
  return (
    <div className="">
      <div className="mb-12">
        <div className="text-text-dark font-medium text-lg mb-4">
          In backlog
        </div>
        <div className="flex justify-start">
          {inBacklog.map((task) => {
            return (
              <TaskCard
                title={task.name}
                priority={task.priority}
                isAssigned={task.assigned}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-12">
        <div className="text-text-dark font-medium text-lg mb-4">
          In progress
        </div>
        <div className="flex justify-start">
          {inProgress.map((task) => {
            return (
              <TaskCard
                title={task.name}
                priority={task.priority}
                isAssigned={task.assigned}
                asignee={task.assignee}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-12">
        <div className="text-text-dark font-medium text-lg mb-4">
          In progress
        </div>
        <div className="flex justify-start">
          {inProgress.map((task) => {
            return (
              <TaskCard
                title={task.name}
                priority={task.priority}
                isAssigned={task.assigned}
                asignee={task.assignee}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-12">
        <div className="text-text-dark font-medium text-lg mb-4">
          In progress
        </div>
        <div className="flex justify-start">
          {inProgress.map((task) => {
            return (
              <TaskCard
                title={task.name}
                priority={task.priority}
                isAssigned={task.assigned}
                asignee={task.assignee}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-12">
        <div className="text-text-dark font-medium text-lg mb-4">Done</div>
        <div className="flex justify-start">
          {done.map((task) => {
            return (
              <TaskCard
                title={task.name}
                priority={task.priority}
                isAssigned={task.assigned}
                asignee={task.assignee}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TasksView;
