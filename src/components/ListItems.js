import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const mainListItems = (
  <div>
    <Link to='/'><ListItem button>
      <ListItemIcon>
      <HomeIcon/>
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    </Link>

    <Link to='/calendar'>
    <ListItem button>
      <ListItemIcon>
      <TodayOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Calendar" />
    </ListItem>
    </Link>

    <Link to='/habittracker'>
    <ListItem button>
      <ListItemIcon>
     <AssessmentOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Habit Tracker" />
    </ListItem>
    </Link>

    <Link to='/journal'>
    <ListItem button>
      <ListItemIcon>
        <MenuBookOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Journal" />
    </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
      <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
  </div>
);