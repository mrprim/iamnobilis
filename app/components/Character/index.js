import React from 'react'

const Character = ({ estate, generateCharacterClick }) => <div onClick={generateCharacterClick}>
  I am the person who is the god of {estate}.
</div>

module.exports = Character
