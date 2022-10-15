import * as React from 'react';

import Switch from '@mui/material/Switch';

export default function SwitchComponent() {
	const [checked, setChecked] = React.useState(true);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	return (
		<Switch
			checked={checked}
			onChange={handleChange}
			size='medium'
			inputProps={{ 'aria-label': 'controlled' }}
		/>
	);
}
