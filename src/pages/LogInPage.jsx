import { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link } from "react-router";

const LogInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    password: "",
  });

  function signIn() {}

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-semibold mb-8">Giriş</h1>
        <div className="flex flex-col gap-6">
          <div>
            <label className="block mb-1">Elektron poçt</label>
            <input
              name="email"
              type="email"
              className="w-full p-2 bg-transparent border-b border-gray-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">Şifrə</label>
            <div className="flex items-center border-b border-gray-500">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="w-full p-2 bg-transparent focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-white px-2"
              >
                {showPassword ? <LuEye /> : <LuEyeClosed />}
              </button>
            </div>
          </div>

          <div className="md:col-span-2">
            <button
              onClick={signIn}
              className="w-full bg-red-800 hover:bg-red-700 transition text-white py-2 rounded-full"
            >
              Giriş
            </button>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-300">
            Hələ qeydiyyatdan keçməmisiniz?{" "}
            <Link
              to="/register"
              className="text-white underline hover:underline"
            >
              Qeydiyyatdan keçin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
