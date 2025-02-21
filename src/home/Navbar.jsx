import  { useContext, useState,  } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

  return (
    <div className=" max-w-7xl mx-auto  p-4 flex justify-between items-center">
    {/* Website Name */}
    <div className="text-xl font-bold">Taskify</div>
    
    {/* User Login Button or Image */}
    {user ? (
                <div className="flex items-center gap-1 md:gap-4 lg:gap-4">
                    {user.photoURL && (
                        <div className="relative">
                            <img
                                src={user.photoURL}
                                alt="Profile"
                                className="w-12 h-12 rounded-full cursor-pointer"
                                onClick={toggleDropdown}
                            />

                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg p-3 z-[100]">
                                    <span className="block text-center text-sm font-medium text-gray-700">{user.displayName}</span>
                                   
                                    <button
                                        onClick={handleSignOut}
                                        className="w-full px-4 py-2 mt-2 bg-indigo-700 text-white rounded hover:bg-indigo-700"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex items-center gap-4">
                    <Link to="/login">
                        <button className="py-2 px-3 text-black text-xl font-medium rounded-xl border-2 border-blue-800 ">
                            Login
                        </button>
                    </Link>
                </div>
            )}
  </div>
  );
};

export default Navbar;
