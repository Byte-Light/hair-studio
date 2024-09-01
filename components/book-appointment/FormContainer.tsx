// components/FormContainer.tsx
import React from "react";
import InputField from "./InputField";
import SquadDropdown from "./SquadDropdown";

interface SquadMember {
  id: string;
  name: string;
  imageUrl?: string;
}

interface FormContainerProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    squad: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  squadMembers: SquadMember[];
  selectedSquad: SquadMember | null;
  dropdownOpen: boolean;
  handleSquadSelect: (member: SquadMember) => void;
  toggleDropdown: () => void;
}

const FormContainer: React.FC<FormContainerProps> = ({
  formData,
  handleChange,
  handleSubmit,
  squadMembers,
  selectedSquad,
  dropdownOpen,
  handleSquadSelect,
  toggleDropdown,
}) => (
  <form onSubmit={handleSubmit} className="space-y-4">
    <InputField label="Name*" type="text" name="name" value={formData.name} required onChange={handleChange} />
    <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
    <InputField label="Phone*" type="tel" name="phone" value={formData.phone} required onChange={handleChange} />
    <InputField label="Date" type="date" name="date" value={formData.date} onChange={handleChange} />
    <InputField label="Time" type="time" name="time" value={formData.time} onChange={handleChange} />
    <SquadDropdown
      squadMembers={squadMembers}
      selectedSquad={selectedSquad}
      dropdownOpen={dropdownOpen}
      handleSquadSelect={handleSquadSelect}
      toggleDropdown={toggleDropdown}
    />
    <div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Book Now
      </button>
    </div>
  </form>
);

export default FormContainer;
