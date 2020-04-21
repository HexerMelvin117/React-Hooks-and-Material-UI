import React from 'react'
import Grid from '@material-ui/core/Grid';

// Components
import Peoplelist from './Peoplelist';

function People() {
	return (
		<React.Fragment>
			<Grid container spacing={3} direction="column" alignItems="center">
				<Grid item xs={12}>
					<Peoplelist />
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

export default People