 
import { SideBar } from './components/sideBar';
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div className=' flex  w-100 overflow-hidden bg-blue-200 ' >
      <SideBar></SideBar>
      <Outlet/>
    </div>
  );
}

export default App;
