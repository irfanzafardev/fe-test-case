import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
	const [state] = useState({
		series: [
			{
				data: [2, 3, 8, 6],
			},
		],
		options: {
			chart: {
				type: "bar",
				height: 350,
			},
			plotOptions: {
				bar: {
					borderRadius: 4,
					horizontal: true,
				},
			},
			dataLabels: {
				enabled: false,
			},
			xaxis: {
				categories: ["Get sick", "On leave", "On project", "In the office"],
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
	return <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />;
};

export default BarChart;
