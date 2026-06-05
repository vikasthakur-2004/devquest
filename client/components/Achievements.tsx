export default function Achievements() {
  const achievements = [
    "🏅 First Mission",
    "🔥 7 Day Streak",
    "⚡ 100 XP Earned",
    "🚀 Reached Level 3",
  ];

  return (
    <div className="border border-zinc-800 rounded-2xl p-8 mt-8">
      <h2 className="text-2xl font-bold">
        Achievements
      </h2>

      <div className="flex flex-wrap gap-4 mt-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700"
          >
            {achievement}
          </div>
        ))}
      </div>
    </div>
  );
}