import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Card, CardBody } from "@material-tailwind/react";
import { Chart as ChartJS, ArcElement } from 'chart.js';
import 'chart.js/auto';
import { Line } from "react-chartjs-2";

import { Theme } from "../../theme/types";

ChartJS.register(ArcElement);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(147, 51, 234, 0.4)",
      borderColor: "rgb(147, 51, 234)"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: true,
      backgroundColor: "rgba(239, 68, 68, 0.4)",
      borderColor: "rgb(239, 68, 68)"
    }
  ]
};

export default function Performace() {
  const theme: Theme = useOutletContext();
  const [options, setOptions] = useState({});
  const [graphData, setGraphData] = useState(data);

  useEffect(() => {
    let updatedGraphData = graphData;

    setOptions({
      color: theme.colors.graph.font,
      scales: {
        x: {
          ticks: { color: theme.colors.graph.font },
          grid: { color: theme.colors.graph.gridAxis }
        },
        y: {
          ticks: { color: theme.colors.graph.font },
          grid: { color: theme.colors.graph.gridAxis }
        }
      }
    });

    updatedGraphData.datasets = graphData.datasets.map((dataset, index) => {
      dataset.backgroundColor = theme.colors.graph.backgroundColors[index];
      dataset.borderColor = theme.colors.graph.borderColors[index];
      return dataset;
    });

    setGraphData({
      ...graphData,
      datasets: graphData.datasets.map((dataset, index) => {
        dataset.backgroundColor = theme.colors.graph.backgroundColors[index];
        dataset.borderColor = theme.colors.graph.borderColors[index];
        return dataset;
      })
    });
  }, [theme])

  return (
    <Card className="rounded-none h-full bg-opacity-20">
      <CardBody>
        <Line id="line" width={500} options={options} data={graphData} className="performance_chart" />
      </CardBody>
    </Card>
  );
}