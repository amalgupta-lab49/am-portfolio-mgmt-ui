
import {
  Card,
  CardBody,
} from "@material-tailwind/react";
import { Chart as ChartJS, ArcElement } from 'chart.js';
import 'chart.js/auto'; 
import { Line } from "react-chartjs-2";

ChartJS.register(ArcElement);

export default function Performace() {

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };

  return (
    <Card className="rounded-none h-full  bg-opacity-60 "  >
      <CardBody className=" px-0 h-full " >
        <Line id="line" width={500} data={data} options={
          {
            color: 'black',

          }
        } className="performance_chart" />
      </CardBody>
    </Card>
  );
}