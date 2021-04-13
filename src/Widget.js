import React from 'react'
import "./Widget.css";
import Contacts from './Contacts.js'
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import Group from './Group.js'

function Widget() {
  return (
    <div className='widget'>
       <p className='widget__header'>Sponsored</p>
       <div className="widget__contact">
       <div className="contact__option">
       <p className='contact__header'>Contacts</p>
       <div className="contact__options">
              <VideocamOutlinedIcon className='contact__icon'/>
              <SearchOutlinedIcon className='contact__icon'/>
              <MoreHorizOutlinedIcon className='contact__icon'/>
       </div>
       </div>
       <Contacts
       proImage=''
       user='Justin ronald'
       />

       <Contacts
       proImage=''
       user='Chris antony'
       />

      <Contacts
       proImage=''
       user='Killer panda'
       />
       </div>

       <div className="widget__group">
         <p className='group__header'>Group conversations</p>
         <Group
         profilesSrc=''
         groupName='Create New Group'
         />
       </div>
    </div>
  )
}

export default Widget
