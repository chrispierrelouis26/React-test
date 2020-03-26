import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import {findByTestAtrr} from '../../../utils/index'

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};


describe("Header Component", () => {
  // BEFORE EACH test run setup component
  // which shallow renders our component header

  let component;
  beforeEach(() => {
    component = setUp();
  });

  test("should render without errors ", () => {
    const wrapper = findByTestAtrr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  test("should render a logo ", () => {
    const logo = findByTestAtrr(component, 'logoIMG');
    expect(logo.length).toBe(1);
  });
});
