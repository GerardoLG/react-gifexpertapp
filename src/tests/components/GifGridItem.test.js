import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Tests on componetn <GifGridItem />", () => {
  const props = {
    title: "Un titulo",
    url: "https://localhost/algo.jpg",
  };
  const wrapper = shallow(<GifGridItem {...props} />);

  test("should display the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should have a paragraph with a title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(props.title);
  });

  test("should have the image equal to title and url from props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(props.url);
    expect(img.prop("alt")).toBe(props.title);
  });

  test("should have CSS classname animate__fadeInDown in div", () => {
    const div = wrapper.find("div");

    expect(div.prop("className").includes("animate__fadeInDown")).toBe(true);
  });
});
