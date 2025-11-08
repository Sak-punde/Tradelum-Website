import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const DoughnutChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Watchlist Stock Prices",
        font: {
        size: 25, 
        
      },

        
      },
    },
  };

  return (
    <div style={{ width: "100%",height:"80%"  }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
