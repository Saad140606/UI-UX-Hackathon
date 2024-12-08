import Image from "next/image";
import Link from "next/link";

const Signin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg font-['Helvetica']">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/assets/navbar1.png"
            alt="logo"
            width={60}
            height={60}
            className="pb-4 mt-5"
          />
        </div>

        {/* Heading */}
        <div className="text-center text-2xl font-bold leading-8 mb-6">
          <h1>
            Your Account <br /> For Everything <br /> Nike
          </h1>
        </div>

        {/* Email Input */}
        <div className="mt-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            className="w-full border border-gray-300 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Password Input */}
        <div className="mt-4">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="w-5 h-5 appearance-none border border-gray-300 rounded checked:bg-black checked:focus:ring-2 checked:focus:ring-black checked:after:content-['✔'] checked:after:text-white checked:after:block"
            />
            <p className="ml-3 text-sm text-gray-500">Keep me signed in</p>
          </div>
          <p className="text-sm text-blue-500 hover:underline cursor-pointer">
            Forgotten your password?
          </p>
        </div>

        {/* Privacy Policy */}
        <div className="text-center text-gray-500 text-sm mt-6">
          <p>
            By logging in, you agree to
            <span className="underline">Nike's Privacy Policy</span> and
            <span className="underline">Terms of Use</span>.
          </p>
        </div>

        {/* Sign-In Button */}
        <div className="mt-6">
          <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition">
            SIGN IN
          </button>
        </div>

        {/* Join Us Section */}
        <div className="text-center text-gray-500 text-sm mt-6">
          <p>
            Not a Member?
            <span className="text-black underline">
              <Link href="/joinus">Join Us.</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
