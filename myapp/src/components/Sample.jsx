import {Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Sample = () =>{
  var [a,react]=useState(0)

  const ad = (e) => {
          react(a=a+1)
  }
  const sa = ()=>{
  react(a=a-1)
  }
  
  
  return (
    <div>
      <Typography variant='h3'>value {a}</Typography>
      <Button variant="contained" color='error' onClick={ad}>+</Button>
      <Button variant="contained" color='primary' onClick={sa}>-</Button>
      
    </div>
  )
}

export default Sample