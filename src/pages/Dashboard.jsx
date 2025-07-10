import React from "react";

const Dashboard = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center p-6">
      <div className="bg-zinc-800 p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <img className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-zinc-700" />
        <h1 className="text-2xl font-semibold">
          {user.name} {user.surname}
        </h1>

        <div className="mt-6 text-left space-y-2">
          <div>
            <span className="text-zinc-400">Email:</span>
            <p className="text-white">{user.email}</p>
          </div>
          <div>
            <span className="text-zinc-400">Location:</span>
            <p className="text-white">Baku, Azerbaijan</p>
          </div>
          <div>
            <span className="text-zinc-400">Joined:</span>
            <p className="text-white">July 2025</p>
          </div>
        </div>

        <button className="mt-6 bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-2 rounded-xl transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
