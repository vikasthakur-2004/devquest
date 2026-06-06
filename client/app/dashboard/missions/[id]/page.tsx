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

      </div>
    </main>
  );
}