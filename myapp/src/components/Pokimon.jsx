import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Grid2 } from '@mui/material';
import axios from 'axios';
const Pokimon = () => {
    var[a,react]=useState([])
    axios.get("https://dummyapi.online/api/pokemon")
    .then((res) => {
        console.log(res.data)
        react(res.data)
    })
    return(
        <div>
            <Grid container spacing={2}>
                {a.map((pok)=>{
                    return(
                        <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          sx={{ height: 140 }}
                          image={pok.image_url}
                          title="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                          Bulbasaur
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Type:grass
                    
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Share</Button>
                          <Button size="small">Learn More</Button>
                        </CardActions>
                      </Card>
                      </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Pokimon