import { useState } from "react";
import { testimonials } from "../../assets/data";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials({ isMobile }) {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () =>
    setTestimonialIndex(
      (prev) => (prev + (isMobile ? 1 : 2)) % testimonials.length
    );
  const prevTestimonial = () =>
    setTestimonialIndex(
      (prev) =>
        (prev - (isMobile ? 1 : 2) + testimonials.length) % testimonials.length
    );

  return (
    <div
      id="testimonials"
      className="container mx-auto py-16 md:py-24 lg:py-32 px-8 lg:px-12 text-gray-800"
      aria-label="Customer testimonials"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center"
          data-aos="fade-up"
        >
          What Our <span className="text-blue-600">Clients</span> Say
        </h2>
        <p
          className="text-center mb-12 md:mb-16 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We wanted to reduce our carbon footprint, and going solar was the
          perfect way.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16">
          {testimonials
            .slice(testimonialIndex, testimonialIndex + (isMobile ? 1 : 2))
            .map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 md:p-10 lg:p-12 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col gap-4 md:gap-6"
                data-aos="fade-up"
                data-aos-delay={200 + i * 100}
              >
                <Quote className="text-blue-500 text-3xl md:text-4xl opacity-80" />
                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                  {t.quote}
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-xl">{t.name}</p>
                  <p className="text-sm md:text-base text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
        </div>

        <div className="flex justify-center gap-4 md:gap-6">
          <button
            onClick={prevTestimonial}
            className="p-3 md:p-4 rounded-full border-2 border-gray-800 text-gray-800 hover:bg-gray-100 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-3 md:p-4 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
