import React from 'react';
const qualityArr = [
	{ name: 'Quality', label: 'Services', icon: 'fa fa-check text-white' },
	{ name: 'Expert', label: 'Workers', icon: 'fa fa-user-check text-white' },
	{
		name: 'Free',
		label: 'Consultation',
		icon: 'fa fa-drafting-compass text-white',
	},
	{ name: 'Customer', label: 'Support', icon: 'fa fa-headphones text-white' },
];
function WhyChooseUs(props) {
	return (
		<div class='container-xxl py-5'>
			{/* <div class='container feature px-lg-0'> */}
			<div class='row g-0 mx-lg-0'>
				<div
					class='col-lg-6 feature-text py-5 wow fadeIn'
					data-wow-delay='0.1s'
				>
					<div class='p-lg-5 ps-lg-0'>
						<h6 class='text-primary'>Why Choose Us!</h6>
						<h1 class='mb-4'>
							Complete Commercial & Residential Solar Systems
						</h1>
						<p class='mb-4 pb-2'>
							Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
							diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
							lorem sit clita duo justo erat amet
						</p>
						<div class='row g-4'>
							{qualityArr.map((item) => (
								<div class='col-6' key={item.name}>
									<div class='d-flex align-items-center'>
										<div class='btn-lg-square bg-primary rounded-circle'>
											<i class={item.icon}></i>
										</div>
										<div class='ms-4'>
											<p class='mb-0'>{item.name}</p>
											<h5 class='mb-0'>{item.label}</h5>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div
					class='col-lg-6 pe-lg-0 wow fadeIn'
					data-wow-delay='0.5s'
					style={{ minHeight: '400px', textAlign: 'left' }}
				>
					<div class='position-relative h-100'>
						<img
							class='position-absolute img-fluid w-100 h-100'
							src='img/feature.jpg'
							style={{ objectFit: 'cover' }}
							alt=''
						/>
					</div>
				</div>
			</div>
			{/* </div> */}
		</div>
	);
}

WhyChooseUs.propTypes = {};

export default WhyChooseUs;
