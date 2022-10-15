import { Button, TextField } from '@mui/material';
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
		<div className='page-content' style={{ background: '#EAE4D8' }}>
			<div className='form-content'>
				<div style={{ margin: 'auto', maxWidth: '900px' }}>
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
						</>
					)}
					{formNo === 2 && (
						<>
							<h4 className='select-country'>
								Please write down the name of Appliance you use , there daily
								time of usage and wattage if possible?
							</h4>
							<div style={{ textAlign: 'left' }}>
								<Appliances />
							</div>
						</>
					)}
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
			</div>
		</div>
	);
}

export default CountryForm;
