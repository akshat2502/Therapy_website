import React from "react";

const Contact = () => {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 py-10 bg-gradient-to-br from-blue-900 via-blue-900 to-gray-900">
      <div className="max-w-2xl w-full bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-2xl rounded-xl p-8 border border-gray-700 border-opacity-50">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-red-500 mb-2">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-md">We'd love to hear from you</p>
        </div>
        
        <form 
          action="mailto:akshatarora411@gmail.com" 
          method="post" 
          encType="text/plain"
          className="space-y-5">
          <div className="group relative">
            <input
              type="text"
              required
              className="w-full px-6 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg outline-none focus:border-pink-500 focus:shadow-lg focus:shadow-pink-500/20 transition-all duration-300 text-white placeholder-transparent peer"
              placeholder="Your Name"
            />
            <label className="absolute left-0 pl-4 -top-5 px-1 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:-left-0 peer-focus:text-pink-400 peer-focus:text-sm">
              Your Name
            </label>
          </div>
          
          <div className="group relative">
            <input
              type="email"
              required
              className="w-full px-6 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg outline-none focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/20 transition-all duration-300 text-white placeholder-transparent peer"
              placeholder="Email Address"
            />
            <label className="absolute left-6 -top-3 px-1 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:-left-0 peer-focus:text-purple-400 peer-focus:text-sm">
              Email Address
            </label>
          </div>
          
          <div className="group relative">
            <textarea
              rows="5"
              required
              className="w-full px-6 py-4 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 transition-all duration-300 text-white placeholder-transparent peer resize-none"
              placeholder="Your Message"
            />
            <label className="absolute left-6 -top-3 px-1 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-5 peer-focus:-left-0 peer-focus:text-blue-400 peer-focus:text-sm">
              Your Message
            </label>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative z-10">Send Message</span>
        </button>
        </form>
        
        <div className="mt-6 text-center text-gray-400">
          <p>Or reach us directly at <span className="text-blue-300">therapyforall@gmail.com</span></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;