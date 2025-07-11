import { useState } from "react";
import toast from "react-hot-toast";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link, useNavigate } from "react-router";
import { getUserByEmail } from "../services/authServices";

const LogInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }
  console.log(userData);

  async function signIn() {
    if (!userData.email || !userData.password) {
      toast.error("Bütün sahələri doldurun!");
      return;
    } else {
      const [user] = await getUserByEmail(userData.email);
      console.log("user", user);

      if (user === undefined) {
        toast.error("Bu e-poçt ilə istifadəçi tapılmadı!");
        return;
      }
      if (user.password !== userData.password) {
        toast.error("Şifrə yanlışdır!");
        return;
      }

      toast.success(`Giriş uğurludur! Hoş gəldiniz, ${user.name}!`);
      navigate("/");
      sessionStorage.setItem("user", JSON.stringify(user));
      setUserData({ email: "", password: "" });
    }
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-semibold mb-8">Giriş</h1>
        <div className="flex flex-col gap-6">
          <div>
            <label className="block mb-1">Elektron poçt</label>
            <input
              onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
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
