import React from "react";
import "../App/index.css";

import { Header } from "../../Elements/Header";
import { List } from "../../Elements/List";
import { Task } from "../../Elements/Task";
import { Button } from "../../Elements/Button";
import { AddTask } from "../../Elements/AddTask";
import { Input } from "../../Elements/Input";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header>To-Do:</Header>
        <List>
          <Task>
            Do this
            <Button>x</Button>
          </Task>
          <Task>
            Do that
            <Button>x</Button>
          </Task>
          <Task>
            Repeat
            <Button>x</Button>
          </Task>
          <Task>
            Relax
            <Button>x</Button>
          </Task>
        </List>
        <AddTask>
          <Input type="text" placeholder="Add new task..." />
          <Button>+</Button>
        </AddTask>
      </div>
    );
  }
}

export default App;
