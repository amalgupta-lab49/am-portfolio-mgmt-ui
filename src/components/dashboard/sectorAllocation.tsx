
import {
  Card,
  TabsBody,
  TabPanel,
  CardBody,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function SectorAllocation() {
  const chartDataMarketCap = {
    labels: ['Information Technology', 'Consumer Discretionary', 'Communication Services',
      'Real Estate', 'Consumer Staples', 'Materials'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartDataSectorAllocation = {
    labels: ['Small Cap', 'Mid Cap', 'Large Cap', 'Fixed Income', 'Money market', 'Others'],
    datasets: [
      {
        data: [12, 19, 30, 5, 20, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1
      }
    ],
  };

  const data = [
    {
      label: "Sector",
      desc: <Pie id="pie_sector"  options={{
        
        plugins: {
          legend: {
            display: false
          },
          datalabels: {
            color: 'black',
            formatter: (val, ctx) => (ctx?.chart?.data?.labels?.[ctx.dataIndex])
          },
        }
      }} data={chartDataMarketCap} />,
    },
    {
      label: "Market Cap",
      desc: <Pie options={{
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            color: 'black',
            formatter: (val, ctx) => (ctx?.chart?.data?.labels?.[ctx.dataIndex])
          },
        }
      }} id="pie_mktcap" data={chartDataSectorAllocation} />,
    }
  ];


  return (
    <Card className="rounded-none bg-opacity-60">
      <CardBody className=" px-0 ">
        <Tabs value={data[0].label}  >
          <TabsHeader>
            {data.map(({ label }) => (
              <Tab key={label} value={label} className="">
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ label, desc }) => (
              <TabPanel key={label} value={label}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
}