export default function LevelProgress() {
  const currentXP = 420;
  const nextLevelXP = 1000;

  const percentage = (currentXP / nextLevelXP) * 100;

  return (
    <div className="border border-zinc-800 rounded-2xl p-8 mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">
          🏆 Level Progress
        </h2>

        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg">
          Level 3
        </span>
      </div>

      <div className="flex justify-between text-sm text-zinc-400 mb-3">
        <span>Current XP</span>
        <span>
          {currentXP}/{nextLevelXP} XP
        </span>
      </div>

      <div className="w-full h-4 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="mt-4 flex justify-between text-sm">
        <span className="text-zinc-400">
          {nextLevelXP - currentXP} XP remaining
        </span>

        <span className="text-blue-400">
          {Math.round(percentage)}%
        </span>
      </div>

      <div className="mt-6 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
        <p className="text-zinc-400">
          Complete missions and earn XP to unlock
          Level 4 Developer Status 🚀
        </p>
      </div>
    </div>
  );
}