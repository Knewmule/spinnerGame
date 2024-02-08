import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import {Spinbutton,Now,Score, Spin} from './Spinbutton';
// import toJson from 'enzyme-to-json'
describe("Spinbutton Component", () => {
  it("describes Spin style", () =>{
    const spin = renderer.create(<Spin />).toJSON()
    expect(spin).toHaveStyleRule('display','flex')
    expect(spin).toHaveStyleRule('flex-direction','column')
    expect(spin).toHaveStyleRule('align-items','center')
    expect(spin).toMatchSnapshot()
  })
  it("describes Now style", () =>{
    const now = renderer.create(<Now />).toJSON()
    expect(now).toHaveStyleRule('display','flex')
    expect(now).toHaveStyleRule('justify-content','space-evenly')
    expect(now).toHaveStyleRule('align-items','flex-end')
    expect(now).toHaveStyleRule('margin','0px')
    expect(now).toHaveStyleRule('width','100%')
    expect(now).toHaveStyleRule('height','100px')
    expect(now).toHaveStyleRule('border-bottom','1px solid black')
    expect(now).toHaveStyleRule('font-size','30px')
    expect(now).toHaveStyleRule('background-color','#00ff00')
    expect(now).toHaveStyleRule('border-top-left-radius','106px')
    expect(now).toHaveStyleRule('border-top-right-radius','110px')
    expect(now).toHaveStyleRule('color','black')
    expect(now).toMatchSnapshot()
  })
  it("describes Score style", () =>{
    const score = renderer.create(<Score />).toJSON()
    expect(score).toHaveStyleRule('font-size','28px')
    expect(score).toHaveStyleRule('color','black')
    expect(score).toMatchSnapshot()
  })
});