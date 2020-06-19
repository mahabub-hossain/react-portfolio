import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import MobilRightMenuSlider from '@material-ui/core/Drawer'
import avatar from '../avatar.png'
import {
AppBar,
Toolbar,
ListItem,
ListItemIcon,
IconButton,
ListItemText,
Avatar,
Divider,
List,
Typography,
Box,
Slider
} from "@material-ui/core"

import {
ArrowBack,
AssignmentInd,
Home,
Apps,
ContactMail
} from '@material-ui/icons'

//CSS STYLES
const useStyles = makeStyles(theme =>({
    menuSliderContainer: {
      width:250,
      background: '#511',
      height:"100%"
    },
    avatar:{
        display:"block",
        margin:"0.5rem auto",
        width: theme.spacing(13),
        height:theme.spacing(13)

    },
    listitem:{
        color:"tan"
    }
  }));

//Creating menu array
const menuItems = [
    {
        listIcon: <Home/>,
        listText:"Home",
        listpath:"/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText:"Resume",
        listpath:"/resume"
    },
    {
        listIcon: <Apps/>,
        listText:"Portfolio",
        listpath:"/portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText:"Contacts",
        listpath:"/contact"
    }
]

function Navbar() {

    const [state, setState] = useState({
        right:false
    });
    const toggleSlider = (Slider, open)=>()=>{
        setState({ ... state, [Slider]: open});
    };
    const classes = useStyles();
    const sideList = Slider => (
            <Box onClick={toggleSlider(Slider, false)} component="div" className={classes.menuSliderContainer}>
                <Avatar src={avatar} at="Mahabub Hossain" className={classes.avatar}/>
                <Divider/>
                <List>
                    {menuItems.map((lsItem,key)=>(
                    <ListItem className={classes.listitem}  button key={key} component={Link} to={lsItem.listpath} >
                        <ListItemIcon >{lsItem.listIcon} </ListItemIcon>
                        <ListItemText primary={lsItem.listText} ></ListItemText>
                    </ListItem>
                    ))}
                </List>
            </Box>
    );
    return (     
        <div> 
         <Box component="nav">
                <AppBar position="static" style={{background: "#222"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <ArrowBack style={{color: "tomato"}}/>
                        </IconButton>   
                        <Typography variant="h5" style={{color: "tan"}}>Portfolio</Typography> 
                        <MobilRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("righ",false)}>
                            {sideList("right")}
                        </MobilRightMenuSlider>                
                    </Toolbar>
                </AppBar>           
            </Box>
        </div>
    )
}

export default Navbar
