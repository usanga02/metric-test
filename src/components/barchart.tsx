import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Import from 'chart.js/auto' for TypeScript

type Props = {
  Error500: number;
  Error501: number;
  Error502: number;
  Other: number;
};

const StackedBarChart = ({ Error500, Error501, Error502, Other }: Props) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Get the chart context
      const chartContext: any = chartRef.current.getContext("2d");

      // Define the chart data
      const data = {
        labels: ["Error"],
        datasets: [
          {
            label: `Error 500: ${Error500}`,
            data: [Error500],
            backgroundColor: "#FFCC00",
            barThickness: 10, // Set the bar thickness
            maxBarThickness: 12, // Set the maximum bar thickness
            barPercentage: 0.6, // Set the bar percentage
          },
          {
            label: `Error 501: ${Error501}`,
            data: [Error501],
            backgroundColor: "#5856D5",
            barThickness: 10, // Set the bar thickness
            maxBarThickness: 12, // Set the maximum bar thickness
            barPercentage: 0.6, // Set the bar percentage
          },
          {
            label: `Error 502: ${Error502}`,
            data: [Error502],
            backgroundColor: "#2196F3",
            barThickness: 10, // Set the bar thickness
            maxBarThickness: 12, // Set the maximum bar thickness
            barPercentage: 0.6, // Set the bar percentage
          },
          {
            label: `Other: ${Other}`,
            data: [Other],
            backgroundColor: "#A0B0B9",
            barThickness: 10, // Set the bar thickness
            maxBarThickness: 12, // Set the maximum bar thickness
            barPercentage: 0.6, // Set the bar percentage
          },
        ],
      };

      // Create the chart
      new Chart(chartContext, {
        type: "bar",
        data: data,
        options: {
          indexAxis: "y",
          scales: {
            x: {
              stacked: true,
              display: false,
            },
            y: {
              stacked: true,
              display: false, // Set display to false to hide the y-axis
            },
          },
          plugins: {
            legend: {
              display: true, // Set display to false to hide the legend
              position: "bottom",
              align: "start",
              labels: {
                boxWidth: 10,
                useBorderRadius: true,
                borderRadius: 2,
              },
            },
          },
        },
      });
    }
  }, []);

  return <canvas ref={chartRef} height={20} width={200} />;
};

export default StackedBarChart;
