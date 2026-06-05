import { missions } from "@/constants/missions";

export default function Missions() {
  return (
    <div className="border border-zinc-800 rounded-2xl p-8 mt-8">
      <h2 className="text-2xl font-bold">
        Available Missions
      </h2>

      <div className="mt-6 space-y-4">
        {missions.map((mission) => (
          <div
            key={mission.id}
            className="border border-zinc-800 rounded-xl p-5 flex items-center justify-between"
          >
            <div>
              <h3 className="font-semibold text-lg">
                {mission.title}
              </h3>

              <p className="text-zinc-400 text-sm mt-1">
                XP Reward: {mission.xp}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  mission.status === "Completed"
                    ? "bg-green-500/20 text-green-400"
                    : mission.status === "In Progress"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-zinc-800 text-zinc-400"
                }`}
              >
                {mission.status}
              </span>

              <button className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-lg font-medium">
                Start
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}