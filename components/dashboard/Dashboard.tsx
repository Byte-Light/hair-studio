"use client";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Firebase configuration (use the same config as in your BookAppointment component)
const firebaseConfig = {
  apiKey: "AIzaSyDKBNYbYN3DYiDCQP8P2N9AbMBPv1XT9nU",
  authDomain: "hair-studio-8df6a.firebaseapp.com",
  projectId: "hair-studio-8df6a",
  storageBucket: "hair-studio-8df6a.appspot.com",
  messagingSenderId: "1030034527743",
  appId: "1:1030034527743:web:4c183bdc1a8bbea85d83ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  squad: string;
}

const Dashboard = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const querySnapshot = await getDocs(collection(db, "appointments"));
      const appointmentsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Appointment[];
      setAppointments(appointmentsData);
    };

    fetchAppointments();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Appointment Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {appointments.map(appointment => (
          <div key={appointment.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{appointment.name}</h2>
            <p className="text-gray-600"><span className="font-medium">Email:</span> {appointment.email}</p>
            <p className="text-gray-600"><span className="font-medium">Phone:</span> {appointment.phone}</p>
            <p className="text-gray-600"><span className="font-medium">Date:</span> {appointment.date}</p>
            <p className="text-gray-600"><span className="font-medium">Time:</span> {appointment.time}</p>
            <p className="text-gray-600"><span className="font-medium">Squad:</span> {appointment.squad}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
