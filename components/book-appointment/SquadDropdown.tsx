// components/SquadDropdown.tsx
import React from "react";

interface SquadMember {
  id: string;
  name: string;
  imageUrl?: string;
}

interface SquadDropdownProps {
  squadMembers: SquadMember[];
  selectedSquad: SquadMember | null;
  dropdownOpen: boolean;
  handleSquadSelect: (member: SquadMember) => void;
  toggleDropdown: () => void;
}

const SquadDropdown: React.FC<SquadDropdownProps> = ({
  squadMembers,
  selectedSquad,
  dropdownOpen,
  handleSquadSelect,
  toggleDropdown,
}) => (
  <div className="relative">
    <label htmlFor="squad" className="block text-sm font-medium text-gray-700">
      Squad*
    </label>
    <button
      type="button"
      onClick={toggleDropdown}
      className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-left"
    >
      {selectedSquad ? (
        <div className="flex items-center space-x-2">
          {selectedSquad.imageUrl && (
            <img src={selectedSquad.imageUrl} alt={selectedSquad.name} className="w-8 h-8 rounded-full object-cover" />
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
              <img src={member.imageUrl} alt={member.name} className="w-8 h-8 rounded-full object-cover" />
            )}
            <span>{member.name}</span>
          </button>
        ))}
      </div>
    )}
  </div>
);

export default SquadDropdown;
