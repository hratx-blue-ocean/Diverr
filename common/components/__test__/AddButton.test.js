import AddButton from "../buttons/AddButton";
import MuiButton from "@material-ui/core/Button";
import { shallow } from "enzyme";

describe("AddButton", () => {
  test("Should render a single button", () => {
    const button = shallow(<AddButton text={"Log Dive!"} />);
    expect(button.find(MuiButton)).toHaveLength(1);
  });
  // test("This test will fail to test Github Actions", () => {
  //   expect(false).toBe(true);
  // });
});
