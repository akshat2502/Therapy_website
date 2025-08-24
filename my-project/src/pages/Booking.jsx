// src/pages/Booking.jsx
import React, { useState } from 'react';
import { User, Mail, Calendar, NotebookText } from 'lucide-react';
import { auth } from '../firebase/config';

const Booking = () => {
  auth.currentUser.getIdTokenResult().then(token => {
  console.log(token.claims.role); // should print "admin"
});

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    date: '',
    time: null,
    notes: ''
  });

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '12:00 PM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleTimeClick = (time) => {
    setFormState(prevState => ({
      ...prevState,
      time: time
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formState);
    // You would typically send this data to an API
  };

  return (
    <div className="min-h-screen p-8 bg-gray-500 flex items-center justify-center">
      <div className="w-full max-w-4xl -mt-6 bg-white rounded-xl shadow-2xl p-8 flex gap-28">
        <div className="text-center mb-8 flex-col justify-center items-center pt-52 pl-4">
          <h1 className="text-4xl font-extrabold text-blue-700">Book a Session 🗓️</h1>
          <p className="text-gray-600 mt-2 text-sm pr-10">Fill out the form below to secure your spot.</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 sr-only">Full Name</label>
            <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200">
              <User className="h-5 w-5 text-gray-400 ml-4" />
              <input
                type="text"
                id="name"
                className="block w-full py-3 px-4 pl-12 rounded-lg bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none"
                placeholder="Full Name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 sr-only">Email Address</label>
            <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200">
              <Mail className="h-5 w-5 text-gray-400 ml-4" />
              <input
                type="email"
                id="email"
                className="block w-full py-3 px-4 pl-12 rounded-lg bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none"
                placeholder="you@example.com"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="date" className="block text-sm font-semibold text-gray-700 sr-only">Preferred Date</label>
            <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200">
              <Calendar className="h-5 w-5 text-gray-400 ml-4" />
              <input
                type="date"
                id="date"
                className="block w-full py-3 px-4 pl-12 rounded-lg bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none"
                value={formState.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Time Slot Selection */}
          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {timeSlots.map(time => (
                <button
                  key={time}
                  type="button"
                  onClick={() => handleTimeClick(time)}
                  className={`py-3 px-4 rounded-lg font-medium transition-all duration-200
                    ${formState.time === time
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-blue-200'
                    }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <label htmlFor="notes" className="block text-sm font-semibold text-gray-700">Additional Notes</label>
            <div className="relative mt-1">
              <NotebookText className="absolute top-4 left-4 h-5 w-5 text-gray-400" />
              <textarea
                id="notes"
                rows="3"
                className="block w-full rounded-lg border border-gray-300 shadow-sm py-3 px-4 pl-12 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200"
                placeholder="Anything you'd like the therapist to know before the session..."
                value={formState.notes}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;