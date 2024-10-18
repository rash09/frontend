import React from 'react';
import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";
import {CHART_DATA} from "./Data.js";
function BarChart(props) {
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
    const option = {
  responsive: true,
  plugins: {
    legend: { position: "chartArea" },
    title: {
      display: true,
      text: "Modular Bar Chart",
      },
     maintainAspectRatio: true 
  },
    };

    const chartData = {
  labels: CHART_DATA.map(item => item.name),
  datasets: [
    {
      label: 'Ticket Count',
      data: CHART_DATA.map(item => item.ticketCount),
    },
  ],
};
    

    return (
        <div className="chartBlock">
           <Bar options={option} data={chartData} width={"100%"} /> 
        </div>
    );
}

export default BarChart;