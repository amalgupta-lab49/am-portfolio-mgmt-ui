import {
  Card,
  Typography,
  CardBody,
  Chip,
  Avatar,
} from "@material-tailwind/react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";

const TABLE_HEAD = ["Client", "Portfolio", "% Change", "Investment"];
const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "$5M",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: false,
    date: "$200K",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    online: false,
    date: "$260K",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: true,
    date: "$800K",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    online: false,
    date: "$8M",
  },
];

export default function ClientList() {
  return (
    <Card className="rounded-none max-h-full card-background" >
      <CardBody className="overflow-auto p-0">
        <table className="text-left w-full">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="p-4">
                  <Typography variant="small" className="leading-none opacity-70">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ img, name, email, job, org, online, date }) => (
                  <tr key={name}>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Avatar src={img} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography variant="small">
                            {name}
                          </Typography>
                          <Typography variant="small" className="opacity-70">
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <Typography variant="small">
                          {job}
                        </Typography>
                        <Typography variant="small" className="opacity-70">
                          {org}
                        </Typography>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="w-max">
                        <Chip
                          variant="gradient"
                          size="md"
                          value="5%"
                          color={online ? "green" : "red"}
                          icon={online ? <ArrowUpIcon /> : <ArrowDownIcon />}
                        />
                      </div>
                    </td>
                    <td className="p-4">
                      <Typography variant="small">
                        {date}
                      </Typography>
                    </td>
                  </tr>
                ),
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}