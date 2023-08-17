// import React, { useState } from "react";

// const AddNewProduct = ({ updateProducts }) => {
//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     CategoryName: "",
//     price: "",
//     description: "",
//     img: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewProduct((prevProduct) => ({
//       ...prevProduct,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:8000/api/addProduct", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newProduct),
//       });

//       if (response.ok) {
//         console.log("Product added successfully");
//         updateProducts(); // Update the product list after adding a new product
//         setNewProduct({
//           name: "",
//           CategoryName: "",
//           price: "",
//           description: "",
//           img: "",
//         });
//       } else {
//         console.error("Error adding product");
//       }
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   };

//   return (
//     <div className="m-4">
//       <h2 className="text-2xl font-semibold mb-2">Add New Product</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Input fields for product details */}
//         {/* ... */}
//         <div className="mb-4">
//           <label htmlFor="name">Product Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={newProduct.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="CategoryName">Category Name:</label>
//           <input
//             type="text"
//             id="CategoryName"
//             name="CategoryName"
//             value={newProduct.CategoryName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="CategoryName">Description:</label>
//           <input
//             type="text"
//             id="description"
//             name="description"
//             value={newProduct.description}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="price">Price:</label>
//           <input
//             type="number"
//             id="price"
//             name="price"
//             value={newProduct.price}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="img">Image URL:</label>
//           <input
//             type="url"
//             id="img"
//             name="img"
//             value={newProduct.img}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//         >
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddNewProduct;
import React, { useState } from "react";

const AddNewProduct = ({ updateProducts }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    CategoryName: "",
    price: "",
    description: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        console.log("Product added successfully");
        updateProducts();
        setNewProduct({
          name: "",
          CategoryName: "",
          price: "",
          description: "",
          img: "",
        });
      } else {
        console.error("Error adding product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="m-4 p-8 bg-pink-200 rounded-lg shadow-lg ">
      <h2 className="text-2xl  font-semibold mb-4 text-gray-800">
        Add New Product
      </h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Product Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="CategoryName"
            className="block text-sm font-medium text-gray-700"
          >
            Category Name:
          </label>
          <input
            type="text"
            id="CategoryName"
            name="CategoryName"
            value={newProduct.CategoryName}
            onChange={handleChange}
            className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
            rows="4"
            className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="img"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL:
          </label>
          <input
            type="url"
            id="img"
            name="img"
            value={newProduct.img}
            onChange={handleChange}
            className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;
