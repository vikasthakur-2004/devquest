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
{/* <!-- Features Section --> */}
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

{/* <!-- AI Mentorship Section --> */}
<section className="max-w-7xl mx-auto px-6 py-24">
  <div className="border border-blue-500/20 bg-zinc-900 rounded-3xl p-12 text-center">

    <h2 className="text-4xl font-bold">
      Meet Your AI Mentor
    </h2>

    <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
      Ask coding doubts, understand roadmaps, get project ideas, and receive
      personalized guidance anytime.
    </p>

    <button className="mt-8 bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-xl font-semibold">
      Ask AI Coach
    </button>

  </div>
</section>
{/* <!-- Community Section --> */}
<section className="max-w-7xl mx-auto px-6 py-24">
  <div className="text-center">

    <h2 className="text-4xl font-bold">
      Learn Together
    </h2>

    <p className="text-zinc-400 mt-4">
      Join a community of students, mentors, and future developers.
    </p>

  </div>

  <div className="grid md:grid-cols-3 gap-6 mt-16">

    <div className="border border-zinc-800 rounded-2xl p-8">
      👨‍💻 Peer Learning
    </div>

    <div className="border border-zinc-800 rounded-2xl p-8">
      💬 Real-Time Chat
    </div>

    <div className="border border-zinc-800 rounded-2xl p-8">
      🚀 Placement Support
    </div>

  </div>
</section>
{/* <!-- Footer --> */}
<footer className="border-t border-zinc-800 py-10 text-center text-zinc-500">
  © 2026 DevQuest. Built for students who want to become software developers.
</footer>
    </main>
  );
}