const TasksView = () => {
  return (
    <div className="flex flex-col justify-start mx-12 my-12">
      <div className="mb-12">
        <div className="text-text-dark font-medium text-lg mb-4">
          In backlog
        </div>
        <div className="flex justify-start">
          <div className="flex flex-col justify-between w-1/6  border-4 border-bckgrnd-blue_dark px-2 pt-1 pb-2 bg-bckgrnd-task rounded-md mr-12">
            <p className="text-text-dark font-medium text-sm">
              Set up error handling and logging mechanisms
            </p>
            <div className="w-fit mt-3 bg-bckgrnd-high px-4 py-0.5 rounded-lg text-white text-sm">
              High
            </div>
          </div>
          <div className="flex flex-col justify-between w-1/6 border-4 border-bckgrnd-blue_dark px-2 pt-1 pb-2 bg-bckgrnd-task rounded-md mr-12">
            <p className="text-text-dark font-medium text-sm">
              Develop end-to-end tests
            </p>
            <div className="w-fit mt-1 bg-bckgrnd-medium px-4 py-0.5 rounded-lg text-white text-sm">
              Medium
            </div>
          </div>
          <div className="flex flex-col justify-between w-1/6 border-4 border-bckgrnd-blue_dark px-2 pt-1 pb-2 bg-bckgrnd-task rounded-md mr-12">
            <p className="text-text-dark font-medium text-sm">
              Set up CI/CD pipelines using Jenkins
            </p>
            <div className="w-fit mt-1 bg-bckgrnd-low px-4 py-0.5 rounded-lg text-white text-sm">
              Low
            </div>
          </div>
        </div>
      </div>
      <div className="mb-12">
        <div className="text-text-dark font-medium text-lg mb-4">
          In progress
        </div>
        <div className="flex justify-start">
          <div className="flex flex-col justify-between w-1/6 border-4 border-bckgrnd-blue_dark px-2 pt-1 pb-2 bg-bckgrnd-task rounded-md mr-12">
            <p className="text-text-dark font-medium text-sm">
              Develop an admin dashboard for managing website content
            </p>
            <div className="flex justify-between mt-2">
              <div className="w-fit h-fit mt-1 bg-bckgrnd-high px-4 py-0.5 rounded-lg text-white text-sm">
                High
              </div>
              <div className="flex flex-col justify-center bg-bckgrnd-blue_dark rounded-full w-fit h-fit">
                <p className="text-center text-white px-1 py-0.5">AP</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-1/6 border-4 border-bckgrnd-blue_dark px-2 pt-1 pb-2 bg-bckgrnd-task rounded-md mr-12">
            <p className="text-text-dark font-medium text-sm">
              Implement multilingual support
            </p>
            <div className="flex justify-between">
              <div className="w-fit mt-1 bg-bckgrnd-medium px-4 py-0.5 rounded-lg text-white text-sm">
                Medium
              </div>
              <div className="flex flex-col justify-center bg-bckgrnd-blue_dark rounded-full w-fit h-fit">
                <p className="text-center text-white px-1.5 py-0.5">JE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-12">
        <div className="text-text-dark font-medium text-lg mb-4">Done</div>
        <div className="flex justify-start">
          <div className="flex flex-col justify-between w-1/6 border-4 border-bckgrnd-blue_dark px-2 pt-1 pb-2 bg-bckgrnd-task rounded-md mr-12">
            <p className="text-text-dark font-medium text-sm">
              Develop an SEO-friendly URL structure
            </p>
            <div className="flex justify-between">
              <div className="w-fit h-fit mt-1 bg-bckgrnd-high px-4 py-0.5 rounded-lg text-white text-sm">
                High
              </div>
              <div className="flex flex-col justify-center bg-bckgrnd-blue_dark rounded-full w-fit h-fit">
                <p className="text-center text-white px-1 py-0.5">MJ</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-1/6 border-4 border-bckgrnd-blue_dark px-2 pt-1 pb-2 bg-bckgrnd-task rounded-md mr-12">
            <p className="text-text-dark font-medium text-sm">
              Develop RESTful APIs for front-end and back-end communication
            </p>
            <div className="flex justify-between">
              <div className="w-fit mt-1 bg-bckgrnd-medium px-4 py-0.5 rounded-lg text-white text-sm">
                Medium
              </div>
              <div className="flex flex-col justify-center bg-bckgrnd-blue_dark rounded-full w-fit h-fit">
                <p className="text-center text-white px-1 py-0.5">HR</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-1/6 border-4 border-bckgrnd-blue_dark px-2 pt-1 pb-2 bg-bckgrnd-task rounded-md mr-12">
            <p className="text-text-dark font-medium text-sm">
              Develop a responsive grid system
            </p>
            <div className="flex justify-between">
              <div className="w-fit mt-1 bg-bckgrnd-high px-4 py-0.5 rounded-lg text-white text-sm">
                High
              </div>
              <div className="flex flex-col justify-center bg-bckgrnd-blue_dark rounded-full w-fit h-fit">
                <p className="text-center text-white px-1.5 py-0.5">JE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksView;
