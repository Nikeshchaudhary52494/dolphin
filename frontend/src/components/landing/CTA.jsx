import { FiArrowRight } from "react-icons/fi";

export default function CTA() {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-600 to-blue-500">
      <div className="container mx-auto px-6 max-w-7xl gap-5 flex sm:flex-row flex-col items-center justify-between">
        <div className="flex flex-col text-center items-start gap-5 sm:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Ready to transform your file management?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
            Join thousands of teams who trust our platform for secure and
            efficient file storage.
          </p>
        </div>
        <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center whitespace-nowrap">
          Get Started for Free <FiArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
}
