import { useSelector } from "react-redux";
import {  RootState } from "../../store";
import TaskCard from "./TaskCard";

const Task = ({boundaryRef,status }:any) => {

const tasks = useSelector((state: RootState) => state.getTask.tasks);
const filteredTasks = tasks.filter(
    (task) => task.status === status
  );
  return (
 
    <>
       {filteredTasks.map((task, index) => (
        <TaskCard
          key={`${task.description}-${task.status}`}
          task={task}
          index={index}
          boundary={boundaryRef}
        />
      ))}
      </>
  );
};

export default Task;
