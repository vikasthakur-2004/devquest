export default function CurrentMission() {
  return (
    <div className="border border-zinc-800 rounded-2xl p-8 mt-8">
      <p className="text-blue-400 font-semibold">
        Current Mission
      </p>

      <h2 className="text-2xl font-bold mt-2">
        Build a Personal Portfolio Website
      </h2>

      <p className="text-zinc-400 mt-4">
        Create and deploy a responsive portfolio using React,
        Tailwind CSS, and GitHub.
      </p>

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
    </div>
  );
}