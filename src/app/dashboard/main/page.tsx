import { SimpleWidget } from "@/components";
import { WidgetsGridsPage } from "@/components/Dashboard/WidgetsGrids";

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="text-3xl">DashBoard</h1>
      <span className="text-xl">General Information</span>
      <WidgetsGridsPage />


    </div>
  );
}