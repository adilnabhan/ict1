import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1>SIGNUP</h1> <br /><br />

      <TextField variant='outlined' label='username'/> <br /><br />
      <TextField variant='outlined' label='age'/> <br /><br />
      <TextField variant='outlined' label='phone'/> <br /><br />
      <Button variant='contained' >submit</Button>



    </div>
  )
}

export default Signup