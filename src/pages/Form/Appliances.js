import {
	Button,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import axios from 'axios';

function Appliances({ handleForm }) {
	const [option, setOption] = useState([]);

	useEffect(() => {
		axios.get(`http://34.134.67.207/api/appliances`).then((res) => {
			console.log(res.data);
			setOption(res.data);
		});
	}, []);

	const [formFields, setFormFields] = useState([
		{ name: '', voltage: 'I dont know', duration: '', count: 0 },
	]);

	const handleFormChange = (event, index) => {
		console.log(event.target.name, event.target.value);
		let data = [...formFields];
		data[index][event.target.name] = event.target.value;
		setFormFields(data);
	};

	const submit = (e) => {
		e.preventDefault();
		handleForm();
		console.log(formFields);
	};

	const addFields = () => {
		let object = {
			name: '',
			wattage: 'I dont know',
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
								{index === 0 && <h6>Appliance</h6>}
								<Select
									fullWidth
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									value={form.name}
									size='small'
									name='name'
									label='Appliance'
									onChange={(event) => handleFormChange(event, index)}
								>
									{option.map((item) => (
										<MenuItem value={item.id}>{item.name}</MenuItem>
									))}
								</Select>
							</Grid>
							<Grid
								item
								xs={12}
								sm={6}
								md={3}
								lg={3}
								style={{ textAlign: 'left' }}
							>
								{index === 0 && <h6>Wattage</h6>}
								<TextField
									name='wattage'
									fullWidth
									size='small'
									defaultValue="I don't know"
									placeholder='Wattage'
									onChange={(event) => handleFormChange(event, index)}
									value={form.wattage}
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
									name='count'
									fullWidth
									type='number'
									size='small'
									defaultValue="I don't know"
									placeholder='Count'
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
			<Button
				size='large'
				variant='contained'
				color='success'
				className='next-button'
				onClick={submit}
			>
				Next
			</Button>
		</div>
	);
}
export default Appliances;
