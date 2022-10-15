import React from 'react';
import { useNavigate } from 'react-router-dom';

const navOptions = [
	{ name: '', label: 'Home' },
	{ name: 'form', label: 'Form' },
	{ name: 'about', label: 'About' },
	{ name: 'service', label: 'Service' },
	{ name: 'contact', label: 'Contact' },
];
function NavigationComponent(props) {
	const navigate = useNavigate();

	const handleNavigate = (e) => {
		e.preventDefault();
		navigate(`/${e.target.name}`);
	};
	return (
		<div>
			<nav className='navbar navbar-expand-lg bg-white navbar-light sticky-top p-0'>
				<a
					href='index.html'
					className='navbar-brand d-flex align-items-center border-end px-4 px-lg-5'
				>
					<h2 className='m-0 text-primary'>Green Globe</h2>
				</a>
				<button
					type='button'
					className='navbar-toggler me-4'
					data-bs-toggle='collapse'
					data-bs-target='#navbarCollapse'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarCollapse'>
					<div className='navbar-nav ms-auto p-4 p-lg-0'>
						{navOptions.map((item) => (
							<a
								key={item.label}
								name={item.name}
								onClick={handleNavigate}
								className='nav-item nav-link'
							>
								{item.label}
							</a>
						))}
					</div>
				</div>
			</nav>
		</div>
	);
}

export default NavigationComponent;
