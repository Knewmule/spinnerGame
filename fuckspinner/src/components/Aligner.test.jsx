import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import {Bluedot} from './Aligner';
import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe("Aligner Component", () => {
    it("describes Bluedot style", () =>{
      const bluedot = renderer.create(<Bluedot />).toJSON()
    //   const drawoutCirclerotate = shallow(<Drawout id={circlerotate} />)
    //   expect(drawout).toHaveStyleRule('transform'+drawoutCirclerotate)
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

  describe("Aligner Animation", () =>{
    it("animates", () =>{
      // First we can get the teaser from the Jest DOM
const teaser = document.querySelector('#alignfire');
// Fire the click event on the teaser and the necessary animation events on the same element
userEvent.click(teaser);
fireEvent.animationStart(teaser);
fireEvent.animationEnd(teaser);
expect(teaser).not.toBeVisible();
    })
  })


    
})