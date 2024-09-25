import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>   
<AppBar>
    <Toolbar>
        <Typography varient="h6">MY APP</Typography>
        <Link to='/login'>
        <Button variant='contained'>Login</Button>
        </Link>
        <Link to='signup'>
        <Button variant='container'>Signup</Button>
        </Link>
        <Link to='state'>
        <Button variant='contained'>Statebasic</Button>
        </Link>
        <Link to='/sa'>
        <Button variant='container'>Sample</Button>
        </Link>
          <Link to='/api'>
          <Button variant='contained  '>API</Button>

            </Link>  

            <Link to='/card'>
          <Button variant='contained  '>card</Button>

            </Link>  


        </Toolbar>
        </AppBar><br /><br /><br /><br />





    </div>
  )
}

   


export default Navbar   

