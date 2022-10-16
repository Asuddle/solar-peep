import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

import Appliances from './Appliances';
import CountrySelect from '../../component/CountrySelect';
import SwitchComponent from '../../component/Switch';
import { useNavigate } from 'react-router-dom';

function CountryForm() {
	const [formNo, setFormNo] = useState(1);
	const [formFields, setFormFields] = useState([
		{ name: '', voltage: 'I dont know', duration: '', count: 0 },
	]);
	const navigate = useNavigate();

	const handleForm = () => {
		setFormNo(() => formNo + 1);
	};

	const navigateHome = () => {
		navigate('/');
	};
	return (
		<Grid container className='page-content' style={{ background: '#EAE4D8' }}>
			<Grid item xs={12} sm={12} md={12} lg={12} className='form-content'>
				<div style={{ margin: 'auto', maxWidth: '750px' }}>
					{formNo === 1 && (
						<>
							<h4 className='select-country'>Please Select your Country?</h4>
							<CountrySelect />
							<h4 className='select-country'>
								Do you have empty space for solar plates in your house (empty
								roofs,place etc)?
							</h4>
							<div style={{ textAlign: 'left' }}>
								<SwitchComponent />
							</div>
							<Button
								size='large'
								variant='contained'
								color='success'
								className='next-button'
								onClick={handleForm}
							>
								Next
							</Button>
						</>
					)}
					{formNo === 2 && (
						<>
							<h4 className='select-country'>
								Please write down the name of Appliance you use , there daily
								time of usage and wattage if possible?
							</h4>
							<div style={{ textAlign: 'left' }}>
								<Appliances
									handleForm={handleForm}
									formFields={formFields}
									setFormFields={setFormFields}
								/>
							</div>
						</>
					)}
					{formNo === 3 && (
						<>
							{' '}
							<div style={{ textAlign: 'left' }}>
								<h4 className='select-country'>
									The Total Result is as follows :
								</h4>

								<h5>Total Average Energy Consumed : 3440W</h5>
								<h5 style={{ color: 'green' }}>
									Total Average Green Energy for same load :2100W
								</h5>
								<h5>
									Total Percentage of saved Energy :{' '}
									<span style={{ color: 'green' }}>20%</span>
								</h5>
								<h5>
									Moving towards the Green Energy can save
									<span style={{ color: 'green' }}> 12.5%</span> carbon emission
								</h5>
							</div>
							<br />
							<table style={{ width: '100%', color: 'black' }}>
								<thead>
									<tr>
										<td>
											<strong>Name</strong>
										</td>
										<td>
											<strong>Count</strong>
										</td>
										<td>
											<strong>Duration</strong>
										</td>
										<td>
											<strong>Wattage</strong>
										</td>
										<td>
											<strong>Green Wattage (For same consumption)</strong>{' '}
										</td>
									</tr>
								</thead>
								<tbody>
									{formFields.map((item) => (
										<tr>
											<td>{item.name}</td>
											<td>{item.count}</td>
											<td>{item.duration}</td>
											<td>12.4W</td>
											<td>9.4W</td>
										</tr>
									))}
								</tbody>
							</table>
							<br />
							<br />
							<div style={{ textAlign: 'left', color: 'black' }}>
								<h6>Some Referral Link to Buy Solar Energy</h6>
								<p>https://ogwenergyresources.com/residential/?gclid</p>
								<p>https://www.orbitenergy.us/lp/solar</p>
								<p>https://greenstreetsolar.com/</p>
								<p>https://www.gevernova.com/</p>
							</div>
							<Button
								size='large'
								variant='contained'
								color='success'
								className='next-button'
								onClick={navigateHome}
							>
								Next
							</Button>
						</>
					)}
				</div>
			</Grid>
		</Grid>
	);
}

export default CountryForm;
