import React, { useState } from "react";

const AddProductPage = () => {
  const [formData, setFormData] = useState({
    image: null,
    quantity: "",
    price: "",
    discount: "",
    companyName: "",
    medicineName: "",
    minAge: "",
    maxAge: "",
    realMRP: "",
    discountMRP: "",
    description: "",
    comments: "",
    category: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await fetch(
        "http://localhost:8080/api/product-catalogue/",
        {
          method: "POST",
          body: data,
        }
      );

      if (response.ok) {
        setMessage("Product added successfully!");
        setFormData({
          image: null,
          quantity: "",
          price: "",
          discount: "",
          companyName: "",
          medicineName: "",
          minAge: "",
          maxAge: "",
          realMRP: "",
          discountMRP: "",
          category: "",
          description: "",
          comments: ""
          
        });
      } else {
        setMessage("Failed to add product. Please try again.");
      }
    } catch (error) {
      setMessage("Error occurred: " + error.message);
    }
  };

  return (
    // <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
    //   <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8 font-serif">
    //     <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
    //       Add Product
    //     </h1>
    //     <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
    //       {/* File Upload */}
    //       <div>
    //         <label className="block text-sm font-medium text-gray-700">Upload Image</label>
    //         <input
    //           type="file"
    //           name="image"
    //           onChange={handleChange}
    //           className="mt-1 block w-full border rounded-lg py-2 px-3 text-gray-700 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
    //           required
    //         />
    //       </div>

    //       {/* Input Fields */}
    //       <div className="grid grid-cols-2 gap-4">
    //       <label className="block text-gray-700 text-sm">Quantity</label>
    //         <input
    //           type="number"
    //           name="quantity"
    //           placeholder="Quantity"
    //           value={formData.quantity}
    //           onChange={handleChange}
    //           className="block w-full border rounded-lg py-2 px-3 text-gray-700 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
    //           required
    //         />
    //         <input
    //           type="number"
    //           name="price"
    //           placeholder="Price"
    //           value={formData.price}
    //           onChange={handleChange}
    //           className="block w-full border rounded-lg py-2 px-3 text-gray-700 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
    //           required
    //         />
    //       </div>

    //       <div className="grid grid-cols-2 gap-4">
    //         <input
    //           type="number"
    //           name="discount"
    //           placeholder="Discount"
    //           value={formData.discount}
    //           onChange={handleChange}
    //           className="block w-full border rounded-lg py-2 px-3 text-gray-700 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
    //           required
    //         />
    //         <input
    //           type="text"
    //           name="companyName"
    //           placeholder="Company Name"
    //           value={formData.companyName}
    //           onChange={handleChange}
    //           className="block w-full border rounded-lg py-2 px-3 text-gray-700 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
    //           required
    //         />
    //       </div>

    //       <div className="grid grid-cols-2 gap-4">
    //         <input
    //           type="text"
    //           name="medicineName"
    //           placeholder="Medicine Name"
    //           value={formData.medicineName}
    //           onChange={handleChange}
    //           className="block w-full border rounded-lg py-2 px-3 text-gray-700 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
    //           required
    //         />
    //         <input
    //           type="number"
    //           name="minAge"
    //           placeholder="Min Age"
    //           value={formData.minAge}
    //           onChange={handleChange}
    //           className="block w-full border rounded-lg py-2 px-3 text-gray-700 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
    //           required
    //         />
    //       </div>

    //       <div className="grid grid-cols-2 gap-4">
    //         <input
    //           type="number"
    //           name="maxAge"
    //           placeholder="Max Age"
    //           value={formData.maxAge}
    //           onChange={handleChange}
    //           className="block w-full border rounded-lg py-2 px-3 text-gray-700 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
    //           required
    //         />
    //         <input
    //           type="number"
    //           name="realMRP"
    //           placeholder="Real MRP"
    //           value={formData.realMRP}
    //           onChange={handleChange}
    //           className="block w-full border rounded-lg py-2 px-3 text-gray-700 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
    //           required
    //         />
    //       </div>

    //       <input
    //         type="number"
    //         name="discountMRP"
    //         placeholder="Discount MRP"
    //         value={formData.discountMRP}
    //         onChange={handleChange}
    //         className="block w-full border rounded-lg py-2 px-3 text-gray-700 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
    //         required
    //       />

    //       <textarea
    //         name="description"
    //         placeholder="Description"
    //         value={formData.description}
    //         onChange={handleChange}
    //         rows="3"
    //         className="block w-full border rounded-lg py-2 px-3 text-gray-700 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
    //         required
    //       ></textarea>

    //       <textarea
    //         name="comments"
    //         placeholder="Comments"
    //         value={formData.comments}
    //         onChange={handleChange}
    //         rows="2"
    //         className="block w-full border rounded-lg py-2 px-3 text-gray-700 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
    //         required
    //       ></textarea>

    //       <input
    //         type="text"
    //         name="category"
    //         placeholder="Category"
    //         value={formData.category}
    //         onChange={handleChange}
    //         className="block w-full border rounded-lg py-2 px-3 text-gray-700 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
    //         required
    //       />

    //       {/* Submit Button */}
    //       <button
    //         type="submit"
    //         className="w-full py-2 px-4 bg-green-400 text-white  rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
    //       >
    //         Add Product
    //       </button>
    //     </form>

    //     {message && (
    //       <div
    //         className="mt-4 p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg text-center"
    //         role="alert"
    //       >
    //         {message}
    //       </div>
    //     )}
    //   </div>
    // </div>

    <div>
      <section className="flex flex-col items-center pt-6 font-custom">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-3xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center  p-2 bg-[#005689] rounded-md  font-thin leading-tight tracking-tight text-white md:text-2xl dark:text-white">
              {" "}
              Add Product
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" method="POST">
              <div>
                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                  Image
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  className="mt-1 block w-full border border-[#007cb9] rounded-lg py-2 px-3 text-gray-700 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="grid grid-flow-col">
                <div>
                  <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="bg-gray-50 border border-[#007cb9] text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                  />
                </div>
                <div className="pl-2">
                  <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="bg-gray-50 border border-[#007cb9] text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                  />
                </div>
                <div className="pl-2">
                  <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                    Discount
                  </label>
                  <input
                    type="number"
                    name="discount"
                    value={formData.discount}
                    onChange={handleChange}
                    className="bg-gray-50 border border-[#007cb9] text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <div className="grid grid-flow-col">
                <div className="pr-1">
                  <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="bg-gray-50 border border-[#007cb9] text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ex. Cipla"
                    required
                  />
                </div>
                <div className="pl-1">
                  <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                    Medicine Name
                  </label>
                  <input
                    type="text"
                    name="medicineName"
                    value={formData.medicineName}
                    onChange={handleChange}
                    className="bg-gray-50 border border-[#007cb9] text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ex. Dolo"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-flow-col">
              <div className="pr-1">
                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                  Minimum Age
                </label>
                <input
                  type="number"
                  name="minAge"
                  value={formData.minAge}
                  onChange={handleChange}
                  className="bg-gray-50 border border-[#007cb9] text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div className="pl-1">
                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                  Maximam Age
                </label>
                <input
                  type="number"
                  name="maxAge"
                  value={formData.maxAge}
                  onChange={handleChange}
                  className="bg-gray-50 border border-[#007cb9] text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              </div>
              <div className="grid grid-flow-col">
              <div className="pr-1">
                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                  Real Mrp
                </label>
                <input
                  type="number"
                  name="realMrp"
                  value={formData.realMrp}
                  onChange={handleChange}
                  className="bg-gray-50 border border-[#007cb9] text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div className="pl-1">
                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                  Discount Mrp
                </label>
                <input
                  type="number"
                  name="discountMrp"
                  value={formData.discountMrp}
                  onChange={handleChange}
                  className="bg-gray-50 border border-[#007cb9] text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              </div>
              <div>
                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="bg-gray-50 border border-[#007cb9] text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                  Description
                </label>
                <textarea
                  rows="5"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="bg-gray-50 border border-[#007cb9] text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-[#007cb9] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Description....."
                  required
                ></textarea>
              </div>
              <div>
                <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                  Comments
                </label>
                <textarea
                  rows="3"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  className="bg-gray-50 border border-[#007cb9] text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Commenst..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-[#007cb9] hover:bg-[#2e6b89] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Product
              </button>
            </form>
            {message && (
              <div
                className="mt-4 p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg text-center"
                role="alert"
              >
                {message}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddProductPage;
