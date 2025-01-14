import React, { useContext } from "react";
import { MyContext } from '../MyContext';

const PaymentPage = () => {
  const { cart, totalPrice } = useContext(MyContext);
  console.log("Cart:", cart);
  console.log("Total Price:", totalPrice);
  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-2/3 p-6 border-r">
          <h2 className="text-2xl font-bold mb-6">Pay AspireCo</h2>
          <h3 className="text-xl font-semibold mb-4">₹{totalPrice}</h3>

          {/* Payment Methods */}
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between bg-gray-100 p-4 rounded-lg border focus:ring focus:ring-blue-500">
              <span className="flex items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Visa_Logo.png"
                  alt="Card"
                  className="w-6 h-6 mr-4"
                />
                Card
              </span>
              <span>Visa, MasterCard, etc.</span>
            </button>
          </div>

          {/* Personal Information */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <p className="text-gray-600">Joe Bloggs, joe.bloggs@example.com</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3 p-6 bg-gray-50">
          <h3 className="text-xl font-bold mb-4">Summary</h3>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    Quantity {item.quantity} • €{item.discountMrp} each
                  </p>
                </div>
                <p className="font-semibold">
                  ₹{item.discountMrp * item.quantity}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between font-bold text-lg">
            <span>Total order amount</span>
            <span>₹{totalPrice}</span>
          </div>
        </div>
      </div>

      {/* Pay Button */}
      <div className="mt-6 max-w-7xl mx-auto text-center">
        <button className="w-full lg:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700">
          Pay ₹{totalPrice}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
