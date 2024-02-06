import React from 'react';
import { shallow } from 'enzyme';
import Spinbutton from './Spinbutton';
describe("Spin Component", () => {
  it("should render Spinbutton", () => {
    const spincomponent = shallow(<Spinbutton />);
  });
});