import { shallow } from "enzyme";
import LoggedInNav from "../nav/LoggedInNav";
import { makeStyles } from "@material-ui/core/styles";

const classes = {
  menuItem: {
    margin: "auto",
    cursor: "pointer",
    color: "black",
    fontWeight: 400,
  },
  menu: {
    display: "inline-block",
  },
  icon: {
    color: "black",
  },
};

describe("LoggedInNav", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<LoggedInNav classes={classes} />);
  });

  describe("Links", () => {
    it("should contain a link to sign out", () => {
      expect(wrapper.find('[data-testId="signOut"]').text()).toMatch(
        /sign out/gi
      );
    });

    it("should contain a link to the feed", () => {
      expect(wrapper.find('[data-testId="feed"]').text()).toEqual("Feed");
    });

    it("should contain a link to the logs", () => {
      expect(wrapper.find('[data-testId="logs"]').text()).toEqual("Your Logs");
    });
  });
});
