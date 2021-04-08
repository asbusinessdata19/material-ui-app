import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { logout } from '../actions/authedUser';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/"><Typography style={{color:"#ffffff",marginRight: 10}}> Home </Typography></Link>
          <Link to="/question/1"><Typography style={{color:"#ffffff",marginRight: 10}}> New Question </Typography></Link>
          <Link to="/Leaderboard"><Typography style={{color:"#ffffff",marginRight: 10}}> Leader Board </Typography></Link>          
          <Typography variant="h6" className={classes.title}></Typography>
          {/* <Avatar alt="profile picture" src={'/images/' + props.authedUser.id + '.jpg'} /> */}
          <Avatar alt="profile picture" src={props.authedUser.avatarURL} />          
          <Typography style={{ marginRight: 5, marginLeft: 5 }}>  {props.authedUser.name}</Typography>
          <Button color="inherit" onClick={() => props.dispatch(logout())}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;


