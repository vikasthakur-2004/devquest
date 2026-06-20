export default function CurrentMission() {
  return (
    <div className="border border-zinc-800 rounded-2xl p-8 mt-8">
      <div className="flex justify-between items-center">
        <p className="text-blue-400 font-semibold">
          🎯 Current Mission
        </p>

        <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-lg text-sm">
          In Progress
        </span>
      </div>

      <h2 className="text-2xl font-bold mt-4">
        Build a Personal Portfolio Website
      </h2>

      <p className="text-zinc-400 mt-4">
        Create and deploy a responsive portfolio using React,
        Tailwind CSS, GitHub and modern UI practices.
      </p>

      <div className="flex gap-3 mt-6">
        <span className="bg-blue-500/20 text-blue-400 px-3 py-2 rounded-lg">
          +100 XP
        </span>

        <span className="bg-green-500/20 text-green-400 px-3 py-2 rounded-lg">
          Level Reward
        </span>
      </div>

      <div className="mt-6">
        <div className="flex justify-between mb-2">
          <span>Mission Progress</span>
          <span>60%</span>
        </div>

        <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500"
            style={{ width: "60%" }}
          />
        </div>
      </div>

      <div className="mt-6 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
        <p className="text-sm text-zinc-400">
          Complete this mission to earn XP and unlock
          advanced developer missions.
        </p>
      </div>
    </div>
  );
}