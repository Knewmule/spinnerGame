import React from 'react'
import Circlefucks from './Circlefucks'

describe('<Circlefucks />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Circlefucks />)
  })
})