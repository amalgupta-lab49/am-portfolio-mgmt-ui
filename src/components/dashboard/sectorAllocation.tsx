import { useOutletContext } from "react-router-dom";
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
import { Bar, Pie } from 'react-chartjs-2';

import { Theme } from "../../theme/types";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SectorAllocation() {
  const theme: Theme = useOutletContext();
  
  const chartDataMarketCap = {
    labels: ['Information Technology', 'Consumer Discretionary', 'Communication Services',
      'Real Estate', 'Consumer Staples', 'Materials'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: theme.colors.graph.backgroundColors,
        borderColor: theme.colors.graph.borderColors
      },
    ],
  };

  const chartDataSectorAllocation = {
    labels: ['Small Cap', 'Mid Cap', 'Large Cap', 'Fixed Income', 'Money market', 'Others'],
    datasets: [
      {
        data: [12, 19, 30, 5, 20, 3],
        backgroundColor: theme.colors.graph.backgroundColors,
        borderColor: theme.colors.graph.borderColors,
        borderWidth: 1
      }
    ],
  };

  const tabData = [
    {
      label: "Sector",
      desc: <Pie
        id="pie_sector"
        data={chartDataMarketCap}
        options={{
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                color: theme.colors.graph.font,
                font: { size: 8 }
              }
            }
          }
        }}
      />,
    },
    {
      label: "Market Cap",
      desc: <div className="h-80">
        <Bar
          id="pie_mktcap"
          data={chartDataSectorAllocation}
          options={{
            maintainAspectRatio: false,
            scales: {
              x: {
                ticks: { color: theme.colors.graph.font },
                grid: { display: false }
              },
              y: {
                ticks: { color: theme.colors.graph.font },
                grid: { display: false }
              }
            },
            plugins: {
              legend: { display: false }
            }
          }} />
      </div>,
    }
  ];


  return (
    <Card className="h-full rounded-none card-background">
      <CardBody>
        <Tabs value={tabData[0].label}  >
          <TabsHeader 
            className="tab-header"
            indicatorProps={{ className: "selected-tab" }}
          >
            {tabData.map(({ label }) => (
              <Tab key={label} value={label}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {tabData.map(({ label, desc }) => (
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