/// <reference types="cypress" />

it('External test', () => {

})

describe('should group tests', () => {
  it('internal test', () => {

  })

  describe('internal group', () => {
    it.only('even internal test', () => {

    })
  })
})