import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

import Appliances from './Appliances';
import CountrySelect from '../../component/CountrySelect';
import SwitchComponent from '../../component/Switch';

function CountryForm() {
	const [formNo, setFormNo] = useState(1);

	const handleForm = () => {
		setFormNo(() => formNo + 1);
	};
	return (
		<Grid container className='page-content' style={{ background: '#EAE4D8' }}>
			<Grid item sm={0} md={0} lg={4} className='form-image'>
				<h4 className='form-image-title'>Clean and safe energy</h4>
				<h1 className='form-image-title'>The Solar Energy</h1>
				<br />
				<img
					src='img/form-img-1.jpg'
					alt='1'
					width={250}
					style={{ borderRadius: '16px' }}
					height={350}
				/>
			</Grid>

			<Grid item xs={12} sm={12} md={9} lg={8} className='form-content'>
				<div style={{ margin: 'auto' }}>
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
								<Appliances handleForm={handleForm} />
							</div>
						</>
					)}
					{formNo === 3 && (
						<>
							<h4 className='select-country'>
								The Total Result is as follows :
							</h4>

							<h5>Total Average Energy Consumed : 3440W</h5>
							<h5 style={{ color: 'green' }}>
								Total Average Green Energy for same load :2100W
							</h5>
							<h5>
								Total Percentage of saved data :{' '}
								<span style={{ color: 'green' }}>20%</span>
							</h5>
						</>
					)}
				</div>
			</Grid>
		</Grid>
	);
}

export default CountryForm;
