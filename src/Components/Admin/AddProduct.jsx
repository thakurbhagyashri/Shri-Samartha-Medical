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
    realMrp: "",
    discountMrp: "",
    description: "",
    comments: "",
    categories: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const data = new FormData();
  //   Object.keys(formData).forEach((key) => {
  //     data.append(key, formData[key]);
  //   });
  //   const token = localStorage.getItem('token');

  //   try {
  //     const response = await fetch(
  //       "http://localhost:8080/admin/add-product",
  //       {
  //         method: "POST",
  //         headers: {
  //           'Authorization': `Bearer ${token}`,
  //           'Content-Type': 'application/json',
  //       },
  //         body: data,
  //       }
  //     );

  //     if (response.ok) {
  //       setMessage("Product added successfully!");
  //       setFormData({
  //         image: "null",
  //         quantity: "",
  //         price: "",
  //         discount: "",
  //         companyName: "",
  //         medicineName: "",
  //         minAge: "",
  //         maxAge: "",
  //         realMrp: "",
  //         discountMrp: "",
  //         category: "",
  //         description: "",
  //         comments: ""
          
  //       });
  //     } else {
  //       setMessage("Failed to add product. Please try again.");
  //     }
  //   } catch (error) {
  //     setMessage("Error occurred: " + error.message);
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare productCatalogueDTO as JSON
    const productCatalogueDTO = {
        imageName: formData.imageName || "",
        imageType: formData.imageType || "",
        quantity: formData.quantity,
        price: formData.price,
        discount: formData.discount,
        companyName: formData.companyName,
        medicineName: formData.medicineName,
        minAge: formData.minAge,
        maxAge: formData.maxAge,
        realMrp: formData.realMrp,
        discountMrp: formData.discountMrp,
        prodDescription: formData.description,
        comments: formData.comments,
        categories: formData.categories.split(","), // Convert categories to an array
    };

    const data = new FormData();
    data.append("productCatlogueDTO", new Blob([JSON.stringify(productCatalogueDTO)], { type: "application/json" }));
    data.append("image", formData.image); // Assuming formData.image is a File object

    const token = localStorage.getItem("token");

    try {
        const response = await fetch("http://localhost:8080/admin/add-product", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`, // Don't set Content-Type manually
            },
            body: data,
        });

        if (response.ok) {
            setMessage("Product added successfully!");
            setFormData({
                imageName: "",
                imageType: "",
                image: null,
                quantity: "",
                price: "",
                discount: "",
                companyName: "",
                medicineName: "",
                minAge: "",
                maxAge: "",
                realMrp: "",
                discountMrp: "",
                categories: "",
                description: "",
                comments: "",
            });
        } else {
            const errorData = await response.json();
            setMessage(`Failed to add product. Error: ${errorData.message || "Unknown error"}`);
        }
    } catch (error) {
        setMessage("Error occurred: " + error.message);
    }
};


  
  return (

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
                Categories
                </label>
                <input
                  type="text"
                  name="categories"
                  value={formData.categories}
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
