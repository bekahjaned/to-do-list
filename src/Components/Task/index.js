import React from "react";

import { Button } from "../../Elements/Button/";
import { TaskWrapper } from "../../Elements/TaskWrapper/";

class Task extends React.Component {
  render() {
    return (
      <TaskWrapper>
        <p>{this.props.text}</p>
        <Button onClick={this.props.deleteMethod}>x</Button>
      </TaskWrapper>
    );
  }
}
export default Task;
