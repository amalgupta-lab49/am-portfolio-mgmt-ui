import { ClientRollUpCard } from "../components/dashboard/clientRollUp";
import ClientList from "../components/dashboard/clientList";
import SectorAllocation from "../components/dashboard/sectorAllocation";
import Performace from "../components/dashboard/performance";

export default function Dashboard() {
  return <div className=" w-full px-4 flex flex-col gap-3 pt-3 ">
    <div className="flex flex-row  gap-3  ">
      <ClientRollUpCard></ClientRollUpCard>
      <ClientRollUpCard></ClientRollUpCard>
      <ClientRollUpCard></ClientRollUpCard>
      <ClientRollUpCard></ClientRollUpCard>
    </div>
    <div className="flex flex-row gap-3 " style={{maxHeight:'calc(100vh - 140px)'}}>
      <div className="basis-2/3 flex flex-col gap-3">
        <div  style={{height:'50%'}}>Performace Chart</div>
        <div style={{height:'50%'}}>ClientList</div>
      </div>
      <div className="basis-1/3 ">Sector</div>
    </div>
  </div>
}


