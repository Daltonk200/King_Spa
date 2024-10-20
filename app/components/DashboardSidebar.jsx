import { FaBox, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';

const DashboardSidebar = () => {
  return (
    <div className="bg-pink-light min-h-screen p-4 w-64 flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-8">
          <img
            src="/profile-pic-placeholder.png"
            alt="Profile"
            className="w-12 h-12 rounded-full mr-3"
          />
          <div>
            <p className="text-gray-800 font-semibold">Bless B</p>
            <p className="text-gray-500 text-sm">Administrator</p>
          </div>
        </div>
        <nav className="space-y-4">
          <a href="#" className="flex items-center text-gray-700 hover:text-pink-dark">
            <FaBox className="mr-2" /> Product Management
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:text-pink-dark font-bold">
            <FaCalendarAlt className="mr-2" /> Order Management
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:text-pink-dark">
            <FaCalendarAlt className="mr-2" /> Customer Appointment
          </a>
        </nav>
      </div>
      <button className="flex items-center text-red-600 hover:text-red-800 mt-8">
        <FaSignOutAlt className="mr-2" /> Log out
      </button>
    </div>
  );
};

export default DashboardSidebar;
