import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const StateBasics = () => {
  //   var name='Tony Stark'
  var [name, set] = useState("TonyStark")
  var [fname, setfname] = useState()
  var [old, newold] = useState('')
  const inputfn = (e) => {
    console.log(e.target.value)
    set(e.target.value)
  }
  const handle = () => {
    setfname(name)
  }
  const la = () => {
    newold("Java")
  }
  const le = () => {
    newold("Python")
  }
  const lo = () => {
    newold("C++")
  }
  useEffect(() =>{
    le()
  },[])
  return (
    <div>
      <Typography variant='h3'>Welcome {old}</Typography>
      {/* <TextField variant='outlined' onChange={inputfn}></TextField> */}
      {/* <Button variant='contained' onClick={handle}>Submit</Button><br/><br/> */}
      <Button variant='contained' onClick={la}>Java</Button>
      <Button variant='contained' onClick={le}>Python</Button>
      <Button variant='contained' onClick={lo}>C++</Button>
    </div>
  )
}

export default StateBasics