import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
           <h1>Login page</h1>
           <form >
           <TextField variant='standard' label='username'/> <br /><br />
           <TextField variant='standard' label='password'/> <br /><br />
           <Button variant='outlined'>SUBMIT</Button>

    
           </form>
    </div>
  ) 
}

export default Login