import AboutUs from './AboutUs';
import Carousel from './Carousel';
import FreeQuote from './FreeQuote';
import Graphs from './Graphs';
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
			<br />
			<Graphs />
			<br />
			{/* <Stats /> */}
			{/* <AboutUs /> */}
			<WhyChooseUs />

			<br />
			<br />
			<Service />
			<br />
			<br />
			<Projects />
			<br />
			<br />
			<FreeQuote />
			{/* <Team /> */}
		</>
	);
}

export default HomeComponent;
