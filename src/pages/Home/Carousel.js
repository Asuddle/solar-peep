import React from 'react';
import Slider from 'react-slick';

function CarouselComponent() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 2000,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	const carouselList = [
		{
			label: 'Pioneers Of Solar And Renewable Energy',
			img: 'img/carousel-2.jpg',
		},
		{
			label: 'Pioneers Of Solar And Renewable Energy',
			img: 'img/carousel-1.jpg',
		},
		{
			label: 'Pioneers Of Solar And Renewable Energy',
			img: 'img/carousel-3.jpg',
		},
	];

	return (
		<div style={{ width: '100%' }}>
			<Slider {...settings} arrows={false}>
				{carouselList.map((item) => (
					<div
						className='owl-carousel-item position-relative'
						style={{ height: '500px', width: '100%' }}
					>
						<img
							class='img-fluid'
							src={item.img}
							alt=''
							style={{ height: '492px', width: '100%' }}
						/>
						<div>
							<div class='owl-carousel-inner'>
								<div class='container'>
									<div class='row justify-content-start'>
										<div class='col-10 col-lg-8'>
											<h1 class='display-2 text-white animated slideInDown'>
												Pioneers Of Solar And Renewable Energy
											</h1>
											<p class='fs-5 fw-medium text-white mb-4 pb-3'>
												Vero elitr justo clita lorem. Ipsum dolor at sed stet
												sit diam no. Kasd rebum ipsum et diam justo clita et
												kasd rebum sea elitr.
											</p>
											<button class='btn btn-primary rounded-pill py-3 px-5 animated slideInLeft'>
												Read More
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default CarouselComponent;
