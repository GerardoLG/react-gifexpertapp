import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe("Tests on <GiftExpertApp />", () => {
  test("should show <GiftExpertApp /> correctly", () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should show a list of categories", () => {
    const categories = ["Samurai X", "Dragon Ball"];

    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
