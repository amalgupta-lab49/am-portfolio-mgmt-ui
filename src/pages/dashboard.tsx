import { ClientRollUpCard } from "../components/dashboard/clientRollUp";

export default function Dashboard() {
  return <div className=" w-full px-4 flex flex-col gap-3 pt-3 ">
    <div className="flex flex-row  gap-3  ">
      <ClientRollUpCard></ClientRollUpCard>
      <ClientRollUpCard></ClientRollUpCard>
      <ClientRollUpCard></ClientRollUpCard>
      <ClientRollUpCard></ClientRollUpCard>
    </div>
  </div>
}


