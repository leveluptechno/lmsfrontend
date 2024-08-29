import React from 'react';

const leaderboardData = [
  {
    rank: 1,
    name: "Alice Johnson",
    points: 1250,
    coursesCompleted: 10,
  },
  {
    rank: 2,
    name: "Michael Smith",
    points: 1150,
    coursesCompleted: 9,
  },
  {
    rank: 3,
    name: "Emma Brown",
    points: 1100,
    coursesCompleted: 8,
  },
  {
    rank: 4,
    name: "Chris Evans",
    points: 1050,
    coursesCompleted: 8,
  },
  {
    rank: 5,
    name: "Sophia Martinez",
    points: 1000,
    coursesCompleted: 7,
  },
];

function Leaderboard() {
  return (
    <div className="bg-white shadow-md rounded-lg p-3 w-[20rem] sm:w-full lg:w-auto">
      <h2 className="text-lg font-bold text-gray-700 mb-3">Leaderboard</h2>
      <div className="flex flex-col sm:gap-3 gap-4 ">
        {leaderboardData.map((student, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 p-3 rounded-lg ${
              index === 0
                ? "bg-yellow-100 border-yellow-500"
                : index === 1
                ? "bg-gray-300 border-gray-500"
                : index === 2
                ? "bg-orange-100 border-orange-500"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <div className="text-lg font-bold text-gray-700">{student.rank}</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-700">{student.name}</h3>
              <p className="text-sm text-gray-400">
                {student.points} points | {student.coursesCompleted} courses completed
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;