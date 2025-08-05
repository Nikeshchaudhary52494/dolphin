import { useClerk, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const { openSignIn, openSignUp } = useClerk();
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [navigate, isSignedIn]);

  return (
    <div className="relative bg-gradient-to-t from-blue-100 to-white pt-24">
      <div className="container mx-auto px-6 gap-10 flex flex-col max-w-7xl">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="md:text-6xl text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Share Files Securely with <br />
            <span className="text-blue-600">Dolphin</span>
          </h1>
          <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
            Upload, manage, and share your files securely. Accessible anywhere,
            anytime.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => openSignUp()}
            className="px-8 py-4 w-40 bg-blue-600 text-white text-lg rounded-sm font-medium hover:bg-blue-700 transition-colors shadow-lg"
          >
            Get Started
          </button>
          <button
            onClick={() => openSignIn()}
            className="px-8 py-4 w-40 border border-gray-300 hover:bg-gray-100 transition-colors bg-white text-gray-700 text-lg rounded-sm font-medium"
          >
            Sign in
          </button>
        </div>

        <div className="rounded-xl shadow-2xl">
          <img
            src=""
            alt="Dolphin Dashboard Preview"
            className="rounded-xl w-full h-auto"
          />
        </div>
        <p className="text-center text-gray-500">
          All your files are encrypted and stored securely with enterprise-grade
          security protocols.
        </p>
      </div>
    </div>
  );
}
