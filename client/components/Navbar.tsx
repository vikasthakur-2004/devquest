export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="text-2xl font-bold">
        DevQuest 🚀
      </div>

      <div className="hidden md:flex items-center gap-8 text-zinc-300">
        <a href="#">Home</a>
        <a href="#">Roadmap</a>
        <a href="#">Features</a>
        <a href="#">Community</a>
      </div>

      <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold">
        Get Started
      </button>
    </nav>
  );
}