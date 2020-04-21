import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

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

function Webnavbar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
      <AppBar position="static" style={{ background: '#008080' }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
					<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
						<Button color="inherit">Home</Button>
					</Link>
					<Link to="/people" style={{ textDecoration: 'none', color: 'inherit' }}>
						<Button color="inherit">People</Button>
					</Link>
					<Link to="/addperson" style={{ textDecoration: 'none', color: 'inherit' }}>
						<Button color="inherit">Add Person</Button>
					</Link>
        </Toolbar>
      </AppBar>
    </div>
	)
}

export default Webnavbar