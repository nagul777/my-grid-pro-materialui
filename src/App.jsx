
import { Container, Box, Typography, Grid2, Paper, Avatar,Divider, IconButton ,Card} from '@mui/material'
import { CardHeader } from '@mui/material'

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
            
            </Grid2>


            <Grid2 size={{ xs: 12, md: 6 }} sx={{bgcolor:'#fff', borderRadius:'12px', padding:'24px'}}>
            <Card sx={{ boxShadow: 'none', borderBottom: '1px solid gray' }}>
                <CardHeader
                  avatar={
                    <Avatar src='/assets/per.jpg' aria-label="recipe">
                      
                    </Avatar>
                  }
                  action={
                    <IconButton sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant='h7' fontSize="14px" fontWeight="bold">+$75.50</Typography>
                      <Typography variant='body1' fontSize="12px">19 Aug 2024</Typography>
                    </IconButton>

                  }
                  title="Shrimp "
                />
              </Card>    

              <Card sx={{ boxShadow: 'none', borderBottom: '1px solid gray' }}>
                <CardHeader
                  avatar={
                    <Avatar src='/assets/per.jpg' aria-label="recipe">
                      
                    </Avatar>
                  }
                  action={
                    <IconButton sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant='h7' fontSize="14px" fontWeight="bold">+$75.50</Typography>
                      <Typography variant='body1' fontSize="12px">19 Aug 2024</Typography>
                    </IconButton>

                  }
                  title="Robin Hood"
                />
              </Card>    
   
              <Card sx={{ boxShadow: 'none', borderBottom: '1px solid gray' }}>
                <CardHeader
                  avatar={
                    <Avatar src='/assets/per.jpg' aria-label="recipe">
                      
                    </Avatar>
                  }
                  action={
                    <IconButton sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant='h7' fontSize="14px" fontWeight="bold">+$75.50</Typography>
                      <Typography variant='body1' fontSize="12px">19 Aug 2024</Typography>
                    </IconButton>

                  }
                  title="Robin Hood"
                />
              </Card>  

              <Card sx={{ boxShadow: 'none', borderBottom: '1px solid gray' }}>
                <CardHeader
                  avatar={
                    <Avatar src='/assets/per.jpg' aria-label="recipe">
                      
                    </Avatar>
                  }
                  action={
                    <IconButton sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant='h7' fontSize="14px" fontWeight="bold">+$75.50</Typography>
                      <Typography variant='body1' fontSize="12px">19 Aug 2024</Typography>
                    </IconButton>

                  }
                  title="hood"
                />
              </Card>       
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
