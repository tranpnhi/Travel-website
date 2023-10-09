import logo from './logo.png';
import FrenchAutumn from './FrenchAutumn.jpg'
import location from './location.png'
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
      <Box sx={{ marginLeft: { xs: 'none', md:10 }, height: 25}}
        component="img"
        
        alt="Logo"
        src={logo}
      />

      <Box  sx={{ marginLeft: "auto" }}>
        <Box  sx={{ display: { xs: 'none', md:'inline' }}}>
          <Button style={{textTransform: 'none'}}color= 'inherit'>Home</Button>
          <Button style={{marginLeft: 10,textTransform: 'none'}}color= 'inherit'>Tours</Button>
          <Button style={{marginLeft: 10,textTransform: 'none'}}color= 'inherit'>Booking</Button>
          <Button style={{marginLeft: 10,textTransform: 'none'}}color= 'inherit'>Destination</Button>
          <Button style={{marginLeft: 10,textTransform: 'none'}}color= 'inherit'>Blogs</Button>
        </Box>

        <IconButton color='inherit' sx={{ display: { xs: 'inline', md: 'none' }}}><MenuIcon/></IconButton>
        <Badge color="primary" overlap="circular" badgeContent="1 ">
        <IconButton size='large' edge='end' color='inherit' ><ShoppingCartIcon/></IconButton>
        </Badge>
      </Box>
    </Toolbar>
  {/* </AppBar> */}

<Box id='center'>
<h2> Where do you want to go? </h2>
<h6> Trips, experiences, and places. All in one service. </h6>

<Grid container spacing={3} paddingLeft={5} paddingRight={5}>

  <Grid item xs={12} md={3}>
    <FormControl fullWidth>  
    <Paper>     
        <TextField id='input'
          fullWidth
          placeholder="Destination, city"
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
        <MenuItem value={0}>Any month</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={11}>11</MenuItem>
        <MenuItem value={12}>12</MenuItem>
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
        <MenuItem value={0}>Sort by date</MenuItem>
        <MenuItem value={1}>Sort by review score</MenuItem>
        <MenuItem value={2}>Sort by popularity</MenuItem>
        <MenuItem value={3}>Price high to low</MenuItem>
        <MenuItem value={4}>Price low to high</MenuItem>
  </Select>
  </Paper>
  </FormControl>
  </Grid>

  <Grid item xs={12} md={3}>
    <FormControl fullWidth>

    <Button id='input' variant="contained" > Search </Button>

    </FormControl>
  </Grid>

  <Grid item xs={12} md={3}>
  <FormControl fullWidth> 
  <Paper>
  <Select fullWidth
        defaultValue={0}
        // labelId="demo-simple-select-label"
        id="input"   >
        <MenuItem value={0}>All categories</MenuItem>
        <MenuItem value={1}>Mountain</MenuItem>
        <MenuItem value={2}>Rural</MenuItem>
        <MenuItem value={3}>Wildlife</MenuItem>
        <MenuItem value={4}>Ice & snow</MenuItem>
  </Select>
  </Paper>
  </FormControl>
  </Grid>


  <Grid item xs={12} md={3}>
    <FormControl fullWidth>
    <Paper>     
        <TextField id='input'
          fullWidth
          placeholder="Max budget ex. 500"
          InputProps={{
            endAdornment: 
            <InputAdornment disableTypography position="end" >
                <AttachMoneyIcon/></InputAdornment>,
        }}/>
    </Paper>
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
<h1>Best Value Trips </h1>
<h5> Best offers trips from us </h5>
<center>
<Grid rowSpacing={2} container align = "center" justify = "center" alignitems = "center" >
  <Grid item xs={12} sm={3}>
    <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={FrenchAutumn}
              alt="French Autumn"
            />
              <Typography variant='h5'style={{position: "absolute", color: "white",bottom:10,left: 10}}> 
              <b>France</b></Typography>    
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={12} sm={3}>
    <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={FrenchAutumn}
              alt="French Autumn"
            />
              <Typography variant='h5'style={{position: "absolute", color: "white",bottom:10,left: 10}}> 
              <b>France</b></Typography>    
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={12} sm={3}>
    <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={FrenchAutumn}
              alt="French Autumn"
            />
              <Typography variant='h5'style={{position: "absolute", color: "white",bottom:10,left: 10}}> 
              <b>France</b></Typography>    
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={12} sm={3}>
    <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={FrenchAutumn}
              alt="French Autumn"
            />
              <Typography variant='h5'style={{position: "absolute", color: "white",bottom:10,left: 10}}> 
              <b>France</b></Typography>    
          </CardActionArea>
        </Card>
      </Grid>

    </Grid>
    </center>
<br/><br/><br/>
<h1>Best Value Trips </h1>
<h5> Best offers trips from us </h5>

<center>
<Grid container>
  
  <Grid  item xs={12} sm={4}>
    <Card sx={{ maxWidth: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={FrenchAutumn}
              alt="French Autumn"
            />
            <CardContent>
              <Typography sx={{left:10}} gutterBottom variant="h6" component="div">
                <b>French Autumn</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                City tour, Urban
              </Typography>
              <Rating name="read-only" value={4} readOnly size="small"/>
              <Typography variant="body3">4 reviews</Typography>
              <Typography sx={{ marginLeft: {sx: 2,sm:4, md:8 }}} variant="body3">
              <AccessTimeIcon size='small'/>  6 days
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
              image={FrenchAutumn}
              alt="French Autumn"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <b>French Autumn</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                City tour, Urban
              </Typography>
              <Rating name="read-only" value={4} readOnly size="small"/>
              <Typography variant="body3">4 reviews</Typography>
              <Typography sx={{ marginLeft: {sx: 2,sm:4, md:8 }}} variant="body3">
              <AccessTimeIcon size='small'/>  6 days
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
              image={FrenchAutumn}
              alt="French Autumn"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <b>French Autumn</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                City tour, Urban
              </Typography>
              <Rating name="read-only" value={4} readOnly size="small"/>
              <Typography variant="body3">4 reviews</Typography>
              <Typography sx={{ marginLeft: {sx: 2,sm:6, md:12 }}} variant="body3">
              <AccessTimeIcon size='small'/>  6 days
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

    </Grid>
</center>
<br/><br/><br/>
<h1>Why Choose Us </h1>
<h5> Here are reasons you should plan trip with us </h5>
<center>
  <Grid container>
<Grid item xs={12} sm={4}>
    <Box sx={{ maxWidth: 280,
        margin: "0 auto",
        padding: "0.1em",maxWidth: 345 }}
      >
            <CardMedia
              component="img"
              height="250"

              image={location }
              alt="French Autumn"
              sx={{ padding: "1em 1em 0 1em" ,objectFit: "contain"}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <b>Handpicked Hotels</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consect adipiscing elit.
              </Typography>
            </CardContent>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
    <Box sx={{ maxWidth: 280,
        margin: "0 auto",
        padding: "0.1em",maxWidth: 345 }}
      >
            <CardMedia
              component="img"
              height="250"

              image={location }
              alt="French Autumn"
              sx={{ padding: "1em 1em 0 1em" ,objectFit: "contain"}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <b>Handpicked Hotels</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consect adipiscing elit.
              </Typography>
            </CardContent>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
    <Box sx={{ maxWidth: 280,
        margin: "0 auto",
        padding: "0.1em",maxWidth: 345 }}
      >
            <CardMedia
              component="img"
              height="250"

              image={location }
              alt="French Autumn"
              sx={{ padding: "1em 1em 0 1em" ,objectFit: "contain"}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <b>Handpicked Hotels</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consect adipiscing elit.
              </Typography>
            </CardContent>
        </Box>
      </Grid>

</Grid></center>
<br/><br/>
<CardMedia component="img"
            fullWidth
            height={400}
            image={bg }
            alt="bg"
            />
<br/><br/><br/>
<h1>Articles & Tips </h1>
<h5> Explore some of the best tips from around the world</h5>
<center>
<Grid rowSpacing={2} container align = "center" justify = "center" alignitems = "center" >
  <Grid item xs={12} sm={4}>
    <Card sx={{ maxWidth: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={FrenchAutumn}
              alt="French Autumn"
            />
            <CardContent sx={{height:180}}>
              <Typography variant='body3'style={{position: "absolute", bottom:170,left: 20}}> 
              <b>OCTOBER 28, 2023</b></Typography> 
              <Typography variant='h6' color='inherit'style={{lineHeight:1.4, position: "absolute", bottom:110,left: 20, right:20, textAlign:'left'}}> 
              <b>Memorial Day to Someone Told Me to Travel</b></Typography>  
              <Typography variant='body3' color='grey'style={{position: "absolute", bottom:60,left: 20, right:20,textAlign:'left'}}> 
              Meh synth Schlitz, tempor duis single-origin coffee ea ...</Typography>
              <Link underline='hover' style={{color:'primary',position: "absolute", bottom:20,left: 20, right:20,textAlign:'left'}}
              href='https://themes.themegoods.com/grandtour/demo/home-2/'><b>Read more</b></Link>
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
              image={FrenchAutumn}
              alt="French Autumn"
            />
            <CardContent sx={{height:180}}>
              <Typography variant='body3'style={{position: "absolute", bottom:170,left: 20}}> 
              <b>OCTOBER 28, 2023</b></Typography> 
              <Typography variant='h6' color='inherit'style={{lineHeight:1.4, position: "absolute", bottom:110,left: 20, right:20, textAlign:'left'}}> 
              <b>Memorial Day to Someone Told Me to Travel</b></Typography>  
              <Typography variant='body3' color='grey'style={{position: "absolute", bottom:60,left: 20, right:20,textAlign:'left'}}> 
              Meh synth Schlitz, tempor duis single-origin coffee ea ...</Typography>
              <Link underline='hover' style={{color:'primary',position: "absolute", bottom:20,left: 20, right:20,textAlign:'left'}}
              href='https://themes.themegoods.com/grandtour/demo/home-2/'><b>Read more</b></Link>
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
              image={FrenchAutumn}
              alt="French Autumn"
            />
            <CardContent sx={{height:180}}>
              <Typography variant='body3'style={{position: "absolute", bottom:170,left: 20}}> 
              <b>OCTOBER 28, 2023</b></Typography> 
              <Typography variant='h6' color='inherit'style={{lineHeight:1.4, position: "absolute", bottom:110,left: 20, right:20, textAlign:'left'}}> 
              <b>Memorial Day to Someone Told Me to Travel</b></Typography>  
              <Typography variant='body3' color='grey'style={{position: "absolute", bottom:60,left: 20, right:20,textAlign:'left'}}> 
              Meh synth Schlitz, tempor duis single-origin coffee ea ...</Typography>
              <Link underline='hover' style={{color:'primary',position: "absolute", bottom:20,left: 20, right:20,textAlign:'left'}}
              href='https://themes.themegoods.com/grandtour/demo/home-2/'><b>Read more</b></Link>
            </CardContent>  
          </CardActionArea>
        </Card>
      </Grid>

    </Grid>
    </center>
    <br/><br/><br/>
  </body>
  <footer >
    <center>
  <Grid sx={{backgroundColor:'black', height:300}} rowSpacing={2} container >
  <Grid item xs={12} sm={4}>
      <Card sx={{backgroundColor:'black'}}><CardActionArea><CardContent>
        <Typography variant='h6' color='white'style={{left: 30, right:30, position: "absolute", textAlign:'left'}}> 
                    <b>Our Awards</b></Typography><br/><br/> <br/>
                    <Typography variant='body3' color='lightgrey'style={{left: 30, right:30, position: "absolute",textAlign:'left'}}> 
                    2021 travellers' choice</Typography>
      </CardContent> </CardActionArea></Card>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Card sx={{backgroundColor:'black'}}><CardActionArea><CardContent>
        <Typography variant='h6' color='white'style={{left: 30, right:30, position: "absolute", textAlign:'left'}}> 
                    <b>Contact Info</b></Typography><br/><br/><br/>
                    <Typography variant='body3' color='lightgrey'style={{left: 30, right:30, position: "absolute",textAlign:'left'}}> 
                    1-567-124-44227</Typography><br/><br/>
                    <Typography variant='body3' color='lightgrey'style={{left: 30, right:30, position: "absolute",textAlign:'left'}}> 
                    184 Main Street East Perl Habour 8007</Typography>
      </CardContent> </CardActionArea></Card>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Card sx={{backgroundColor:'black'}}><CardActionArea><CardContent>
        <Typography variant='h6' color='white'style={{left: 30, right:30, position: "absolute", textAlign:'left'}}> 
                    <b>Recent Trips</b></Typography><br/><br/><br/>
        
        <table >
          <tr>
            <td>
            <Card sx={{ maxWidth: 100 }} >
          <CardActionArea noWrap inline>
            <CardMedia noWrap
              component="img"inline
              height="100"
              image={FrenchAutumn}
              alt="French Autumn"
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
              image={FrenchAutumn}
              alt="French Autumn"
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
              image={FrenchAutumn}
              alt="French Autumn"
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
              image={FrenchAutumn}
              alt="French Autumn"
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
