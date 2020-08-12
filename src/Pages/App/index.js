import React from "react";
import "../App/index.css";

import { Header } from "../../Elements/Header/";
import { List } from "../../Elements/List/";
import Task from "../../Elements/Task/";
import { Button } from "../../Elements/Button/";
import { AddTask } from "../../Elements/AddTask/";
import { Input } from "../../Elements/Input/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskText: "",
      tasks: [],
    };
  }

  updateText(taskText) {
    this.setState({ taskText: taskText.target.value });
  }

  addTask() {
    if (this.state.taskText === "") {
      return;
    }
    let tasksArr = this.state.tasks;
    tasksArr.push(this.state.taskText);
    this.setState({ taskText: "" });
    this.textInput.focus();
  }

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      let tasksArr = this.state.tasks;
      tasksArr.push(this.state.taskText);
      this.setState({ taskText: "" });
    }
  };

  deleteTask(index) {
    let tasksArr = this.state.tasks;
    tasksArr.splice(index, 1);
    this.setState({ tasks: tasksArr });
  }

  render() {
    let tasks = this.state.tasks.map((val, key) => {
      return (
        <Task key={key} text={val} deleteMethod={() => this.deleteTask(key)} />
      );
    });

    return (
      <div className="app">
        <Header>To-Do:</Header>
        <List>{tasks}</List>
        <AddTask>
          <Input
            type="text"
            placeholder="Add new task..."
            ref={(input) => {
              this.textInput = input;
            }}
            value={this.state.taskText}
            onChange={(taskText) => this.updateText(taskText)}
            onKeyPress={this.handleKeyPress.bind(this)}
          />
          <Button onClick={this.addTask.bind(this)}>+</Button>
        </AddTask>
      </div>
    );
  }
}

export default App;
