export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r border-zinc-800 p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-10">DevQuest 🚀</h2>
        </div>

      <div className="flex flex-col gap-4 text-zinc-300">
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-3 rounded-xl bg-zinc-900 text-blue-400"
        >
          🏠 Dashboard
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-zinc-900 hover:text-blue-400 transition"
        >
          🎯 Missions
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-zinc-900 hover:text-blue-400 transition"
        >
          🗺️ Roadmap
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-zinc-900 hover:text-blue-400 transition"
        >
          🏆 Leaderboard
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-zinc-900 hover:text-blue-400 transition"
        >
          🤖 AI Mentor
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-zinc-900 hover:text-blue-400 transition"
        >
          ⚙️ Settings
        </a>
      </div>
    </aside>
  );
}