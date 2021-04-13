import { Avatar } from '@material-ui/core'
import React from 'react'
import './Contacts.css'

function Contacts({proImage, user}) {
          return (
                    <div className='contacts'>
                           <Avatar src={proImage}/>
                           <p>{user}</p>   
                    </div>
          )
}

export default Contacts
