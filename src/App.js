import img from './a.jpg'
import bg from './bg.png'
import './styles.css';
import './App.css'
// import BgVideo from './components/bgVideo';
import {Link,Rating, Card, Typography, CardContent, Paper, TextField,Fab, CardActionArea, CardMedia, Grid, Toolbar, Button, IconButton, Box, Badge, Select, MenuItem, InputLabel, FormControl, ThemeProvider, InputAdornment} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import MenuIcon from '@mui/icons-material/Menu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import KeyboardArrowUpIcon from'@mui/icons-material/KeyboardArrowUp';
import { createTheme } from '@mui/material/styles';

function App() {
  const theme= createTheme({

    palette:{
      // mode:'dark',
      primary:{
        main: '#FF4A52',
        light:'#FF6E74',
        dark:'#B23339',
        contrastText:'fff',
      },
      secondary: {
        main: '#1EC6B6',
        light:'#4BD1C4',
        dark:'#158A7F',
        contrastText:'fff',
      },
      button: {
        '&:hover': {
          backgroundColor: '#fff',
          color: '#3c52b2',
      },
    }}
  })
  const  styles = {
    bg: {
        backgroundImage: `url(${bg})`
        
    }};
  return (
<ThemeProvider theme={theme}>
<div className="App">
  <header className="App-header" style={styles.bg}>
    {/* <AppBar  color='inherit' position='static' > */}
    
      
      <Toolbar id='tool_bar'>
      <Box  sx={{ marginLeft: "auto" }}>
        <Box  sx={{ display: { xs: 'none', md:'inline' }}}>
          <Button style={{textTransform: 'none'}}color= 'inherit'>Home</Button>
          <Button style={{marginLeft: 10,textTransform: 'none'}}color= 'inherit'>Text</Button>
        </Box>

        <IconButton color='inherit' sx={{ display: { xs: 'inline', md: 'none' }}}><MenuIcon/></IconButton>
        <Badge color="primary" overlap="circular" badgeContent="1 ">
        <IconButton size='large' edge='end' color='inherit' ><ShoppingCartIcon/></IconButton>
        </Badge>
      </Box>
    </Toolbar>
  {/* </AppBar> */}

<Box id='center'>
<h2> Text </h2>
<h6> Text </h6>

<Grid container spacing={3} paddingLeft={5} paddingRight={5}>

  <Grid item xs={12} md={3}>
    <FormControl fullWidth>  
    <Paper>     
        <TextField id='input'
          fullWidth
          placeholder="text"
          InputProps={{
          endAdornment: 
            <InputAdornment disableTypography position="end" >
                <LocationOnIcon/></InputAdornment>,
        }}/>
    </Paper>
    </FormControl>
 </Grid>

  <Grid item xs={12} md={3}>
  <FormControl fullWidth>
  <Paper>
  <Select fullWidth
        defaultValue={0}
        id="input"   
        >
        
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
      </Select>
      </Paper>
      </FormControl>
  </Grid>

  <Grid item xs={12} md={3}>
  <FormControl fullWidth> 
  <Paper>
  <Select fullWidth
        defaultValue={0}
        // labelId="demo-simple-select-label"
        id="input"   >
        <MenuItem value={0}>a</MenuItem>
        <MenuItem value={1}>b</MenuItem>
  </Select>
  </Paper>
  </FormControl>
  </Grid>


  <Grid item xs={12} md={3}>
    <FormControl fullWidth>
    <Paper>     
        <TextField id='input'
          fullWidth
          placeholder="text"
          InputProps={{
            endAdornment: 
            <InputAdornment disableTypography position="end" >
                <AttachMoneyIcon/></InputAdornment>,
        }}/>
    </Paper>
    </FormControl>
  </Grid>
  
  <Grid item xs={12} md={3}>
    <FormControl fullWidth>

    <Button id='input' variant="contained" > Search </Button>

    </FormControl>
  </Grid> 
</Grid>
</Box>

    {/* <CardMedia component='img' src='a.png' alt='a'></CardMedia> */}

  </header>
<body>
  <Fab id='fab' color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon/>
        </Fab>
        {/* <video  controls autoPlay={true} muted  id="myVideo">     
    <source src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" type="video/mp4"/>
    Your browser does not support the video tag.
</video> */}
<br/>
<h1>Text </h1>
<h5> Text </h5>
<center>
<Grid rowSpacing={2} container align = "center" justify = "center" alignitems = "center" >
      <Grid item xs={12} sm={3}>
    <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={img}
              alt="text"
            />
              <Typography variant='h5'style={{position: "absolute", color: "white",bottom:10,left: 10}}> 
              <b>text</b></Typography>    
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={12} sm={3}>
    <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={img}
              alt="text"
            />
              <Typography variant='h5'style={{position: "absolute", color: "white",bottom:10,left: 10}}> 
              <b>text</b></Typography>    
          </CardActionArea>
        </Card>
      </Grid>

    </Grid>
    </center>
<br/><br/><br/>
<h1>Text </h1>
<h5> Text </h5>

<center>
<Grid container>
  
<Grid item xs={12} sm={4}>
    <Card sx={{ maxWidth: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={img}
              alt="text"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <b>Text</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Text
              </Typography>
              <Rating name="read-only" value={4} readOnly size="small"/>
              <Typography variant="body3">4 reviews</Typography>
              <Typography sx={{ marginLeft: {sx: 2,sm:4, md:8 }}} variant="body3">
              <AccessTimeIcon size='small'/>  Text
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
    <Card sx={{ maxWidth: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={img}
              alt="text"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <b>Text</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Text
              </Typography>
              <Rating name="read-only" value={4} readOnly size="small"/>
              <Typography variant="body3">4 reviews</Typography>
              <Typography sx={{ marginLeft: {sx: 2,sm:4, md:8 }}} variant="body3">
              <AccessTimeIcon size='small'/>  Text
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
    <Card sx={{ maxWidth: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={img}
              alt="text"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <b>Text</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Text
              </Typography>
              <Rating name="read-only" value={4} readOnly size="small"/>
              <Typography variant="body3">4 reviews</Typography>
              <Typography sx={{ marginLeft: {sx: 2,sm:4, md:8 }}} variant="body3">
              <AccessTimeIcon size='small'/>  Text
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

    </Grid>
</center>
<br/><br/>
<br/><br/>
<CardMedia component="img"
            fullWidth
            height={400}
            image={bg }
            alt="bg"
            />
<br/><br/><br/>
<h1>text </h1>
<h5> text</h5>
<center>
<Grid rowSpacing={2} container align = "center" justify = "center" alignitems = "center" >
  <Grid item xs={12} sm={4}>
    <Card sx={{ maxWidth: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={img}
              alt="text"
            />
            <CardContent sx={{height:180}}>
              <Typography variant='body3'style={{position: "absolute", bottom:170,left: 20}}> 
              <b>text</b></Typography> 
              <Typography variant='h6' color='inherit'style={{lineHeight:1.4, position: "absolute", bottom:110,left: 20, right:20, textAlign:'left'}}> 
              <b>text</b></Typography>  
              <Typography variant='body3' color='grey'style={{position: "absolute", bottom:60,left: 20, right:20,textAlign:'left'}}> 
              text</Typography>
              <Link underline='hover' style={{color:'primary',position: "absolute", bottom:20,left: 20, right:20,textAlign:'left'}}
              href='https://themes.themegoods.com/grandtour/demo/home-2/'><b>Link</b></Link>
            </CardContent>  
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
    <Card sx={{ maxWidth: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={img}
              alt="text"
            />
            <CardContent sx={{height:180}}>
              <Typography variant='body3'style={{position: "absolute", bottom:170,left: 20}}> 
              <b>text</b></Typography> 
              <Typography variant='h6' color='inherit'style={{lineHeight:1.4, position: "absolute", bottom:110,left: 20, right:20, textAlign:'left'}}> 
              <b>text</b></Typography>  
              <Typography variant='body3' color='grey'style={{position: "absolute", bottom:60,left: 20, right:20,textAlign:'left'}}> 
              text</Typography>
              <Link underline='hover' style={{color:'primary',position: "absolute", bottom:20,left: 20, right:20,textAlign:'left'}}
              href='https://themes.themegoods.com/grandtour/demo/home-2/'><b>Link</b></Link>
            </CardContent>  
          </CardActionArea>
        </Card>
      </Grid>

    </Grid>
    </center>
    <br/><br/><br/>
  </body>
  <footer>
    <center>
  <Grid sx={{backgroundColor:'black', height:200}} rowSpacing={2} container >
    <Grid item xs={12} sm={6}>
      <Card sx={{backgroundColor:'black'}}><CardActionArea><CardContent>
        <Typography variant='h6' color='white'style={{left: 30, right:30, position: "absolute", textAlign:'left'}}> 
                    <b>Contact</b></Typography><br/><br/><br/>
                    <Typography variant='body3' color='lightgrey'style={{left: 30, right:30, position: "absolute",textAlign:'left'}}> 
                    text</Typography><br/><br/>
      </CardContent> </CardActionArea></Card>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Card sx={{backgroundColor:'black'}}><CardActionArea><CardContent>
        <Typography variant='h6' color='white'style={{left: 30, right:30, position: "absolute", textAlign:'left'}}> 
                    <b>Recent Events</b></Typography><br/><br/><br/>
        
        <table align='left'>
          <tr>
            <td>
            <Card sx={{ maxWidth: 100 }} >
          <CardActionArea noWrap inline>
            <CardMedia noWrap
              component="img"inline
              height="100"
              image={img}
              alt="text"
            /> 
          </CardActionArea>
        </Card>
            </td>
            <td>
            <Card sx={{ maxWidth: 100 }}>
          <CardActionArea noWrap inline>
            <CardMedia noWrap
              component="img"inline
              height="100"
              image={img}
              alt="text"
            /> 
          </CardActionArea>
        </Card>
            </td>
            <td>
            <Card sx={{ maxWidth: 100 }}>
          <CardActionArea noWrap inline>
            <CardMedia noWrap
              component="img"inline
              height="100"
              image={img}
              alt="text"
            /> 
          </CardActionArea>
        </Card>
            </td>
            <td>
            <Card sx={{ maxWidth: 100 }}>
          <CardActionArea noWrap inline>
            <CardMedia noWrap
              component="img"inline
              height="100"
              image={img}
              alt="text"
            /> 
          </CardActionArea>
        </Card>
            </td>
          </tr>
        </table>
        
      </CardContent> </CardActionArea></Card>
    </Grid>
  </Grid>
    </center>
  </footer>
</div>

</ThemeProvider> 
  );
}

export default App;
