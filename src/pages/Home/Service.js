import React from 'react';

const serviceArr = [
	{
		label:
			'Giving Statistics about how much gain you can get from green energy',
		img: 'img/img-600x400-1.jpg',
		icon: 'fa fa-wind fa-3x',
		delay: '0.1s',
	},
	{
		label: 'Consulation',
		img: 'img/img-600x400-2.jpg',
		icon: 'fa fa-wind fa-3x',
		delay: '0.3s',
	},
	{
		label: 'Getting you connected with Sellers',
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
					<h1 className='mb-4'>Green Energy makes the clean energy</h1>
					<h5>
						We want you to think about the environment.About how you can make a
						difference.and about how you can play your part towards a
						sustainable environmental friendly growth
					</h5>
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
										{/* Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
										lorem diam. */}
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
