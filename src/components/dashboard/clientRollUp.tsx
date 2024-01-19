import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";


export function ClientRollUpCard() {
  return (
    <Card className="basis-1/4 bg-opacity-20 font-color">
      <CardBody className="flex flex-col items-center p-3">
        <Typography variant="h2">
          5
        </Typography>
        <Typography variant="h6">
          Clients
        </Typography>
      </CardBody>
    </Card>
  );
}