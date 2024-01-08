import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Button
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {  Link } from "react-router-dom";

export function SideBar() {
 
  return (
    <Card className="h-[calc(100vh)] shadow-2xl bg-opacity-60 rounded-none">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to={`/`}>Dashboard</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to={`portfolio`}>Portfolio</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to={`clients`}>Clients</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}