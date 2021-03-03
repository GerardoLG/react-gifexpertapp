import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Tests on componetn <GifGridItem />", () => {
  test("should display the component correctly", () => {
    const wrapper = shallow(<GifGridItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
