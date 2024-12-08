"use client"; // It tells Next.js it's a Client Component

import { useState } from "react";
import { SiNike } from "react-icons/si";

export default function JoinUs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = () => {
    console.log({
      email,
      password,
      firstName,
      lastName,
      birthday,
      country,
      gender,
      termsAccepted,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg p-6 sm:p-8 rounded-lg w-full max-w-lg">
        {/* Nike Logo */}
        <div className="flex justify-center mb-4 text-4xl text-black">
          <SiNike />
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          BECOME A NIKE MEMBER
        </h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration, and community.
        </p>

        {/* Form */}
        <div className="space-y-4">
          <input
            type="email"
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            type="date"
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />

          <div className="text-sm text-gray-600 mb-2">
            Get a Nike Member Reward every year on your Birthday.
          </div>
          <select
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select a Country</option>
            <option value="Pakistan">Pakistan</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
          </select>

          <div className="mt-2">
            <span className="text-sm text-gray-600">Select Gender:</span>
            <div className="flex space-x-4 mt-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={() => setGender("Male")}
                  className="border-gray-500"
                />
                <span className="ml-2 text-sm">Male</span>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={() => setGender("Female")}
                  className="border-gray-500"
                />
                <span className="ml-2 text-sm">Female</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center space-x-2">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="border-gray-500"
            />
            <span className="text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-blue-500">
                Terms and Policy
              </a>
            </span>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
          >
            Join Us
          </button>

          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">
              Already have an account?{" "}
            </span>
            <a href="signin" className="text-blue-500 font-medium">
              Sign-In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
