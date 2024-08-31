"use client";
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import SquadList from './SquadList';
import { Toaster, toast } from 'react-hot-toast';
import { FiSettings, FiCalendar } from 'react-icons/fi';

// Define SquadMember type
interface SquadMember {
  id: string;
  name: string;
  title: string;
}

const SquadComponent = () => {
  const [squad, setSquad] = useState<SquadMember[]>([]);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [activeTab, setActiveTab] = useState('Settings'); // Default tab

  useEffect(() => {
    const fetchSquad = async () => {
      const querySnapshot = await getDocs(collection(db, 'squads'));
      const squadData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as SquadMember[];
      setSquad(squadData);
    };

    fetchSquad();
  }, []);

  const handleAddSquad = async () => {
    if (name && title) {
      const newMember = { name, title };
      try {
        const docRef = await addDoc(collection(db, 'squads'), newMember);
        setSquad([...squad, { id: docRef.id, ...newMember }]);
        setName('');
        setTitle('');
        toast.success('Squad member added successfully!');
      } catch (error) {
        toast.error('Failed to add squad member. Please try again.');
        console.error('Error adding squad member: ', error);
      }
    }
  };

  const handleDeleteSquad = (id: string) => {
    setSquad(squad.filter(member => member.id !== id));
  };

  return (
    <div className="min-h-screen flex">
      <Toaster position="top-right" />
      
      {/* Sidebar */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 w-64 p-6 text-white flex flex-col">
        <h2 className="text-3xl font-bold mb-8">Dashboard</h2>
        <nav className="flex flex-col space-y-4">
          <button
            onClick={() => setActiveTab('Schedule')}
            className={`flex items-center py-2 px-4 rounded-lg transition ${
              activeTab === 'Schedule' ? 'bg-gray-700' : 'hover:bg-gray-700'
            }`}
          >
            <FiCalendar className="mr-3" />
            <span>Schedule</span>
          </button>
          <button
            onClick={() => setActiveTab('Settings')}
            className={`flex items-center py-2 px-4 rounded-lg transition ${
              activeTab === 'Settings' ? 'bg-gray-700' : 'hover:bg-gray-700'
            }`}
          >
            <FiSettings className="mr-3" />
            <span>Settings</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 bg-gray-100">
        <h1 className="text-4xl font-semibold text-gray-800 mb-10">
          {activeTab === 'Settings' ? 'Settings' : 'Schedule'}
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Squad</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            onClick={handleAddSquad}
            className="mt-6 w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition"
          >
            Add Squad
          </button>

          {/* Display Squad List */}
          <div className="mt-8">
            <SquadList squad={squad} onDelete={handleDeleteSquad} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquadComponent;
