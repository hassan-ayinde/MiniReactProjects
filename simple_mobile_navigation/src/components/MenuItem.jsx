import React from 'react'

const MenuItem = ({menuOption,icons:{option,dropdown}}) => {
  return (
    <div className='menuItem-container'>
      <div className='option-container'>
        <p className='option-icon'>{option}</p>
        <h3>{menuOption}</h3>
      </div>
      <div>{dropdown}</div>
    </div>
  )
}

export default MenuItem