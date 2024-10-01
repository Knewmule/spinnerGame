import React from 'react'
import Aligner from './Aligner'

describe('<Aligner />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Aligner />)
  })
})