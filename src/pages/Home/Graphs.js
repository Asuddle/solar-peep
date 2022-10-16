import { Grid } from '@mui/material';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const data = {
	series: [
		{
			name: 'Other Energy',
			data: [44, 55, 41, 64, 20, 43, 21],
		},
		{
			name: 'Solar Energy',
			data: [62, 88, 68, 99, 32, 71, 42],
		},
	],
	options: {
		chart: {
			type: 'bar',
			height: 430,
		},
		plotOptions: {
			bar: {
				horizontal: true,
				dataLabels: {
					position: 'top',
				},
			},
		},
		dataLabels: {
			enabled: true,
			offsetX: -6,
			style: {
				fontSize: '12px',
				colors: ['#fff'],
			},
		},
		stroke: {
			show: true,
			width: 1,
			colors: ['#fff'],
		},
		tooltip: {
			shared: true,
			intersect: false,
		},
		xaxis: {
			categories: [
				'Fluorescent Tube',
				'Incandescent Lamp',
				'LED Light',
				'AC Conventional',
				'AC Invertor',
				'Fan Conventional',
			],
		},
	},
};

const graphData = {
	series: [
		{
			name: 'Other Energy',
			data: [71, 62, 28, 51, 42, 109, 100],
		},
		{
			name: 'Solar Energy',
			data: [41, 62, 45, 72, 64, 150, 130],
		},
	],
	options: {
		chart: {
			id: 'spline-chart',
			height: 350,
			type: 'area',
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: 'smooth',
		},
		xaxis: {
			type: 'datetime',
			categories: [
				'2018-09-19T00:00:00.000Z',
				'2018-09-19T01:30:00.000Z',
				'2018-09-19T02:30:00.000Z',
				'2018-09-19T03:30:00.000Z',
				'2018-09-19T04:30:00.000Z',
				'2018-09-19T05:30:00.000Z',
				'2018-09-19T06:30:00.000Z',
			],
		},
		tooltip: {
			x: {
				format: 'dd/MM/yy HH:mm',
			},
		},
	},
};

function Graphs(props) {
	return (
		<div className='container-xxl py-5'>
			<div className='container'>
				<div
					className='text-center mx-auto mb-5 wow fadeInUp'
					data-wow-delay='0.1s'
					style={{ maxWidth: '600px' }}
				>
					<h6 className='text-primary'>Our Statistics</h6>
					<h1 className='mb-4'>
						The overal statistics as well as appliances based statistics
					</h1>
				</div>

				<Grid container>
					<Grid item xs={12} md={6}>
						<div id='chart'></div>
						<ReactApexChart
							options={data.options}
							series={data.series}
							type='bar'
							height={430}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<div id='spline-chart'></div>
						<ReactApexChart
							options={graphData.options}
							series={graphData.series}
							type='area'
							height={430}
						/>
					</Grid>
				</Grid>
			</div>
			<h4>
				The carbon emission would be reduced to more then 25% on green energy
			</h4>
		</div>
	);
}

export default Graphs;
