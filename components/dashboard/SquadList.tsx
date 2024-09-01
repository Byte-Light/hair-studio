"use client";
import { useState } from 'react';
import { db } from '../../firebase';
import { doc, deleteDoc, updateDoc, getDoc } from 'firebase/firestore';
import { getStorage, ref, deleteObject } from 'firebase/storage'; // Import Firebase Storage functions
import toast from 'react-hot-toast';

// Define SquadMember type
interface SquadMember {
  id: string;
  name: string;
  title: string;
  imageUrl?: string; // Optional imageUrl field
}

interface SquadListProps {
  squad: SquadMember[];
  onDelete: (id: string) => void;
}

const SquadList: React.FC<SquadListProps> = ({ squad, onDelete }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedName, setEditedName] = useState('');
  const [editedTitle, setEditedTitle] = useState('');

  const handleDelete = async (id: string) => {
    try {
      // Retrieve the squad member document to get the imageUrl
      const memberDoc = await getDoc(doc(db, 'squads', id));
      const memberData = memberDoc.data();

      if (memberData?.imageUrl) {
        // Delete the image from Firebase Storage
        const storage = getStorage();
        const imageRef = ref(storage, memberData.imageUrl);
        await deleteObject(imageRef);
      }

      // Delete the document from Firestore
      await deleteDoc(doc(db, 'squads', id));
      onDelete(id);
      toast.success('Squad member deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete squad member. Please try again.');
      console.error('Error deleting squad member: ', error);
    }
  };

  const handleEdit = (member: SquadMember) => {
    setEditingId(member.id);
    setEditedName(member.name);
    setEditedTitle(member.title);
  };

  const handleUpdate = async (id: string) => {
    try {
      const memberDoc = doc(db, 'squads', id);
      await updateDoc(memberDoc, { name: editedName, title: editedTitle });
      toast.success('Squad member updated successfully!');
      setEditingId(null); // Reset editing state
    } catch (error) {
      toast.error('Failed to update squad member. Please try again.');
      console.error('Error updating squad member: ', error);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      {squad.map((member) => (
        <div 
          key={member.id} 
          className="flex justify-between items-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          {editingId === member.id ? (
            <div className="flex-grow flex items-center space-x-4">
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                className="bg-white text-black px-3 py-2 rounded-lg w-1/3 focus:outline-none"
              />
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="bg-white text-black px-3 py-2 rounded-lg w-1/3 focus:outline-none"
              />
              <button
                onClick={() => handleUpdate(member.id)}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg transition transform hover:scale-105"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg transition transform hover:scale-105"
              >
                Cancel
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center space-x-4">
                {member.imageUrl && (
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
                <div>
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm">{member.title}</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEdit(member)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-lg transition transform hover:scale-105"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(member.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg transition transform hover:scale-105"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default SquadList;
