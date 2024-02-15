import { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

interface Props {
  children?: ReactNode
}

export function SideBar({ children }: Props) {
  return (
    <Card className="h-[calc(100vh)] shadow-2xl card-background rounded-none">
      <div className="mb-2 p-4 sidebar-font">
        <Typography variant="h5">
          Sidebar
        </Typography>
      </div>
      <List className="sidebar-font">
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
          <Link to={`login`}>Log Out</Link>
        </ListItem>
      </List>
      {children}
    </Card>
  );
}