export default function Achievements() {
  const achievements = [
    {
      title: "First Mission",
      icon: "🏅",
      status: "Unlocked",
    },
    {
      title: "7 Day Streak",
      icon: "🔥",
      status: "Unlocked",
    },
    {
      title: "100 XP Earned",
      icon: "⚡",
      status: "Unlocked",
    },
    {
      title: "Reached Level 3",
      icon: "🚀",
      status: "Unlocked",
    },
  ];

  return (
    <div className="border border-zinc-800 rounded-2xl p-8 mt-8">
      <h2 className="text-2xl font-bold">
        🏆 Achievements
      </h2>

      <p className="text-zinc-400 mt-2">
        Unlock achievements by completing missions and earning XP.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="border border-zinc-800 rounded-xl p-5 bg-zinc-900"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">
                  {achievement.icon} {achievement.title}
                </h3>
              </div>

              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-lg text-sm">
                {achievement.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}