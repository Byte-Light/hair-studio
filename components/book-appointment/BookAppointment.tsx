"use client";
import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Toaster, toast } from "react-hot-toast";
import { db } from "../../firebase"; // Adjust the import path according to your project structure

interface SquadMember {
  id: string;
  name: string;
  imageUrl?: string;
}

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    squad: "",
  });
  const [squadMembers, setSquadMembers] = useState<SquadMember[]>([]);
  const [selectedSquad, setSelectedSquad] = useState<SquadMember | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Fetch squad members from Firestore
    const fetchSquadMembers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "squads"));
        const members = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as SquadMember[];
        setSquadMembers(members);
      } catch (error) {
        console.error("Error fetching squad members: ", error);
      }
    };

    fetchSquadMembers();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSquadSelect = (member: SquadMember) => {
    setSelectedSquad(member);
    setFormData({ ...formData, squad: member.id });
    setDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "appointments"), formData);
      toast.success("Appointment booked successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        squad: "",
      });
      setSelectedSquad(null);
    } catch (error) {
      toast.error("Failed to book appointment. Please try again.");
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-6">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Book an Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name*
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone*
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="relative">
            <label htmlFor="squad" className="block text-sm font-medium text-gray-700">
              Squad*
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-left"
              >
                {selectedSquad ? (
                  <div className="flex items-center space-x-2">
                    {selectedSquad.imageUrl && (
                      <img
                        src={selectedSquad.imageUrl}
                        alt={selectedSquad.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    )}
                    <span>{selectedSquad.name}</span>
                  </div>
                ) : (
                  "Select a squad member"
                )}
              </button>
              {dropdownOpen && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 max-h-60 overflow-y-auto">
                  {squadMembers.map((member) => (
                    <button
                      key={member.id}
                      type="button"
                      onClick={() => handleSquadSelect(member)}
                      className="w-full px-4 py-2 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      {member.imageUrl && (
                        <img
                          src={member.imageUrl}
                          alt={member.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      )}
                      <span>{member.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
