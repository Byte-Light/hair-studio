import React from 'react';
import { FiSettings, FiCalendar } from 'react-icons/fi';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
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
  );
};

export default Sidebar;
