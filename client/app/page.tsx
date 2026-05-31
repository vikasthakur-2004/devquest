export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
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

  
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="inline-block px-4 py-2 rounded-full border border-zinc-800 text-sm text-blue-400">
          🚀 DevQuest
        </div>

        <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
          Level Up From
          <br />
          Student To
          <br />
          Software Developer
        </h1>

        <p className="mt-8 text-zinc-400 text-lg max-w-3xl mx-auto">
          A gamified learning platform that helps college students become
          industry-ready developers through roadmaps, missions, mentorship,
          leaderboards, and AI-powered guidance.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
          <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold">
            Start Journey
          </button>

          <button className="border border-zinc-700 px-8 py-4 rounded-xl">
            Explore Roadmap
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-4xl font-bold">7</h3>
            <p className="text-zinc-400 mt-2">Levels</p>
          </div>

          <div className="border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-4xl font-bold">100+</h3>
            <p className="text-zinc-400 mt-2">Missions</p>
          </div>

          <div className="border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-4xl font-bold">24/7</h3>
            <p className="text-zinc-400 mt-2">AI Coach</p>
          </div>

          <div className="border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-4xl font-bold">∞</h3>
            <p className="text-zinc-400 mt-2">Growth</p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-24">
  <div className="text-center">
    <h2 className="text-4xl md:text-5xl font-bold">
      7-Level Developer Journey
    </h2>

    <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
      Progress through structured levels and transform from a beginner into a
      placement-ready software developer.
    </p>
  </div>

  <div className="grid md:grid-cols-4 gap-6 mt-16">
    {[
      "Beginner",
      "Explorer",
      "Builder",
      "Developer",
      "Problem Solver",
      "Collaborator",
      "Placement Ready",
    ].map((level, index) => (
      <div
        key={index}
        className="border border-zinc-800 rounded-2xl p-6 hover:border-blue-500 transition"
      >
        <p className="text-blue-400 font-semibold">
          Level {index + 1}
        </p>

        <h3 className="text-xl font-bold mt-2">
          {level}
        </h3>

        <p className="text-zinc-400 mt-3 text-sm">
          Complete missions and gain XP to unlock this level.
        </p>
      </div>
    ))}
  </div>
</section>
    </main>
  );
}