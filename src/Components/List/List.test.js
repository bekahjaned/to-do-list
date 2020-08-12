import React from "react";
import renderer from "react-test-renderer";

import List from "./index";

it("render a Task", () => {
  // given
  const tasks = ["wash dishes", "do laundry"];

  // when
  const tree = renderer.create(<List tasks={tasks} />).toJSON();

  // then
  expect(tree).toMatchSnapshot();
});
