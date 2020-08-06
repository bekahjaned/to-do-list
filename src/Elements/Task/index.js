import React from "react";
import styled from "styled-components";

import { Button } from "../../Elements/Button/";

class Task extends React.Component {
  render() {
    const TaskWrapper = styled.div`
      height: 40px;
      font-weight: 400px;
      font-size: 16px;
      padding-left: 10px;
      padding-top: 5px;
      margin: 7px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #f1f4f9;
      border-radius: 10px;
    `;

    return (
      <TaskWrapper>
        {this.props.text}
        <Button onClick={this.props.deleteMethod}>x</Button>
      </TaskWrapper>
    );
  }
}
export default Task;
