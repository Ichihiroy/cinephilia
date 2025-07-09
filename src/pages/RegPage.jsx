import React, { useState } from "react";
import { Eye, EyeOff, Calendar } from "lucide-react";

export default function RegPage() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "+994 51 511 11 11",
    birthDate: "mm / dd / yyyy",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-8">
      <div className="w-full max-w-lg">
        <h1 className="text-white text-3xl font-light mb-12 text-left">
          Qeydiyyat
        </h1>

        <div className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Name Field */}
            <div>
              <label className="block text-gray-400 text-sm mb-3">Ad</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-600 text-white pb-2 focus:border-gray-400 focus:outline-none transition-colors text-base"
              />
            </div>

            {/* Phone Field */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-600 text-gray-400 pb-2 focus:border-gray-400 focus:outline-none transition-colors text-base"
              />
            </div>

            {/* Birth Date Field */}
            <div className="relative">
              <input
                type="text"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-600 text-gray-400 pb-2 pr-8 focus:border-gray-400 focus:outline-none transition-colors text-base"
              />
              <Calendar
                className="absolute right-0 bottom-2 text-gray-400"
                size={20}
              />
            </div>

            {/* Gender Radio Buttons */}
            <div className="flex items-center space-x-6 pt-4">
              <label className="flex items-center text-gray-400 cursor-pointer">
                <div className="relative">
                  <input
                    type="radio"
                    name="gender"
                    value="kisi"
                    checked={formData.gender === "kisi"}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      formData.gender === "kisi"
                        ? "border-white bg-white"
                        : "border-gray-400"
                    }`}
                  >
                    {formData.gender === "kisi" && (
                      <div className="w-2 h-2 bg-gray-900 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    )}
                  </div>
                </div>
                <span className="ml-2">Kişi</span>
              </label>
              <label className="flex items-center text-gray-400 cursor-pointer">
                <div className="relative">
                  <input
                    type="radio"
                    name="gender"
                    value="qadin"
                    checked={formData.gender === "qadin"}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      formData.gender === "qadin"
                        ? "border-white bg-white"
                        : "border-gray-400"
                    }`}
                  >
                    {formData.gender === "qadin" && (
                      <div className="w-2 h-2 bg-gray-900 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    )}
                  </div>
                </div>
                <span className="ml-2">Qadın</span>
              </label>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Surname Field */}
            <div>
              <label className="block text-gray-400 text-sm mb-3">Soyad</label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-600 text-white pb-2 focus:border-gray-400 focus:outline-none transition-colors text-base"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-400 text-sm mb-3">
                Elektron poçt
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-600 text-white pb-2 focus:border-gray-400 focus:outline-none transition-colors text-base"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="block text-gray-400 text-sm mb-3">Şifrə</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-600 text-white pb-2 pr-8 focus:border-gray-400 focus:outline-none transition-colors text-base"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 bottom-2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirm Password Field */}
            <div className="relative">
              <label className="block text-gray-400 text-sm mb-3">
                Şifrəni Təsdiqlə
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-600 text-white pb-2 pr-8 focus:border-gray-400 focus:outline-none transition-colors text-base"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-0 bottom-2 text-gray-400 hover:text-white transition-colors"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-12">
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-4 px-6 rounded-lg transition-colors text-lg"
          >
            Qeydiyyat
          </button>
        </div>
      </div>
    </div>
  );
}
