import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
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
		label: 'Start saving with the sun',
		img: 'img/carousel-2.jpg',
		caption:
			'Click the button and check how much carbon and energy you can save by moving towards solar solution',
	},
	{
		label: 'Pioneers Of Solar And Renewable Energy',
		img: 'img/carousel-1.jpg',
		caption:
			'Vero elitr justo clita lorem. Ipsum dolor at sed stetsit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.',
	},
	{
		label: 'Pioneers Of Solar And Renewable Energy',
		img: 'img/carousel-3.jpg',
		caption:
			'Vero elitr justo clita lorem. Ipsum dolor at sed stetsit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.',
	},
];

function CarouselComponent() {
	const navigate = useNavigate();
	const handleButton = () => {
		navigate('/form');
	};
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
												{item.label}
											</h1>
											<p class='fs-5 fw-medium text-white mb-4 pb-3'>
												{item.caption}
											</p>
											<button
												class='btn btn-primary rounded-pill py-3 px-5 animated slideInLeft'
												onClick={handleButton}
											>
												Go to Solar Calulator
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
