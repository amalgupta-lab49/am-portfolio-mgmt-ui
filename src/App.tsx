// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SideBar } from './pages/sideBar';
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div className=' flex  w-100 overflow-hidden' >
      <SideBar></SideBar>
      <Outlet/>
    </div>
  );
}

export default App;
