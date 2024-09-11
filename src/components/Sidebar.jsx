// import React from "react";
// import {
//   FaHome,
//   FaFire,
//   FaVideo,
//   FaHistory,
//   FaPlayCircle,
// } from "react-icons/fa";
// import { IoSubscriptions, IoLibrary } from "react-icons/io5";
// import { HiOutlineClock } from "react-icons/hi";

// const Sidebar = () => {
//   return (
//     <div className="fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-4 border-r border-gray-700">
//       {/* Sidebar Header */}
//       <div className="mb-4">
//         <span className="text-2xl font-bold">YouTube</span>
//       </div>

//       {/* Sidebar Links */}
//       <nav className="flex-grow">
//         <ul className="space-y-2">
//           <li>
//             <a
//               href="#"
//               className="flex items-center p-2 rounded-lg hover:bg-gray-700"
//             >
//               <FaHome className="text-xl" />
//               <span className="ml-4 text-lg">Home</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex items-center p-2 rounded-lg hover:bg-gray-700"
//             >
//               <FaFire className="text-xl" />
//               <span className="ml-4 text-lg">Trending</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex items-center p-2 rounded-lg hover:bg-gray-700"
//             >
//               <IoSubscriptions className="text-xl" />
//               <span className="ml-4 text-lg">Subscriptions</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex items-center p-2 rounded-lg hover:bg-gray-700"
//             >
//               <FaHistory className="text-xl" />
//               <span className="ml-4 text-lg">History</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex items-center p-2 rounded-lg hover:bg-gray-700"
//             >
//               <FaPlayCircle className="text-xl" />
//               <span className="ml-4 text-lg">Watch Later</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex items-center p-2 rounded-lg hover:bg-gray-700"
//             >
//               <IoLibrary className="text-xl" />
//               <span className="ml-4 text-lg">Library</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex items-center p-2 rounded-lg hover:bg-gray-700"
//             >
//               <HiOutlineClock className="text-xl" />
//               <span className="ml-4 text-lg">Your Videos</span>
//             </a>
//           </li>
//         </ul>
//       </nav>

//       {/* Sidebar Footer */}
//       <div className="mt-auto">
//         <a
//           href="#"
//           className="flex items-center p-2 rounded-lg hover:bg-gray-700"
//         >
//           <span className="text-lg">More</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-56 bg-gray-800 h-screen">
      <nav className="flex flex-col h-full p-4 space-y-6">
        <div className="text-xl font-bold text-white">YouTube</div>
        <ul className="space-y-2 pt-4">
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Trending
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Subscriptions
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Library
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              History
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Your videos
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
