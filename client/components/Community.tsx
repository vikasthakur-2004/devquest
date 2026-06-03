import { communityFeatures } from "@/constants/communityFeatures";

export default function Community() {
  return (
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
        {communityFeatures.map((item) => (
          <div
            key={item.title}
            className="border border-zinc-800 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
          >
            <span className="text-2xl">
              {item.icon}
            </span>

            <h3 className="text-xl font-bold mt-4">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}