import React from 'react'
import './Group.css'
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';

function Group({profilesSrc, groupName}) {
          return (
                    <div className='group'>
                              <AddCircleOutlineRoundedIcon className='group__icon' style={{fontSize:42}} src={profilesSrc}/>
                              <p>{groupName}</p>
                    </div>
          )
}

export default Group
