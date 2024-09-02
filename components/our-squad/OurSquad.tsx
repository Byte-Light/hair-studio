"use client"
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

interface SquadMember {
  name: string;
  title: string;
  imageUrl: string;
}

const OurSquad: React.FC = () => {
  const [squadMembers, setSquadMembers] = useState<SquadMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSquadMembers = async () => {
      const squadCollection = collection(db, "squads");
      const squadSnapshot = await getDocs(squadCollection);
      const squadList = squadSnapshot.docs.map(doc => doc.data() as SquadMember);
      setSquadMembers(squadList);
      setLoading(false);
    };

    fetchSquadMembers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Our Squad
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {squadMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-64 object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
              <p className="text-gray-400 mt-2">{member.title}</p>
              <button className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSquad;
