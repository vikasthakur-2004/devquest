"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { missions } from "@/constants/missions";

export default function MissionDetailsPage() {
  const params = useParams();

  const mission = missions.find((m) => m.id === Number(params.id));

  if (!mission) {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold">
        Mission Not Found ❌
      </h1>
    </main>
  );
}

  const [completedTasks, setCompletedTasks] = useState<number[]>([]);

  const progress =
    (completedTasks.length / mission.tasks.length) * 100;
    const isCompleted = completedTasks.length === mission.tasks.length;

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold">{mission.title} 🚀</h1>

        <p className="text-zinc-400 mt-4">{mission.description}</p>

        <div className="flex gap-4 mt-6">
          <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg">
            {mission.xp} XP
          </span>

          <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg">
            {mission.difficulty}
          </span>

          <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-lg">
            {mission.status}
          </span>
        </div>

        <div className="border border-zinc-800 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-bold">Mission Tasks</h2>

          <div className="space-y-4 mt-6">
            {mission.tasks.map((task, index) => (
              <div
                key={index}
                onClick={() => {
                  if (completedTasks.includes(index)) {
                    setCompletedTasks(
                      completedTasks.filter((i) => i !== index),
                    );
                  } else {
                    setCompletedTasks([...completedTasks, index]);
                  }
                }}
                className="border border-zinc-800 rounded-xl p-4 cursor-pointer hover:border-blue-500 transition"
              >
                {completedTasks.includes(index) ? "✅" : "⬜"} {task}
              </div>
            ))}
          </div>
        </div>

        <div className="border border-zinc-800 rounded-2xl p-8 mt-8">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">Progress</h2>

            <span>{Math.round(progress)}%</span>
          </div>

          <div className="w-full h-4 bg-zinc-800 rounded-full mt-6 overflow-hidden">
            <div
              className="h-full bg-blue-500"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <button
            disabled={!isCompleted}
            className={`mt-8 px-6 py-3 rounded-xl font-semibold transition
  ${
    isCompleted
      ? "bg-green-500 hover:bg-green-600"
      : "bg-zinc-700 cursor-not-allowed"
  }`}
          >
            {isCompleted ? "Mission Completed 🎉" : "Complete All Tasks First"}
          </button>

          {isCompleted && (
            <div className="mt-8 border border-green-500/30 bg-green-500/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-green-400">
                🎉 Mission Completed!
              </h2>

              <p className="text-zinc-300 mt-3">
                Congratulations! You have successfully completed this mission.
              </p>

              <div className="flex gap-4 mt-4">
                <span className="bg-blue-500/20 text-blue-400 px-3 py-2 rounded-lg">
                  +{mission.xp} XP Earned
                </span>

                <span className="bg-purple-500/20 text-purple-400 px-3 py-2 rounded-lg">
                  Next Mission Unlocked
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}