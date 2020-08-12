import React from "react";

import Task from "../Task/";
import { ListWrapper } from "../../Elements/ListWrapper/";

class List extends React.Component {
  deleteTask(index) {
    let tasksArr = this.props.tasks;
    tasksArr.splice(index, 1);
    this.setState({ tasks: tasksArr });
  }

  render() {
    let tasks = this.props.tasks.map((val, key) => {
      return (
        <Task key={key} text={val} deleteMethod={() => this.deleteTask(key)} />
      );
    });

    return <ListWrapper>{tasks}</ListWrapper>;
  }
}

export default List;
