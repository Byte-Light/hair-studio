"use client";
import { useState, useEffect } from 'react';
import { db, storage } from '../../firebase'; // Import Firebase storage
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import storage functions
import SquadList from './SquadList';
import { Toaster, toast } from 'react-hot-toast';
import Sidebar from './Sidebar'; // Import Sidebar component
import Schedule from './Schedule';

// Define SquadMember type
interface SquadMember {
  id: string;
  name: string;
  title: string;
  imageUrl?: string; // Optional imageUrl field
}

const SquadComponent = () => {
  const [squad, setSquad] = useState<SquadMember[]>([]);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState<File | null>(null); // State to hold the selected image
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
      let imageUrl = '';

      if (image) {
        // Upload image to Firebase Storage
        const storageRef = ref(storage, `squad-images/${image.name}`);
        await uploadBytes(storageRef, image);
        imageUrl = await getDownloadURL(storageRef);
      }

      const newMember = { name, title, imageUrl };
      try {
        const docRef = await addDoc(collection(db, 'squads'), newMember);
        setSquad([...squad, { id: docRef.id, ...newMember }]);
        setName('');
        setTitle('');
        setImage(null); // Clear the image input
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
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 p-10 bg-gray-100">
        <h1 className="text-4xl font-semibold text-gray-800 mb-10">
          {activeTab === 'Settings' ? 'Settings' : 'Schedule'}
        </h1>

        {/* Conditionally render content based on active tab */}
        {activeTab === 'Settings' ? (
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
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
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
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8">
            {/* Schedule content goes here */}
            <Schedule />
          </div>
        )}
      </div>
    </div>
  );
};

export default SquadComponent;
