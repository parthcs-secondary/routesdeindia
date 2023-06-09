import React from 'react'
import './Quicklinks.css'
function Quicklinks(props) {
  return (
    <div className='quickLinkContainer'>
        <div>{props.quickLinkIcon}</div>
        <div>
            {props.quickLinkTitle}
        </div>
    </div>
  )
}

export default Quicklinks