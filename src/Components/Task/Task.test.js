import React from "react";
import renderer from "react-test-renderer";

import Task from "./index";

it("renders a task", () => {
  // given
  const task = "wash dishes";

  //   when
  const tree = renderer.create(<Task text={task} />).toJSON();

  //   then
  expect(tree).toMatchSnapshot();
});
