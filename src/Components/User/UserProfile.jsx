import React, { useState } from 'react';
import CustomerSupport from './CustomerSupport';
import OrderHistory from './OrderHistory';
import OrderStatus from './OrderStatus';
import PaymentMethods from './PaymentMethods';
import PharmacyServices from './PharmacyServices';
import PrescriptionManagement from './PrescriptionManagement';
import SecuritySettings from './SecuritySettings';
import SideNav from './SideNav';
import UserAccount from './UserAccount';

const UserProfile = () => {
  // Initialize userInfo properly
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+123456789",
    address: "123 Pharmacy St, City, State, 12345",
  });

  const [orderHistory, setOrderHistory] = useState([
    { id: 1, date: "2025-01-01", status: "Delivered", total: "$50", items: ["Medicine A", "Medicine B"] },
    { id: 2, date: "2025-01-05", status: "Shipped", total: "$30", items: ["Medicine C"] },
  ]);

  const [prescriptions, setPrescriptions] = useState([
    { id: 1, doctor: "Dr. Smith", medicine: "Medicine A", uploaded: "2025-01-01" },
  ]);

  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, last4: "1234", expiry: "12/2025" },
  ]);

  const [securitySettings, setSecuritySettings] = useState({
    twoFactor: true,
  });
  console.log(userInfo); // Add this to check if it's being passed correctly

  return (
    <div className="flex flex-col md:flex-row font-noto">
      {/* Sidebar */}
      <SideNav />

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-3xl font-semibold mb-6">My Account</h1>

        {/* Personal Information Section */}
        <UserAccount userInfo={userInfo} setUserInfo={setUserInfo} />

        {/* Other Sections */}
        <OrderHistory orders={orderHistory} />
        <OrderStatus />
        <PrescriptionManagement prescriptions={prescriptions} />
        <PaymentMethods paymentMethods={paymentMethods} />
        <PharmacyServices />
        <SecuritySettings securitySettings={securitySettings} setSecuritySettings={setSecuritySettings} />
        <CustomerSupport />
      </div>
    </div>
  );
};

export default UserProfile;
