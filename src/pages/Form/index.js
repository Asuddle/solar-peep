import React, { useState } from 'react';

import CountryForm from './CountryForm';
import PropTypes from 'prop-types';

function ConsumptionForm(props) {
	const [step, setstep] = useState(1);

	const renderForm = () => {
		switch (step) {
			case 1:
				return <CountryForm />;
			case 2:
				return (
					<div>
						Form with zip code{' '}
						<button onClick={() => setstep(step + 1)}>Submit</button>
					</div>
				);
			default:
				return <div>Default case</div>;
		}
	};
	return <div>{renderForm()}</div>;
}

ConsumptionForm.propTypes = {};

export default ConsumptionForm;
