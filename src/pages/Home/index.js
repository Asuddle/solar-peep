import AboutUs from './AboutUs';
import Carousel from './Carousel';
import FreeQuote from './FreeQuote';
import Projects from './Projects';
import React from 'react';
import Service from './Service';
import Stats from './Stats';
import Team from './Team';
import Testimonial from './Testimonial';
import WhyChooseUs from './WhyChooseUs';

function HomeComponent(props) {
	return (
		<>
			<Carousel />
			<Stats />
			<AboutUs />
			<Service />
			<WhyChooseUs />
			<Projects />
			<FreeQuote />
			<Team />
			<Testimonial />
		</>
	);
}

export default HomeComponent;
