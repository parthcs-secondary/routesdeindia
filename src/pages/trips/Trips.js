import React from 'react'
import { useParams } from 'react-router-dom'

function Trips() {
  const {trips} = useParams();

  return (

    <div>{trips}</div>
  )
}

export default Trips