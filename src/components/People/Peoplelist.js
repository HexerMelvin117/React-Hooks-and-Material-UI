import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Peoplelist() {
	const classes = useStyles();
	const [peopleList, setPeopleList] = useState([])

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/users`)
			.then(response => {
				setPeopleList(response.data)
			})
	})

  return (
		<List component="nav" className={classes.root} aria-label="contacts">
			{ peopleList.map(person =>
				<ListItem button key={person.id}>
					<ListItemText inset primary={person.name} />
				</ListItem>
			)}
    </List>
	)
}

export default Peoplelist