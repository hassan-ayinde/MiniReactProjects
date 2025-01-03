import React from 'react'
import MenuItem from './MenuItem'
import {FontAwesomeIcon} from './FontAwesomeIcons'

const MenuList = () => {
  const defaultDropdownIcon = (
    <span className='dropdown-icon'>
      <FontAwesomeIcon icon='angle-right'/>
    </span>
);
  return (
    <div>
      <ul className='main-option-container'>
        <li>
          <MenuItem 
          menuOption='Personal Data'
          icons={{
            option: <FontAwesomeIcon icon='user-group'/>,
            dropdown: defaultDropdownIcon
          }}
          />
        </li>
        <li>
          <MenuItem 
          menuOption='Messages'
          icons={{
            option: <FontAwesomeIcon icon='envelope'/>,
            dropdown: defaultDropdownIcon
          }}
          />
        </li>
        <li>
          <MenuItem 
          menuOption='Notifications'
          icons={{
            option: <FontAwesomeIcon icon='bell'/>,
            dropdown: defaultDropdownIcon
          }}
          />
        </li>
        <li>
          <MenuItem 
          menuOption='Location'
          icons={{
            option: <FontAwesomeIcon icon='location-dot'/>,
            dropdown: defaultDropdownIcon
          }}
          />
        </li>
        <li>
          <MenuItem 
          menuOption='Community'
          icons={{
            option: <FontAwesomeIcon icon='users'/>,
            dropdown: defaultDropdownIcon
          }}
          />
        </li>
      </ul>

      <ul className='other-option'>
        <li>
          <MenuItem 
          menuOption='FAQs'
          icons={{
            option: <FontAwesomeIcon icon='user-group'/>,
            dropdown: defaultDropdownIcon
          }}
          />
        </li>
        <li>
          <MenuItem 
          menuOption='Settings'
          icons={{
            option: <FontAwesomeIcon icon='gear'/>,
            dropdown: defaultDropdownIcon
          }}
          />
        </li>
      </ul>
    </div>
  )
}

export default MenuList