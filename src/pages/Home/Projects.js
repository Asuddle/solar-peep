import PropTypes from 'prop-types';
import React from 'react';

function Projects(props) {
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
				<div className='row mt-n2 wow fadeInUp' data-wow-delay='0.3s'>
					<div className='col-12 text-center'>
						<ul className='list-inline mb-5' id='portfolio-flters'>
							<li className='mx-2 active' data-filter='*'>
								All
							</li>
							<li className='mx-2' data-filter='.first'>
								Solar Panels
							</li>
							<li className='mx-2' data-filter='.second'>
								Wind Turbines
							</li>
							<li className='mx-2' data-filter='.third'>
								Hydropower Plants
							</li>
						</ul>
					</div>
				</div>
				<div
					className='row g-4 portfolio-container wow fadeInUp'
					data-wow-delay='0.5s'
				>
					<div className='col-lg-4 col-md-6 portfolio-item first'>
						<div className='portfolio-img rounded overflow-hidden'>
							<img className='img-fluid' src='img/img-600x400-6.jpg' alt='' />
							<div className='portfolio-btn'>
								<a
									className='btn btn-lg-square btn-outline-light rounded-circle mx-1'
									href='img/img-600x400-6.jpg'
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
							<p className='text-primary mb-0'>Solar Panels</p>
							<hr className='text-primary w-25 my-2' />
							<h5 className='lh-base'>
								We Are pioneers of solar & renewable energy industry
							</h5>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 portfolio-item second'>
						<div className='portfolio-img rounded overflow-hidden'>
							<img className='img-fluid' src='img/img-600x400-5.jpg' alt='' />
							<div className='portfolio-btn'>
								<a
									className='btn btn-lg-square btn-outline-light rounded-circle mx-1'
									href='img/img-600x400-5.jpg'
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
							<p className='text-primary mb-0'>Wind Turbines</p>
							<hr className='text-primary w-25 my-2' />
							<h5 className='lh-base'>
								We Are pioneers of solar & renewable energy industry
							</h5>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 portfolio-item third'>
						<div className='portfolio-img rounded overflow-hidden'>
							<img className='img-fluid' src='img/img-600x400-4.jpg' alt='' />
							<div className='portfolio-btn'>
								<a
									className='btn btn-lg-square btn-outline-light rounded-circle mx-1'
									href='img/img-600x400-4.jpg'
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
							<p className='text-primary mb-0'>Hydropower Plants</p>
							<hr className='text-primary w-25 my-2' />
							<h5 className='lh-base'>
								We Are pioneers of solar & renewable energy industry
							</h5>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 portfolio-item first'>
						<div className='portfolio-img rounded overflow-hidden'>
							<img className='img-fluid' src='img/img-600x400-3.jpg' alt='' />
							<div className='portfolio-btn'>
								<a
									className='btn btn-lg-square btn-outline-light rounded-circle mx-1'
									href='img/img-600x400-3.jpg'
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
							<p className='text-primary mb-0'>Solar Panels</p>
							<hr className='text-primary w-25 my-2' />
							<h5 className='lh-base'>
								We Are pioneers of solar & renewable energy industry
							</h5>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 portfolio-item second'>
						<div className='portfolio-img rounded overflow-hidden'>
							<img className='img-fluid' src='img/img-600x400-2.jpg' alt='' />
							<div className='portfolio-btn'>
								<a
									className='btn btn-lg-square btn-outline-light rounded-circle mx-1'
									href='img/img-600x400-2.jpg'
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
							<p className='text-primary mb-0'>Wind Turbines</p>
							<hr className='text-primary w-25 my-2' />
							<h5 className='lh-base'>
								We Are pioneers of solar & renewable energy industry
							</h5>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 portfolio-item third'>
						<div className='portfolio-img rounded overflow-hidden'>
							<img className='img-fluid' src='img/img-600x400-1.jpg' alt='' />
							<div className='portfolio-btn'>
								<a
									className='btn btn-lg-square btn-outline-light rounded-circle mx-1'
									href='img/img-600x400-1.jpg'
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
							<p className='text-primary mb-0'>Hydropower Plants</p>
							<hr className='text-primary w-25 my-2' />
							<h5 className='lh-base'>
								We Are pioneers of solar & renewable energy industry
							</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Projects.propTypes = {};

export default Projects;
