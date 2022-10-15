import './App.css';

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import AboutUs from './pages/Home/AboutUs';
import ContactUs from './pages/Contact';
import Footer from './container/Footer';
import HomeComponent from './pages/Home';
import NavigationComponent from './container/Nav';

function App() {
	const RoutesComponent = () => {
		return useRoutes([
			{ path: '/', element: <HomeComponent /> },
			{ path: '/about', element: <AboutUs /> },
			{ path: '/contact', element: <ContactUs /> },
			// { path: '/activity-monitor', element: <ActivityMonitorComponent /> },
			// { path: '/onboarding', element: <OnboardingComponent /> },
			// { path: '/onboard/:id', element: <OnboardManagement /> },
		]);
	};
	return (
		<div className='App'>
			<Router>
				<NavigationComponent />
				<RoutesComponent />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
