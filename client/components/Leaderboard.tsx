export default function Leaderboard() {
  const users = [
    {
      name: "Vikas",
      xp: 420,
    },
    {
      name: "Rahul",
      xp: 390,
    },
    {
      name: "Aman",
      xp: 350,
    },
  ];

  return (
    <div className="border border-zinc-800 rounded-2xl p-8 mt-8">
      <h2 className="text-2xl font-bold">
        Leaderboard
      </h2>

      <div className="mt-6 space-y-4">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex items-center justify-between border border-zinc-800 rounded-xl p-4"
          >
            <div>
              #{index + 1} {user.name}
            </div>

            <div className="text-blue-400 font-semibold">
              {user.xp} XP
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}