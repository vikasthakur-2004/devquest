import { journeyLevels } from "@/constants/journeyLevels";

export default function Journey() {
  return (
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
        {journeyLevels.map((item) => (
          <div
            key={item.level}
            className="border border-zinc-800 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
          >
            <p className="text-blue-400 font-semibold">
              {item.level}
            </p>

            <h3 className="text-xl font-bold mt-2">
              {item.title}
            </h3>

            <p className="text-zinc-400 mt-3 text-sm">
              Complete missions and gain XP to unlock this level.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}