import React, { MouseEventHandler } from "react";

import { Button } from "../../Elements/Button/";
import { TaskWrapper } from "../../Elements/TaskWrapper/";

type Props = {
  deleteMethod: MouseEventHandler;
  text: string;
};

const Task = ({ deleteMethod, text }: Props) => {
  return (
    <TaskWrapper>
      <p>{text}</p>
      <Button onClick={deleteMethod}>x</Button>
    </TaskWrapper>
  );
};
export default Task;
