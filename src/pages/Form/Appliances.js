import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

function Appliances() {
	const [formFields, setFormFields] = useState([
		{ name: '', voltage: 'I dont know', duration: '', count: 0 },
	]);

	const handleFormChange = (event, index) => {
		let data = [...formFields];
		data[index][event.target.name] = event.target.value;
		setFormFields(data);
	};

	const submit = (e) => {
		e.preventDefault();
		console.log(formFields);
	};

	const addFields = () => {
		let object = {
			name: '',
			voltage: 'I dont know',
			duration: '',
			count: 0,
		};

		setFormFields([...formFields, object]);
	};

	const removeFields = (index) => {
		let data = [...formFields];
		data.splice(index, 1);
		setFormFields(data);
	};

	return (
		<div className='text-center' style={{ height: '400px', overflowY: 'auto' }}>
			<form onSubmit={submit}>
				{formFields.map((form, index) => {
					return (
						<Grid
							container
							key={index}
							spacing={1}
							style={{ marginTop: '12px' }}
						>
							<Grid
								item
								xs={12}
								sm={6}
								md={3}
								lg={3}
								style={{ textAlign: 'left' }}
							>
								{index === 0 && <h6>Name</h6>}
								<TextField
									name='name'
									fullWidth
									placeholder='Name'
									size='small'
									onChange={(event) => handleFormChange(event, index)}
									value={form.name}
								/>
							</Grid>
							<Grid
								item
								xs={12}
								sm={6}
								md={3}
								lg={3}
								style={{ textAlign: 'left' }}
							>
								{index === 0 && <h6>Voltage</h6>}
								<TextField
									name='voltage'
									fullWidth
									size='small'
									defaultValue="I don't know"
									placeholder='Voltage'
									onChange={(event) => handleFormChange(event, index)}
									value={form.voltage}
								/>
							</Grid>
							<Grid
								item
								xs={12}
								sm={6}
								md={2}
								lg={2}
								style={{ textAlign: 'left' }}
							>
								{index === 0 && <h6>Count</h6>}
								<TextField
									name='voltage'
									fullWidth
									type='number'
									size='small'
									defaultValue="I don't know"
									placeholder='Voltage'
									onChange={(event) => handleFormChange(event, index)}
									value={form.count}
								/>
							</Grid>
							<Grid
								item
								xs={12}
								sm={6}
								md={2}
								lg={2}
								style={{ textAlign: 'left' }}
							>
								{index === 0 && <h6>Duration (In hrs)</h6>}
								<TextField
									name='duration'
									type='number'
									fullWidth
									size='small'
									placeholder='Duration'
									onChange={(event) => handleFormChange(event, index)}
									value={form.duration}
								/>
							</Grid>
							<Grid item xs={12} sm={12} md={1} lg={1}>
								{index === 0 && <div style={{ marginBottom: '28px' }} />}
								<Button
									color='secondary'
									variant='contained'
									onClick={() => removeFields(index)}
								>
									Remove
								</Button>
							</Grid>
						</Grid>
					);
				})}
			</form>
			<Button
				onClick={addFields}
				variant='contained'
				style={{ margin: '24px' }}
			>
				Add More..
			</Button>
			<br />
			{/* <Button variant='contained' onClick={submit}>
				Submit
			</Button> */}
		</div>
	);
}
export default Appliances;
