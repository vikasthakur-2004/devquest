export default function RecentActivity() {
  const activities = [
    "Completed React Basics Mission",
    "Earned 50 XP",
    "Reached Level 3",
    "7 Day Streak Achieved",
  ];

  return (
    <div className="border border-zinc-800 rounded-2xl p-8 mt-8">
      <h2 className="text-2xl font-bold">
        Recent Activity
      </h2>

      <div className="mt-6 space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="border border-zinc-800 rounded-xl p-4"
          >
            {activity}
          </div>
        ))}
      </div>
    </div>
  );
}