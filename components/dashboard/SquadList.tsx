"use client";
import { db } from '../../firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

// Define SquadMember type
interface SquadMember {
  id: string;
  name: string;
  title: string;
}

interface SquadListProps {
  squad: SquadMember[];
  onDelete: (id: string) => void;
}

const SquadList: React.FC<SquadListProps> = ({ squad, onDelete }) => {
  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'squads', id));
      onDelete(id);
      toast.success('Squad member deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete squad member. Please try again.');
      console.error('Error deleting squad member: ', error);
    }
  };

  return (
    <div className="space-y-6">
      {squad.map((member) => (
        <div 
          key={member.id} 
          className="flex justify-between items-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div>
            <h3 className="text-lg font-bold">{member.name}</h3>
            <p className="text-sm">{member.title}</p>
          </div>
          <button
            onClick={() => handleDelete(member.id)}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg transition transform hover:scale-105"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default SquadList;
