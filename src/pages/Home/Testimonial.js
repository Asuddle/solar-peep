import React from 'react';

export default function Testimonial() {
	return (
		<div className='container-xxl py-5'>
			<div className='container'>
				<div
					className='text-center mx-auto mb-5 wow fadeInUp'
					data-wow-delay='0.1s'
					style={{ maxWidth: '600px' }}
				>
					<h6 className='text-primary'>Testimonial</h6>
					<h1 className='mb-4'>What Our Clients Say!</h1>
				</div>
				<div
					className='owl-carousel testimonial-carousel wow fadeInUp'
					data-wow-delay='0.1s'
				>
					<div className='testimonial-item text-center'>
						<div className='testimonial-img position-relative'>
							<img
								className='img-fluid rounded-circle mx-auto mb-5'
								src='img/testimonial-1.jpg'
							/>
							<div className='btn-square bg-primary rounded-circle'>
								<i className='fa fa-quote-left text-white'></i>
							</div>
						</div>
						<div className='testimonial-text text-center rounded p-4'>
							<p>
								Clita clita tempor justo dolor ipsum amet kasd amet duo justo
								duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
								clita erat magna elitr erat sit sit erat at rebum justo sea
								clita.
							</p>
							<h5 className='mb-1'>Client Name</h5>
							<span className='fst-italic'>Profession</span>
						</div>
					</div>
					<div className='testimonial-item text-center'>
						<div className='testimonial-img position-relative'>
							<img
								className='img-fluid rounded-circle mx-auto mb-5'
								src='img/testimonial-2.jpg'
							/>
							<div className='btn-square bg-primary rounded-circle'>
								<i className='fa fa-quote-left text-white'></i>
							</div>
						</div>
						<div className='testimonial-text text-center rounded p-4'>
							<p>
								Clita clita tempor justo dolor ipsum amet kasd amet duo justo
								duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
								clita erat magna elitr erat sit sit erat at rebum justo sea
								clita.
							</p>
							<h5 className='mb-1'>Client Name</h5>
							<span className='fst-italic'>Profession</span>
						</div>
					</div>
					<div className='testimonial-item text-center'>
						<div className='testimonial-img position-relative'>
							<img
								className='img-fluid rounded-circle mx-auto mb-5'
								src='img/testimonial-3.jpg'
							/>
							<div className='btn-square bg-primary rounded-circle'>
								<i className='fa fa-quote-left text-white'></i>
							</div>
						</div>
						<div className='testimonial-text text-center rounded p-4'>
							<p>
								Clita clita tempor justo dolor ipsum amet kasd amet duo justo
								duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
								clita erat magna elitr erat sit sit erat at rebum justo sea
								clita.
							</p>
							<h5 className='mb-1'>Client Name</h5>
							<span className='fst-italic'>Profession</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
