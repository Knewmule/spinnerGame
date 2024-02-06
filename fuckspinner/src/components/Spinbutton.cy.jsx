import React from 'react'
import Spinbutton from './Spinbutton'

describe('<Spinbutton />', () => {
  it('renders and clicks', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Spinbutton />)
    cy.get("button").click()
    
  })
  
})