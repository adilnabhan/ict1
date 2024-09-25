import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Api = () => {
    var[user,setueser] =useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        console.log(response.data)
        setueser(response.data)
    })
  return (
    <div>
        <TableContainer>
            <table>
                <TableHead>
                    <TableRow>
                        <TableCell>name</TableCell>
                        <TableCell>username</TableCell>
                        <TableCell>city</TableCell>

        
                    </TableRow>
                </TableHead>
                <TableBody>
                   {user.map((val)=>{
                    return(
                    <TableRow>
                        <TableCell>{val.name}</TableCell>
                        <TableCell>{val.username}</TableCell>
                        <TableCell>{val.address.city}</TableCell>
                    </TableRow>
                    )
                })}
                </TableBody>
            </table>
        </TableContainer>
    </div>
  )
}

export default Api