export default function LevelProgress() {
  const currentXP = 420;
  const nextLevelXP = 1000;

  const percentage = (currentXP / nextLevelXP) * 100;

  return (
    <div className="border border-zinc-800 rounded-2xl p-8 mt-8">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">
          Level Progress
        </h2>

        <span className="text-zinc-400">
          {currentXP}/{nextLevelXP} XP
        </span>
      </div>

      <div className="w-full h-4 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="text-zinc-400 mt-4">
        Earn more XP by completing missions.
      </p>
    </div>
  );
}