// components/BookAppointment.tsx
"use client";
import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Toaster, toast } from "react-hot-toast";
import { db } from "../../firebase"; // Adjust the import path according to your project structure
import FormContainer from "./FormContainer";

interface SquadMember {
  id: string;
  name: string;
  imageUrl?: string;
}

const BookAppointment: React.FC = () => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    squad: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [squadMembers, setSquadMembers] = useState<SquadMember[]>([]);
  const [selectedSquad, setSelectedSquad] = useState<SquadMember | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "appointments"), formData);
      toast.success("Appointment booked successfully!");
      setFormData(initialFormData);
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
        <FormContainer
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          squadMembers={squadMembers}
          selectedSquad={selectedSquad}
          dropdownOpen={dropdownOpen}
          handleSquadSelect={handleSquadSelect}
          toggleDropdown={toggleDropdown}
        />
      </div>
    </div>
  );
};

export default BookAppointment;
