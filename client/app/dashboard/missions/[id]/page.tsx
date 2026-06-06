import { missions } from "@/constants/missions";

type MissionPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MissionDetailsPage({
  params,
}: MissionPageProps) {
  const { id } = await params;

  const mission = missions.find(
    (m) => m.id === Number(id)
  );

  if (!mission) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        <h1 className="text-4xl font-bold">
          Mission Not Found ❌
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold">
          {mission.title} 🚀
        </h1>

        <p className="text-zinc-400 mt-4">
          {mission.description}
        </p>

        <div className="flex gap-4 mt-6">

          <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg">
            {mission.xp} XP
          </span>

          <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg">
            {mission.difficulty}
          </span>

          <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-lg">
            {mission.status}
          </span>

        </div>

        {/* Mission Tasks */}

        <div className="border border-zinc-800 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-bold">
            Mission Tasks
          </h2>

          <div className="space-y-4 mt-6">
            {mission.tasks.map((task, index) => (
              <div
                key={index}
                className="border border-zinc-800 rounded-xl p-4"
              >
                ⬜ {task}
              </div>
            ))}
          </div>
        </div>

        {/* Progress Section */}

        <div className="border border-zinc-800 rounded-2xl p-8 mt-8">

          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">
              Progress
            </h2>

            <span>33%</span>
          </div>

          <div className="w-full h-4 bg-zinc-800 rounded-full mt-6 overflow-hidden">
            <div
              className="h-full bg-blue-500"
              style={{ width: "33%" }}
            />
          </div>

          <button className="mt-8 bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-xl font-semibold">
            Mark Mission Complete
          </button>

        </div>

      </div>
    </main>
  );
}