import { features } from "@/constants/features";

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
        {features.map((feature) => (
          <div
            key={feature.title}
            className="border border-zinc-800 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold">
              {feature.icon} {feature.title}
            </h3>

            <p className="text-zinc-400 mt-4">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}