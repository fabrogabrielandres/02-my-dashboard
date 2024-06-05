import { SideBard } from "../components";

export default function DashBoardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
        <div className="flex">
          <SideBard />

          <div className="w-full p-2 text-slate-900">
            {children}
          </div>
        </div>
      </div>

    </>
  );
}