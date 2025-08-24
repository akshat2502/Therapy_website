import { Link } from 'react-router-dom';
import { Calendar, BookOpen, MessageSquare, Users, Shield, Clock, ArrowRight, Star, CheckCircle, X } from 'lucide-react';
import home from "../assets/home4.jpg";
import Navbar from '../components/Layout/Navbar';
import ReviewCarousel from './Testimonial';
import FaqSection from './Faq';

const Home = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Book Therapy Sessions',
      description: 'Schedule appointments with qualified therapists at your convenience.'
    },
    {
      icon: BookOpen,
      title: 'Online Courses',
      description: 'Access comprehensive mental health courses and resources.'
    },
    {
      icon: MessageSquare,
      title: 'Expert Advice',
      description: 'Read our blog for professional insights and mental health tips.'
    },
    {
      icon: Users,
      title: 'Qualified Therapists',
      description: 'Connect with licensed and experienced mental health professionals.'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your privacy and confidentiality are our top priorities.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Get help when you need it with our round-the-clock support.'
    }
  ];

  const stats = [
    { number: "5K+", label: "Happy Clients" },
    { number: "50+", label: "Licensed Therapists" },
    { number: "10+", label: "Expert Courses" },
    { number: "24/7", label: "Support Available" }
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        {/* <Navbar /> */}
        {/* Background Pattern */}
        <img
          src={home}
          alt="Background"
          style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
        }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-30">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
              <span className="text-sm font-medium">Trusted by 5,000+ clients worldwide</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Your Mental Health Journey Starts Here
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-primary-100 leading-relaxed max-w-3xl mx-auto">
              Connect with qualified therapists, access expert-led courses, and get the personalized support you deserve. Your mental wellness is our priority.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/booking"
                className="group bg-blue-600 text-primary-600 px-8 py-4 rounded-xl font-semibold hover:backdrop-blur-sm hover:bg-white/50 hover:text-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                Book a session
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/courses"
                className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-gray-500 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                Browse Courses
                <BookOpen className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-primary-200 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose therapyforall?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We provide comprehensive mental health support tailored to your unique needs, with a focus on accessibility and professional excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:bg-blue-600 duration-300 border border-gray-100 hover:border-primary-200 transform hover:-translate-y-2">
                <div className="bg-primary-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-white">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapy When You Need It */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
    <div className="flex flex-col lg:flex-row items-center justify-end gap-12">
      {/* Image on left for desktop, top for mobile */}
      <div className="lg:w-1/2 w-full">
        <img 
          src='https://assets.betterhelp.com/betterhelp_two/photos/image-how-it-works-3.png?v=0c97063a924d' 
          alt="Therapy anytime, anywhere"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
      
      {/* Content on right for desktop, below image for mobile */}
      <div className="lg:w-2/5 w-full text-center lg:text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Therapy when you need it
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          You can message your therapist at anytime, from anywhere. You also get to schedule live sessions when it's convenient for you, and can connect from any mobile device or computer.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Comparison Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">TherapyForAll vs. traditional in-office therapy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-4">TherapyForAll</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Provided by a qualified therapist</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Messaging any time</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Chat sessions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Phone sessions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Video sessions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Easy scheduling</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Traditional Therapy</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Provided by a qualified therapist</span>
                </li>
                <li className="flex items-center">
                  <X className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-500">Messaging any time</span>
                </li>
                <li className="flex items-center">
                  <X className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-500">Chat sessions</span>
                </li>
                <li className="flex items-center">
                  <X className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-500">Phone sessions</span>
                </li>
                <li className="flex items-center">
                  <X className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-500">Video sessions</span>
                </li>
                <li className="flex items-center">
                  <X className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-500">Easy scheduling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-16 bg-blue-700">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-36">
    <h2 className="text-3xl font-semibold text-center text-white mb-12">
      <span className='text-blue-400/95 text-4xl'>Therapy</span>ForAll vs. Traditional In-Office Therapy
    </h2>

    <div className="overflow-x-auto">
      <div className="min-w-[600px] w-full">
        <div className="grid grid-cols-3 bg-white rounded-sm shadow overflow-hidden text-sm md:text-base">
          
          {/* Header Row */}
          <div className="bg-blue-700 text-white font-semibold p-4"></div>
          <div className="bg-blue-700/90 text-white font-semibold text-center p-4">
            TherapyForAll
          </div>
          <div className="bg-blue-700 text-white font-semibold text-center p-4">
            In-Office
          </div>

          {/* Row: Provided by a qualified therapist */}
          <div className="p-4 border-b border-blue-500 text-white font-medium bg-blue-700">
            Provided by a qualified therapist
          </div>
          <div className="p-4 border border-gray-100 text-center">
            <CheckCircle className="w-5 h-5 text-green-500 inline-block" />
          </div>
          <div className="p-4 border-b border-blue-500 bg-blue-700 text-center">
            <CheckCircle className="w-5 h-5 text-green-500 inline-block" />
          </div>

          {/* Row: In-office visits */}
          <div className="p-4 border-b border-blue-500 text-white font-medium bg-blue-700">
            In-office visits
          </div>
          <div className="p-4 border border-gray-100 text-center">
            <X className="w-5 h-5 text-red-500 inline-block" />
          </div>
          <div className="p-4 border-b border-blue-500 bg-blue-700 text-center">
            <CheckCircle className="w-5 h-5 text-green-500 inline-block" />
          </div>

          {/* Row: Messaging any time */}
          <div className="p-4 border-b border-blue-500 text-white font-medium bg-blue-700">
            Messaging any time
          </div>
          <div className="p-4 border border-gray-100 text-center">
            <CheckCircle className="w-5 h-5 text-green-500 inline-block" />
          </div>
          <div className="p-4 border-b border-blue-500 bg-blue-700 text-center">
            <X className="w-5 h-5 text-red-500 inline-block" />
          </div>

          {/* Row: Chat sessions */}
          <div className="p-4 border-b border-blue-500 text-white font-medium bg-blue-700">
            Chat sessions
          </div>
          <div className="p-4 border border-gray-100 text-center">
            <CheckCircle className="w-5 h-5 text-green-500 inline-block" />
          </div>
          <div className="p-4 border-b border-blue-500 bg-blue-700 text-center">
            <X className="w-5 h-5 text-red-500 inline-block" />
          </div>

          {/* Row: Phone sessions */}
          <div className="p-4 border-b border-blue-500 text-white font-medium bg-blue-700">
            Phone sessions
          </div>
          <div className="p-4 border border-gray-100 text-center">
            <CheckCircle className="w-5 h-5 text-green-500 inline-block" />
          </div>
          <div className="p-4 border-b border-blue-500 bg-blue-700 text-center">
            <X className="w-5 h-5 text-red-500 inline-block" />
          </div>

          {/* Row: Video sessions */}
          <div className="p-4 border-b border-blue-500 text-white font-medium bg-blue-700">
            Video sessions
          </div>
          <div className="p-4 border border-gray-100 text-center">
            <CheckCircle className="w-5 h-5 text-green-500 inline-block" />
          </div>
          <div className="p-4 border-b border-blue-500 bg-blue-700 text-center">
            <X className="w-5 h-5 text-red-500 inline-block" />
          </div>

          {/* Row: Easy scheduling */}
          <div className="p-4 border-b border-blue-500 text-white font-medium bg-blue-700">
            Easy scheduling
          </div>
          <div className="p-4 border border-gray-100 text-center">
            <CheckCircle className="w-5 h-5 text-green-500 inline-block" />
          </div>
          <div className="p-4 border-b border-blue-500 bg-blue-700 text-center">
            <X className="w-5 h-5 text-red-500 inline-block" />
          </div>

        </div>
      </div>
    </div>
  </div>
      </section>

      {/* Testimonials Section */}      
      {/* <section className="py-24 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Community Says</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real stories from real people who found healing and growth through our platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-primary-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <ReviewCarousel />
    </div>
  );
};

export default Home;