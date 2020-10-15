import React from "react";
import "../App/index.css";

import List from "../../Components/List/index";

import { Header } from "../../Elements/Header/";
import { Button } from "../../Elements/Button/";
import { AddTask } from "../../Elements/AddTask/";
import { Input } from "../../Elements/Input/";

class App extends React.Component<any, any> {
  textInput: any;
  constructor(props: any) {
    super(props);
    this.state = {
      taskText: "",
      tasks: ["write to-do list", "eat some weird pasta"],
    };
  }

  updateText(taskText: any) {
    this.setState({ taskText: taskText.target.value });
  }

  addTask() {
    if (this.state.taskText === "") {
      return;
    }
    let tasksArr: string[] = this.state.tasks;
    tasksArr.push(this.state.taskText);
    this.setState({ taskText: "" });
    this.textInput.focus();
  }

  handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      let tasksArr: string[] = this.state.tasks;
      tasksArr.push(this.state.taskText);
      this.setState({ taskText: "" });
    }
  };

  render() {
    const { tasks, taskText } = this.state;

    return (
      <div className="app">
        <Header>To-Do:</Header>
        <List tasks={tasks} />
        <AddTask>
          <Input
            type="text"
            placeholder="Add new task..."
            ref={(input) => {
              this.textInput = input;
            }}
            value={taskText}
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
