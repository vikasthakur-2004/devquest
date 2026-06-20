import Leaderboard from "@/components/Leaderboard";
import Achievements from "@/components/Achievements";
import Missions from "@/components/dashboard/Missions";
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
        <h1 className="text-4xl font-bold">Welcome Back, Vikas 👋</h1>

        <p className="text-zinc-400 mt-3">
          Track your progress, complete missions, earn XP and become a
          placement-ready developer.
        </p>
        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {dashboardStats.map((stat) => (
            <StatsCard key={stat.title} title={stat.title} value={stat.value} />
          ))}
        </div>

        <div className="mt-8 border border-blue-500/20 bg-zinc-900 rounded-2xl p-6">
          <h2 className="text-2xl font-bold">🎯 Today's Goal</h2>

          <p className="text-zinc-400 mt-3">
            Complete 3 missions and earn 100 XP to reach Level 4.
          </p>
        </div>

        <LevelProgress />
        <CurrentMission />
        <Missions />
        <RecentActivity />
        <Achievements />
        <Leaderboard />
      </main>
    </DashboardLayout>
  );
}