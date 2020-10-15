import React from "react";

import Task from "../Task/index";
import { ListWrapper } from "../../Elements/ListWrapper/index";

type Props = {
  tasks: string[];
};

class List extends React.Component<Props> {
  deleteTask = (index: number) => {
    let tasksArr: string[] = this.props.tasks;
    tasksArr.splice(index, 1);
    this.setState({ tasks: tasksArr });
  };

  render() {
    let tasks = this.props.tasks.map((val: string, key: number) => {
      return (
        <Task key={key} text={val} deleteMethod={() => this.deleteTask(key)} />
      );
    });

    return <ListWrapper>{tasks}</ListWrapper>;
  }
}

export default List;
