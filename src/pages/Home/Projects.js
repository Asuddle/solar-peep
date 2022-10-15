const projectArr = [
	{
		label: 'Solar Panels',
		img: 'img/img-600x400-6.jpg',
	},
	{ label: 'Wind Turbines', img: 'img/img-600x400-5.jpg' },
	{ label: 'Hydropower Plants', img: 'img/img-600x400-4.jpg' },
];
function Projects() {
	return (
		<div className='container-xxl py-5'>
			<div className='container'>
				<div
					className='text-center mx-auto mb-5 wow fadeInUp'
					data-wow-delay='0.1s'
					style={{ maxWidth: '600px' }}
				>
					<h6 className='text-primary'>Our Projects</h6>
					<h1 className='mb-4'>
						Visit Our Latest Solar And Renewable Energy Projects
					</h1>
				</div>
				<div
					className='row g-4 portfolio-container wow fadeInUp'
					data-wow-delay='0.5s'
				>
					{projectArr.map((item) => (
						<div
							key={item.label}
							className='col-lg-4 col-md-6 portfolio-item first'
						>
							<div className='portfolio-img rounded overflow-hidden'>
								<img className='img-fluid' src={item.img} alt='' />
								<div className='portfolio-btn'>
									<a
										className='btn btn-lg-square btn-outline-light rounded-circle mx-1'
										href={item.img}
										data-lightbox='portfolio'
									>
										<i className='fa fa-eye'></i>
									</a>
									<a
										className='btn btn-lg-square btn-outline-light rounded-circle mx-1'
										href=''
									>
										<i className='fa fa-link'></i>
									</a>
								</div>
							</div>
							<div className='pt-3'>
								<p className='text-primary mb-0'>{item.label}</p>
								<hr className='text-primary w-25 my-2' />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Projects;
