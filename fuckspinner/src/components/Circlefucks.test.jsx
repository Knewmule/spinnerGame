import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import {Drawout, Drawoutspan, Fucksr, circlerotate,Circlefucks} from './Circlefucks';



describe("Ciclefucks Component", () => {
    it("describes Drawout style", () =>{
      const drawout = renderer.create(<Drawout />).toJSON()
      const drawoutCirclerotate = shallow(<Drawout id={circlerotate} />)
      expect(drawout).toHaveStyleRule('transform'+drawoutCirclerotate)
      expect(drawout).toHaveStyleRule('padding','0%')
      expect(drawout).toHaveStyleRule('margin','0%')
      expect(drawout).toHaveStyleRule('width','50%')
      expect(drawout).toHaveStyleRule('height','50%')
      expect(drawout).toHaveStyleRule('border-top-left-radius','100px')
      expect(drawout).toHaveStyleRule('border','1px solid black')
      expect(drawout).toMatchSnapshot()
    })

    it("Drawoutspan style", () =>{
      const drawoutspan = renderer.create(<Drawoutspan />).toJSON()
      expect(drawoutspan).toHaveStyleRule('display','flex')
      expect(drawoutspan).toHaveStyleRule('align-content','center')
      expect(drawoutspan).toHaveStyleRule('margin','1%')
      expect(drawoutspan).toHaveStyleRule('width','100%')
      expect(drawoutspan).toHaveStyleRule('height','50%')
      expect(drawoutspan).toHaveStyleRule('justify-content','baseline')
      expect(drawoutspan).toHaveStyleRule('align-items','flex-end')
      expect(drawoutspan).toHaveStyleRule('transform','rotate(-40deg)')
      expect(drawoutspan).toMatchSnapshot()
      
    })
    it("Fucksr style", () =>{
      const fucksr = renderer.create(<Fucksr />).toJSON()
      expect(fucksr).toHaveStyleRule('display','flex')
      expect(fucksr).toHaveStyleRule('flex-direction','row')
      expect(fucksr).toHaveStyleRule('justify-content','center')
      expect(fucksr).toHaveStyleRule('align-content','space-evenly')
      expect(fucksr).toHaveStyleRule('width','100%')
      expect(fucksr).toHaveStyleRule('height','100%')
      expect(fucksr).toHaveStyleRule('position','absolute')
      expect(fucksr).toHaveStyleRule('top','50%')
      expect(fucksr).toMatchSnapshot()
      
    })
})