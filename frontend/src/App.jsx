import Dashboard from "./layout/dashboard";
import Sidebar from "./layout/Sidebar";

export default function App() {
  return (
    <div className="bg-[#0A0C10] text-white h-full w-screen">
      <h1 className="text-2xl font-bold">Zorvyn</h1>
      <Sidebar />
      {/* <Dashboard /> */}
    </div>
  );
}