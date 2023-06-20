import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
	const [state] = useState({
		series: [
			{
				name: "Attendance",
				data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
			},
		],
		options: {
			chart: {
				height: 350,
				type: "line",
				zoom: {
					enabled: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: "straight",
			},
			title: {
				text: "Monthly employee attendance",
				align: "left",
				style: {
					fontSize: "14px",
					fontWeight: "bold",
					color: "#fff",
				},
			},
			grid: {
				row: {
					colors: ["#fff", "transparent"],
					opacity: 0.5,
				},
			},
			xaxis: {
				categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
				labels: {
					style: {
						colors: "#fff",
					},
				},
			},
			yaxis: {
				labels: {
					style: {
						colors: "#fff",
					},
				},
			},
		},
	});
	return <ReactApexChart options={state.options} series={state.series} type="line" height={350} />;
};

export default LineChart;
