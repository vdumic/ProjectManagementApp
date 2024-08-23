import { useParams } from "react-router-dom";
import { Reorder } from "framer-motion";

import { request } from "../axios/axios_helper";

import StatusTasksBox from "./StatusTasksBox";

const StatusesBox = ({ statuses, selectTask, stateChanged, setStatuses }) => {
  const { projectId } = useParams();

  const handleReorder = (newStatuses) => {
    let order = [];
    for (let i = 0; i < newStatuses.length; i++) {
      order.push(newStatuses[i].statusId);
    }
    setStatuses(newStatuses);
    request("PUT", "/project_statuses/reorder", {
      projectId,
      statusOrder: order,
    })
      .then((response) => response.data)
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="hidden md:flex">
        <Reorder.Group
          axis="x"
          values={statuses}
          onReorder={handleReorder}
          className="flex flex-col md:flex-row"
        >
          {statuses.map((status) => (
            <Reorder.Item key={status.statusId} value={status}>
              <StatusTasksBox
                status={status}
                selectTask={selectTask}
                stateChanged={stateChanged}
              />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
      <div className="flex md:hidden">
        <Reorder.Group
          axis="y"
          values={statuses}
          onReorder={handleReorder}
          className="flex flex-col md:flex-row"
        >
          {statuses.map((status) => (
            <Reorder.Item key={status.statusId} value={status}>
              <StatusTasksBox
                status={status}
                selectTask={selectTask}
                stateChanged={stateChanged}
              />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </>
  );
};

export default StatusesBox;
