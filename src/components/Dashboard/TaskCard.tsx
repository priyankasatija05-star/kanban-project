import { Typography } from "@mui/material";
import MainCard from "../common/MainCard";
import Draggable from "react-draggable";
import { useRef } from "react";

const TaskCard = ({ task, boundary, index }:any) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      bounds={boundary}
      defaultPosition={{ x: index * 320, y: 50 }}
    >
      <div
        ref={nodeRef}
        style={{
          position: "absolute",
          cursor: "grab",
          zIndex: 100,
        }}
      >
        <MainCard sx={{ width: 300, height: 200 }}>
          <Typography>{task.description}</Typography>
          <Typography variant="caption">
            Status: {task.status}
          </Typography>
        </MainCard>
      </div>
    </Draggable>
  );
};

export default TaskCard;
