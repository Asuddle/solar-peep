import React from 'react';

const serviceArr = [
	{
		label: 'Solar Panels',
		img: 'img/img-600x400-1.jpg',
		icon: 'fa fa-wind fa-3x',
		delay: '0.1s',
	},
	{
		label: 'Wind Turbines',
		img: 'img/img-600x400-2.jpg',
		icon: 'fa fa-wind fa-3x',
		delay: '0.3s',
	},
	{
		label: 'Hydropower Plants',
		img: 'img/img-600x400-3.jpg',
		icon: 'fa fa-lightbulb fa-3x',
		delay: '0.5s',
	},
];
function Service(props) {
	return (
		<div className='container-xxl py-5'>
			<div className='container'>
				<div
					className='text-center mx-auto mb-5 wow fadeInUp'
					data-wow-delay='0.1s'
					style={{ maxWidth: '600px' }}
				>
					<h6 className='text-primary'>Our Services</h6>
					<h1 className='mb-4'>
						We Are Pioneers In The World Of Renewable Energy
					</h1>
				</div>
				<div className='row g-4'>
					{serviceArr.map((item) => (
						<div
							key={item.label}
							className='col-md-6 col-lg-4 wow fadeInUp'
							data-wow-delay={item.delay}
						>
							<div className='service-item rounded overflow-hidden'>
								<img className='img-fluid' src={item.img} alt='' />
								<div className='position-relative p-4 pt-0'>
									<div className='service-icon'>
										<i className={item.icon}></i>
									</div>
									<h4 className='mb-3'>{item.label}</h4>
									<p>
										Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
										lorem diam.
									</p>
									<a className='small fw-medium' href=''>
										Read More<i className='fa fa-arrow-right ms-2'></i>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

Service.propTypes = {};

export default Service;
