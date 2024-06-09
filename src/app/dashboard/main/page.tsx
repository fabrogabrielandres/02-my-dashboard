import { SimpleWidget } from "@/components";

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="text-3xl">DashBoard</h1>
      <span className="text-xl">General Information</span>
      <div className="p-2 flex flex-wrap">
        <SimpleWidget/>  
        <SimpleWidget/>  
        <SimpleWidget/>  
        <SimpleWidget/>  
      </div>
      
    </div>
  );
}