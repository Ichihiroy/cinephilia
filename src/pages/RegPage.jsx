import React, { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";

const RegPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    birthdate: "",
  });

  function handleChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

  function registerUser() {
    if (
      !userData.name ||
      !userData.surname ||
      !userData.phone ||
      !userData.email ||
      !userData.birthdate
    ) {
      alert("Bütün sahələri doldurun!");
      return;
    }
  }

  console.log("userData", userData);

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-semibold mb-8">Qeydiyyat</h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1">Ad</label>
            <input
              name="name"
              onChange={(e) => handleChange(e)}
              type="text"
              className="w-full p-2 bg-transparent border-b border-gray-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1">Soyad</label>
            <input
              name="surname"
              onChange={(e) => handleChange(e)}
              type="text"
              className="w-full p-2 bg-transparent border-b border-gray-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">Telefon</label>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-white font-bold">+994</span>
              <input
                name="phone"
                onChange={(e) => handleChange(e)}
                type="text"
                className="flex-1 p-2 bg-transparent border-b border-gray-500 focus:outline-none"
                placeholder="51 511 11 11"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1">Elektron poçt</label>
            <input
              name="email"
              onChange={(e) => handleChange(e)}
              type="email"
              className="w-full p-2 bg-transparent border-b border-gray-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">Doğum Tarixi</label>
            <input
              name="birthdate"
              onChange={(e) => handleChange(e)}
              type="date"
              className="w-full p-2 bg-transparent border-b border-gray-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center space-x-4 mt-6"></div>

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

          <div>
            <label className="block mb-1">Şifrəni Təsdiqlə</label>
            <div className="flex items-center border-b border-gray-500">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full p-2 bg-transparent focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="text-white px-2"
              >
                {showConfirmPassword ? <LuEye /> : <LuEyeClosed />}
              </button>
            </div>
          </div>

          <div className="md:col-span-2">
            <button
              onClick={registerUser}
              type="submit"
              className="w-full bg-red-800 hover:bg-red-700 transition text-white py-2 rounded-full"
            >
              Qeydiyyat
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegPage;
