import { useEffect, useState } from "react";
import { Star, ArrowLeft, ArrowRight, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom';


const testimonials = [
  {
    name: "Sumit Sharma",
    role: "Client",
    time: "3 days ago",
    image: "https://media.istockphoto.com/id/1327681341/photo/very-cute-ethnic-man-on-the-street.jpg?s=612x612&w=0&k=20&c=5I1utZ_ImG5EIvP-XbSgkQvh00aYDUndwnq6BV9SPBk=",
    content:
      "therapyforall helped me find the perfect therapist. The platform is so easy to use and the support is amazing.",
    rating: 5,
  },
  {
    name: "Dr. Michael Chen",
    role: "Therapist",
    time: "5 days ago",
    image: "https://thewaywomenwork.com/wp-content/uploads/2013/07/Nithya-V-Raman-1-e1346782184198.jpg",
    content:
      "As a therapist, I love how therapyforall makes it easy to connect with clients and manage my practice.",
    rating: 5,
  },
  {
    name: "Shubham kumar",
    role: "Course Student",
    time: "1 week ago",
    image: "https://media.istockphoto.com/id/588389530/photo/young-and-happy.jpg?s=612x612&w=0&k=20&c=HaXvhRV0THWhl5lbRPNBGXItYPzZJdFspOd9CwbZGIQ=",
    content:
      "The mental health courses are incredibly comprehensive and have helped me understand myself better.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Client",
    time: "2 weeks ago",
    image: "https://www.shutterstock.com/image-photo/portrait-young-adult-indian-woman-260nw-2387090027.jpg",
    content:
      "Life-changing experience. My therapist matched through therapyforall has helped me through my darkest times with incredible care.",
    rating: 5,
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 9000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <>
    <section className="py-14 bg-green-900 text-white relative overflow-hidden">
        {/* Decorative Pattern Overlay */}
  <div className="absolute inset-0 bg-black/10">
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "40px 40px",
      }}
    />
  </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real stories from real people who found healing and growth through
            our platform.
          </p>
        </div>

        {/* Arrows */}
        <div className="absolute left-4 top-2/3 transform -translate-y-1/2 z-10">
          <button
            onClick={handlePrev}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full"
            >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="absolute right-4 top-2/3 transform -translate-y-1/2 z-10">
          <button
            onClick={handleNext}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full"
            >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Carousel Wrapper */}
    <div className="overflow-hidden relative">
    <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
        transform: `translate(-${currentIndex * 50}%)`, // Slide 50% per testimonial pair
        width: `${testimonials.length * 50}%`,
        }}
    >
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className="w-full md:w-1/2 px-5 shrink-1"
      >
        <div className="bg-gray-900 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-lg">
          <div className="flex items-center mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
            ))}
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            "{testimonial.content}"
          </p>
          <div className="flex items-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full border mr-3 object-cover"
            />
            <div>
              <div className="font-semibold text-white">{testimonial.name}</div>
              <div className="text-primary-400 text-sm">{testimonial.role}</div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
    </div>

      </div>
    </section>
    
     {/* CTA Section */}
      <section className="py-20 bg-green-900 text-white relative overflow-hidden">
  {/* Decorative Pattern Overlay */}
  <div className="absolute inset-0 bg-black/10">
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "40px 40px",
      }}
    />
  </div>

  {/* Main Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
      Ready to Start Your Journey?
    </h2>
    <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
      Join thousands who’ve found healing, growth, and mental clarity through our comprehensive wellness platform.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      <Link
        to="/signup"
        className="group relative overflow-hidden bg-white text-blue-700 px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
      >
        <span className="relative z-10 flex items-center">
          Get Started Today
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
        <span className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition-opacity duration-300"></span>
      </Link>

      <Link
        to="/contact"
        className="group relative overflow-hidden border-2 border-white/25 bg-white/10 backdrop-blur-lg text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-2xl"
      >
        <span className="relative z-10 flex items-center">
          Contact Us
          <MessageSquare className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
        </span>
        <span className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition-opacity duration-300"></span>
      </Link>
    </div>
  </div>
</section>
          </>
  );
}
