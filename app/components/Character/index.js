import React from 'react'

const Character = ({ identity, descriptor, estate, generateCharacterClick }) => (
  <div onClick={generateCharacterClick}>
    I am the {identity} who is the {descriptor} god of {estate}.
  </div>
)

module.exports = Character
