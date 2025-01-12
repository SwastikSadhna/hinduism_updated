import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useContent } from '../Components/Bhakti/ContentContext';
import Sidebar from '../Components/Bhakti/SideBar';

export default function BhaktiLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const { activeCategory, setActiveCategory } = useContent();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar />
        
        <main className={`flex-1 p-6 mt-20 md:mt-0 ${isOpen ? 'ml-64' : ''}`}>
          <h1 className="text-3xl font-bold text-orange-600">Welcome to Sanatan</h1>
          <p className="mt-4 text-gray-600">Select a category from the sidebar to explore content.</p>
          
          {/* Render the selected content */}
          <div>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
