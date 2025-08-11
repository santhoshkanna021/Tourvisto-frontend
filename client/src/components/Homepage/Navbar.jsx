import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const displayName = "User";
  const profilePicture = "/public/image.png"; // fallback/static image
  const emailTooltip = "user@example.com"; // static tooltip

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      // Clear auth state here if needed (e.g., localStorage.removeItem("token"))
      navigate("/"); // redirect to login page
    }
  };

  return (
    <nav className="absolute top-0 w-full flex justify-between items-center px-10 py-6 z-10">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img src="/fi_2200326.svg" alt="logo" className="w-6 h-6 ml-13" />
        <span className="text-2xl text-black font-bold">Tourvisto</span>
      </div>

      {/* Right: Static User Info */}
      <div className="flex items-center gap-5 justify-end">
        <span className="text-black font-figtree" title={emailTooltip}>
          {displayName}
        </span>

        <img
          src={profilePicture}
          alt="profile"
          className="w-10 h-10 rounded-full border-2 border-white"
          onError={(e) => {
            e.target.src = '/public/image.png';
          }}
        />

        <button
          onClick={handleLogout}
          className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200 mr-13"
          title="Logout"
        >
          <img src="/public/logout.svg" alt="logout" className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
