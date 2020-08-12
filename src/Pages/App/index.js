import React from "react";
import "../App/index.css";

import List from "../../Components/List/";

import { Header } from "../../Elements/Header/";
import { Button } from "../../Elements/Button/";
import { AddTask } from "../../Elements/AddTask/";
import { Input } from "../../Elements/Input/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskText: "",
      tasks: ["write to-do list"],
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

  render() {
    return (
      <div className="app">
        <Header>To-Do:</Header>
        <List tasks={this.state.tasks} />
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
