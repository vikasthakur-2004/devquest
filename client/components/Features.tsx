export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Why Students Love DevQuest
        </h2>

        <p className="text-zinc-400 mt-4">
          Everything needed to become placement-ready in one platform.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-16">

        <div className="border border-zinc-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold">🎯 Roadmaps</h3>
          <p className="text-zinc-400 mt-4">
            Structured learning paths from beginner to placement-ready.
          </p>
        </div>

        <div className="border border-zinc-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold">🏆 Gamification</h3>
          <p className="text-zinc-400 mt-4">
            XP, streaks, achievements, levels, and leaderboards.
          </p>
        </div>

        <div className="border border-zinc-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold">🤝 Mentorship</h3>
          <p className="text-zinc-400 mt-4">
            Connect with seniors who are ahead in the journey.
          </p>
        </div>

      </div>
    </section>
  );
}