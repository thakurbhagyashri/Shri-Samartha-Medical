import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from 'react';

const AdminProfile = () => {

     const [userName, setUserName] = useState('');
     
    
    
      const toCamelCase = (name) => {
        return name
          .toLowerCase()
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      };
    
      useEffect(() => {
    
        const token = localStorage.getItem('token');
    
        if (token) {
          try {
    
            const decodedToken =jwtDecode(token);
            const name = decodedToken.sub || 'Guest'; // Replace 'name' with the correct field from your JWT
            setUserName(toCamelCase(name));
            
          } catch (error) {
            console.error('Error decoding JWT token:', error);
            setUserName('Guest');
          }
        } else {
          setUserName('Guest');
        }
      }, []);
  return (
    
       <div className="bg-gray-300 w-[12%] rounded-3xl flex flex-row p-2 items-end">
                  <div>
                    <p className="text-lg font-fira px-2 py-1">{userName}</p>
                  </div>
                  <div>
                    <img
                      src="https://www.w3schools.com/w3images/avatar2.png" // Fallback to placeholder image
                      alt="Profile"
                      className="h-8 w-8 rounded-full cursor-pointer border-e-black"
                    />
                  </div>
                </div>
  
  )
}

export default AdminProfile
