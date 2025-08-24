import { useEffect, useState } from "react";
import { PlusCircle, Trash2 } from "lucide-react";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../contexts/AuthContext"; // Import useAuth hook

const Admin = () => {
  const [date, setDate] = useState('');
  const [timeSlots, setTimeSlots] = useState(['09:00 AM']); // Start with one default slot
  const [status, setStatus] = useState('');

  // Use the Firebase instances from AuthContext
  const { db, isAuthReady } = useAuth();

  // Handle adding a new time slot input field
  const handleAddTimeSlot = () => {
    setTimeSlots([...timeSlots, '']);
  };

  // Handle changes to a specific time slot input
  const handleTimeSlotChange = (index, value) => {
    const newTimeSlots = [...timeSlots];
    newTimeSlots[index] = value;
    setTimeSlots(newTimeSlots);
  };

  // Handle removing a time slot input field
  const handleRemoveTimeSlot = (index) => {
    const newTimeSlots = [...timeSlots];
    newTimeSlots.splice(index, 1);
    setTimeSlots(newTimeSlots);
  };

  // Handle form submission to save data to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!db || !isAuthReady) {
      setStatus('Firebase not ready. Please wait...');
      return;
    }

    if (!date) {
      setStatus('Please select a date.');
      return;
    }

    // Filter out any empty time slots before saving
    const validTimes = timeSlots.filter(t => t.trim() !== '');

    if (validTimes.length === 0) {
      setStatus('Please add at least one valid time slot.');
      return;
    }

    try {
      // Get the unique app ID from the global environment
      const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
      
      // Create a document reference in the public 'availability' collection
      const availDocRef = doc(db, `/artifacts/${appId}/public/data/availability`, date);

      // Save the time slots to Firestore, merging with any existing data
      await setDoc(availDocRef, { times: validTimes }, { merge: true });
      
      setStatus(`Availability for ${date} has been updated successfully!`);
      // Reset the form fields
      setDate('');
      setTimeSlots(['09:00 AM']);
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus("Failed to add availability. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl p-8 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-blue-700">Admin Panel</h1>
        <p className="text-gray-600 mt-2">Manage available dates and time slots.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">Select Date</label>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200">
            <input
              type="date"
              id="date"
              className="block w-full py-3 px-4 rounded-lg bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Time Slots</label>
          <div className="space-y-3">
            {timeSlots.map((time, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  className="flex-grow py-2 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="e.g., 09:00 AM"
                  value={time}
                  onChange={(e) => handleTimeSlotChange(index, e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveTimeSlot(index)}
                  className="p-2 text-red-600 hover:text-red-800 transition-colors"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={handleAddTimeSlot}
            className="mt-4 w-full flex items-center justify-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition-all duration-200"
          >
            <PlusCircle className="h-5 w-5" />
            <span>Add Time Slot</span>
          </button>
        </div>
        
        {status && (
          <p className={`text-center font-medium ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </p>
        )}

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save Availability
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin;