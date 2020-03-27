import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";


import { findByTestAtrr , checkProps } from "../../../utils/index";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Checking PropTypes", () => {
    test("should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Description",
        tempArr: [
          {
            fName: "Test fName",
            lName: "Test lName",
            email: "test@email.com",
            age: 24,
            onlineStatus: false
          }
        ]
      };
      const propsErr = checkProps(Headline, expectedProps)
      expect(propsErr).toBe(undefined)
    });
  });
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test desc"
      };
      wrapper = setUp(props);
    });

    test("should render without errors", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    test("should render an h1", () => {
      const h1 = findByTestAtrr(wrapper, "Header");
      expect(h1.length).toBe(1);
    });

    test("should render a desc", () => {
      const desc = findByTestAtrr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    test("should  not render", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
