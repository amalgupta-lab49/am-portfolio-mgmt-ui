import ClientList from "../components/dashboard/clientList";
import { ClientRollUpCard } from "../components/dashboard/clientRollUp";
import Performace from "../components/dashboard/performance";
import SectorAllocation from "../components/dashboard/sectorAllocation";

export default function Dashboard() {
  return <div className=" w-full p-4 flex flex-col gap-2">
    <div className="flex flex-row  gap-2  ">
      <ClientRollUpCard></ClientRollUpCard>
      <ClientRollUpCard></ClientRollUpCard>
      <ClientRollUpCard></ClientRollUpCard>
      <ClientRollUpCard></ClientRollUpCard>
    </div>
    <div className="flex flex-row gap-2 " style={{maxHeight:'calc(100vh - 140px)'}}>
      <div className="basis-2/3 flex flex-col gap-2">
        <div  style={{height:'50%'}}><Performace/></div>
        <div style={{height:'50%'}}><ClientList/></div>
      </div>
      <div className="basis-1/3 "><SectorAllocation/></div>
    </div>
  </div>
}


