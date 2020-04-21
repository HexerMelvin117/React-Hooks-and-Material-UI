import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function Personform() {
	const [personId, setPersonId] = useState(0)
	const [personEmail, setPersonEmail] = useState("")
	const [personName, setPersonName] = useState("")
	const [personDesc, setPersonDesc] = useState("")

	const handleSubmit = () => {
		if (personId === 0){
			let errorObj = {
				message: "Invalid ID"
			}

			console.log(errorObj)
		} else {
			let returnObject = {
				id: personId,
				name: personName,
				email: personEmail,
				description: personDesc
			}
	
			console.log(returnObject)
		}
	}

	const handleIdChange = e => {
		let value = Number(e.target.value)

		if (isNaN(value)) {
			setPersonId(0)
		} else {
			setPersonId(value)
		}
	}

	const handleEmailChange = e => {
		setPersonEmail(e.target.value)
	}

	const handleNameChange = e => {
		setPersonName(e.target.value)
	}

	const handleDescChange = e => {
		setPersonDesc(e.target.value)
	}

	return (
		<React.Fragment>
			<Grid alignItems="center" direction="column" container spacing={3}>
				<Grid item xs={12}>
					<TextField
						placeholder="Enter Your ID"
						label="ID"
						margin="normal"
						fullWidth={true}
						onChange={(e) => handleIdChange(e)}
					/>
					<br />
					<TextField
						placeholder="Enter Your First Name"
						label="Name"
						margin="normal"
						fullWidth={true}
						onChange={(e) => handleNameChange(e)}
					/>
					<br />
					<TextField
						placeholder="Enter Your Email"
						label="Email"
						margin="normal"
						fullWidth={true}
						onChange={(e) => handleEmailChange(e)}
					/>
					<br />
					<TextField
						placeholder="Enter Person Description"
						id="outlined-multiline-static"
						multiline
						rows={4}
						label="Description"
						margin="normal"
						variant="outlined"
						fullWidth={true}
						onChange={(e) => handleDescChange(e)}
					/>
					<br />
					<Button
						color="primary"
						variant="contained"
						onClick={handleSubmit}
					>Continue</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

export default Personform