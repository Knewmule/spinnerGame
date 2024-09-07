import React from 'react';
// import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import {Bluedot,Align,circleit} from './Aligner';
// import { styleSheetSerializer } from "jest-styled-components/serializer";
// import { addSerializer } from "jest-specific-snapshot";

// addSerializer(styleSheetSerializer)

describe("Aligner Component", () => {
    it("describes Bluedot style", () =>{
      const bluedot = renderer.create(<Bluedot />).toJSON()
      expect(bluedot).toHaveStyleRule('left','18%')
      expect(bluedot).toHaveStyleRule('right','0%')
      expect(bluedot).toHaveStyleRule('top','90%')
      expect(bluedot).toHaveStyleRule('bottom','0%')
      expect(bluedot).toHaveStyleRule('height','20%')
      expect(bluedot).toHaveStyleRule('width','100%')
      expect(bluedot).toHaveStyleRule('position','absolute')
      expect(bluedot).toHaveStyleRule('background-color','blue')
      expect(bluedot).toHaveStyleRule('border-radius','100px')
      expect(bluedot).toMatchSnapshot()
    })
    it("describes Align style",  () =>{
      // const circle = renderer.create(<circleit d1 d2 d3 />).toJSON()
      //  circleit((d1,d2,d3) => 
      // expect(circle).toHaveStyleRule('1%{transform: rotate('+d1+')}25%{transform: rotate('+d2+')}100%{transform: rotate('+d3+')}')
      // )
      // // expect(circle).toMatchSpecificSnapshot('./circleit.snap')
      // expect(circle).toMatchSnapshot('./Aligner.test.jsx.snap')
      const align = renderer.create(<Align d4 />).toJSON()
      expect(align).toHaveStyleRule('transform',expect.any(String))
      expect(align).toHaveStyleRule('right','0%')
      expect(align).toHaveStyleRule('top','30%')
      expect(align).toHaveStyleRule('bottom','0%')
      expect(align).toHaveStyleRule('height','40%')
      expect(align).toHaveStyleRule('width','6%')
      expect(align).toHaveStyleRule('position','absolute')
      expect(align).toHaveStyleRule('background-color','yellow')
      expect(align).toHaveStyleRule('left','50%')
      expect(align).toHaveStyleRule('z-index','1')
      expect(align).toMatchSnapshot()
    })

    it("describes circleit keyframe",  () =>{
      const circle = renderer.create(<circleit d1 d2 d3 />).toJSON()
      //  circleit((d1,d2,d3) => 
      // expect(circle).toHaveStyleRule('1%{transform: rotate('+d1+')}25%{transform: rotate('+d2+')}100%{transform: rotate('+d3+')}')
      // )
      expect(circle).toMatchSnapshot('./Aligner.test.jsx.snap')
    })




    
})