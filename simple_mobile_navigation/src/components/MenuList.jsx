import React from 'react'
import MenuItem from './MenuItem'
import {FontAwesomeIcon} from './FontAwesomeIcons'

const MenuList = () => {
  const defaultDropdownIcon = (
    <span className='dropdown-icon'>
      <FontAwesomeIcon icon='angle-right'/>
    </span>
);
const mainOptions = [
  { menuOption: 'Personal Data', optionIcon: <FontAwesomeIcon icon="user-group" /> },
  { menuOption: 'Messages', optionIcon: <FontAwesomeIcon icon="envelope" /> },
  { menuOption: 'Notifications', optionIcon: <FontAwesomeIcon icon="bell" /> },
  { menuOption: 'Location', optionIcon: <FontAwesomeIcon icon="location-dot" /> },
  { menuOption: 'Community', optionIcon: <FontAwesomeIcon icon="users" /> },
];

const otherOptions = [
  { menuOption: 'FAQs', optionIcon: <FontAwesomeIcon icon="user-group" /> },
  { menuOption: 'Settings', optionIcon: <FontAwesomeIcon icon="gear" /> },
];
  return (
    <div>
      <ul className='main-option-container'>
        {mainOptions.map((item,index) => {
          return (
            <li key={index}>
              <MenuItem
                menuOption={item.menuOption}
                icons={{
                  option: item.optionIcon,
                  dropdown: defaultDropdownIcon,
                }}
              />
            </li>
          )
        })}
      </ul>

      <ul className='other-option'>
        {otherOptions.map((item, index) => (
          <li key={index}>
            <MenuItem
              menuOption={item.menuOption}
              icons={{
                option: item.optionIcon,
                dropdown: defaultDropdownIcon,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuList