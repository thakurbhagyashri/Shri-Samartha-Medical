// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import ShoppingCart from '../ShoppingCart/ShoppingCart';
// import Upload from '../Upload/Upload';
// import './Nav.css';

// const Nav = () => {
//   const navigate = useNavigate();
//   const role = localStorage.getItem("role"); // Get the role from localStorage

//   const handleLogin = () => {
//     navigate("/login");
//   };

//   const handleSignup = () => {
//     navigate("/signup");
//   };

//   const handleAdmin = () => {
//     navigate("/admin");
//   };

//   return (
//     <nav className="nav-links font-serif font-medium text-lg ">
//       {/* Render Home, About Us, Services, Contact, Admin for Admin */}
//       {role === "admin" ? (
//         <>
//           <Link to="">Home</Link>
//           <Link to="/about">About Us</Link>
//           <div className="nav-item-with-submenu">
//             <a href="#services">
//               Services <FontAwesomeIcon icon={faAngleDown} />
//             </a>
//             <div className="submenu">
//               <a href="#medicine">Medicine</a>
//               <a href="#wellness">Wellness</a>
//               <a href="#labtest">Lab Test</a>
//               <a href="#beauty">Beauty</a>
//               <a href="#healthcorner">Health Corner</a>
//             </div>
//           </div>
//           <Link to="/contact">Contact Us</Link>

//           {/* Admin button */}
//           <button
//             className="hover:font-bold hover:px-[18px] mr-5 p-2 rounded-md"
//             onClick={handleAdmin}
//           >
//             Admin
//           </button>
//         </>
//       ) : (
//         <>
//           {/* Render full navigation if user is not admin */}
//           <Link to="">Home</Link>
//           <Link to="/about">About Us</Link>
//           <div className="nav-item-with-submenu">
//             <a href="#services">
//               Services <FontAwesomeIcon icon={faAngleDown} />
//             </a>
//             <div className="submenu">
//               <a href="#medicine">Medicine</a>
//               <a href="#wellness">Wellness</a>
//               <a href="#labtest">Lab Test</a>
//               <a href="#beauty">Beauty</a>
//               <a href="#healthcorner">Health Corner</a>
//             </div>
//           </div>
//           <Link to="/contact">Contact Us</Link>

//           <Upload />
//           <ShoppingCart />

//           {/* Login and Signup buttons */}
//           <div className="flex">
//             <button
//               className="hover:font-bold hover:px-[18px] mr-5 px-5"
//               onClick={handleLogin}
//             >
//               Login
//             </button>
//             <button
//               className="hover:font-bold hover:px-[18px] mr-5 px-5"
//               onClick={handleSignup}
//             >
//               Sign Up
//             </button>
//           </div>
//         </>
//       )}
//     </nav>
//   );
// };

// export default Nav;

//14-01-2025 00:07
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../CheckOutPage/AuthContext'; // Update with correct path
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Upload from '../Upload/Upload';
import './Nav.css';

const Nav = () => {
  const navigate = useNavigate();
  const { isLoggedIn, role, profilePic, logout } = useAuth(); // Get role from AuthContext
  console.log('Role:', role);

  // Handle Login Button Click
  const handleLogin = () => {
    navigate('/login');
  };

  // Handle Signup Button Click
  const handleSignup = () => {
    navigate('/signup');
  };

  // Handle Logout Button Click
  const handleLogout = () => {
    logout(); // Call the logout function from context to clear user state
    navigate('/'); // Redirect to homepage after logout
  };

  // Handle Admin Button Click
  const handleAdmin = () => {
    navigate('/admin');
  };

  return (
    <nav className="nav-links font-serif font-medium text-lg">
      {/* Check if role is 'admin' */}
      {role === 'admin' ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <div className="nav-item-with-submenu">
            <a href="#services">
              Services <FontAwesomeIcon icon={faAngleDown} />
            </a>
            <div className="submenu">
              <a href="#medicine">Medicine</a>
              <a href="#wellness">Wellness</a>
              <a href="#labtest">Lab Test</a>
              <a href="#beauty">Beauty</a>
              <a href="#healthcorner">Health Corner</a>
            </div>
          </div>
          <Link to="/contact">Contact Us</Link>
          <button
            className="hover:font-bold hover:px-[18px] mr-5 p-2 rounded-md"
            onClick={handleAdmin}
          >
            Admin
          </button>
        </>
      ) : role === 'user' ? (
        // Check if role is 'user'
        <>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <div className="nav-item-with-submenu">
            <a href="#services">
              Services <FontAwesomeIcon icon={faAngleDown} />
            </a>
            <div className="submenu">
              <a href="#medicine">Medicine</a>
              <a href="#wellness">Wellness</a>
              <a href="#labtest">Lab Test</a>
              <a href="#beauty">Beauty</a>
              <a href="#healthcorner">Health Corner</a>
            </div>
          </div>
          <Upload />
          <ShoppingCart />
          {/* <WishlistLogo/> */}
          <Link to="/wishlist" className="flex items-centertransition duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4379/4379925.png" // Link to Flaticon wishlist icon
              alt="Wishlist"
              width="28"
              height="28"
              className="mr-2"
            />
            Wishlist
          </Link>

          <Link to="/contact">Contact Us</Link>
          {/* If logged in, show profile picture, logout, and profile link */}
          {isLoggedIn ? (
            <div className="flex items-center">
              <img
                src={profilePic || 'https://www.w3schools.com/w3images/avatar2.png'} // Fallback to placeholder image
                alt="Profile"
                className="h-8 w-8 rounded-full cursor-pointer"
                onClick={() => navigate('/profile')}
              />
              <button
                className="ml-4"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex">
              <button
                className="hover:font-bold hover:px-[18px] mr-5 px-5"
                onClick={handleLogin}
              >
                Login
              </button>
              <button
                className="hover:font-bold hover:px-[18px] px-5"
                onClick={handleSignup}
              >
                Signup
              </button>
            </div>
          )}
        </>
      ) : (
        // Default case (not logged in, or role not defined)
        <>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <div className="nav-item-with-submenu">
            <a href="#services">
              Services <FontAwesomeIcon icon={faAngleDown} />
            </a>
            <div className="submenu">
              <a href="#medicine">Medicine</a>
              <a href="#wellness">Wellness</a>
              <a href="#labtest">Lab Test</a>
              <a href="#beauty">Beauty</a>
              <a href="#healthcorner">Health Corner</a>
            </div>
          </div>
          <Upload />
          <ShoppingCart />

          <Link to="/contact">Contact Us</Link>
          {/* Show login/signup if not logged in */}
          <div className="flex">
            <button
              className="hover:font-bold hover:px-[18px] mr-5 px-5"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="hover:font-bold hover:px-[18px] px-5"
              onClick={handleSignup}
            >
              Signup
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;