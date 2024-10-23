
import { Container, Box, Typography, Grid2, Paper } from '@mui/material'

import './App.css'

function App() {
 

  return (
    <>
    <Container>
      <Box sx={{bgcolor:'gray', padding:'32px 40px'}}>
         <Box>
            <Typography>
                Overview
            </Typography>
         </Box>

         <Box>
         <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 4,  }} sx={{bgcolor:'black', borderRadius:'12px',padding:'24px'}}>
               <Typography variant='subtitle' sx={{color:'#fff', fontSize:'14px'}}>
                  Current Balance 
               </Typography>
               <Typography variant='h4' sx={{color:'#fff', padding:'12px 0 0 0'}}>
                  $4,836.00 
                </Typography>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 4 }} sx={{bgcolor:'#fff', borderRadius:'12px',padding:'24px'}}>
               <Typography variant='subtitle' sx={{color:'#000', fontSize:'14px'}}>
                  Current Balance 
               </Typography>
               <Typography variant='h4' sx={{color:'#000', padding:'12px 0 0 0'}}>
                  $4,836.00 
                </Typography>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 4 }} sx={{bgcolor:'#fff', borderRadius:'12px',padding:'24px'}}>
               <Typography variant='subtitle' sx={{color:'#000', fontSize:'14px'}}>
                  Current Balance 
               </Typography>
               <Typography variant='h4' sx={{color:'#000', padding:'12px 0 0 0'}}>
                  $4,836.00 
                </Typography>
            </Grid2>

           

            <Grid2 size={{ xs: 12, md: 6 }}>
            <Paper>h</Paper>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 6 }}>
            <Paper>h</Paper>
            </Grid2>


            <Grid2 size={{ xs: 12, md: 6 }}>
            <Paper>h</Paper>
            </Grid2>


            <Grid2 size={{ xs: 12, md: 6 }}>
            <Paper>h</Paper>
            </Grid2>

          </Grid2>
         </Box>
      </Box>
    </Container>
    </>
  )
}

export default App
