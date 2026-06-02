export default function Hero() {
  return (
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
  );
}