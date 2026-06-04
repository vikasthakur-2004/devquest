import DashboardLayout from "@/components/dashboard/DashboardLayout";
import RecentActivity from "@/components/dashboard/RecentActivity";
import CurrentMission from "@/components/dashboard/CurrentMission";
import LevelProgress from "@/components/dashboard/LevelProgress";
import StatsCard from "@/components/dashboard/StatsCard";
import { dashboardStats } from "@/constants/dashboardStats";
export default function DashboardPage() {
  return (
     <DashboardLayout>
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold">Welcome Back, Vikas 🚀</h1>

      <p className="text-zinc-400 mt-3">
        Keep learning, complete missions and level up.
      </p>

      <div className="grid md:grid-cols-4 gap-6 mt-10">
        {dashboardStats.map((stat) => (
          <StatsCard key={stat.title} title={stat.title} value={stat.value} />
        ))}
      </div>
      <LevelProgress />
      <CurrentMission />
      <RecentActivity />
    </main>
    </DashboardLayout>
  );
}