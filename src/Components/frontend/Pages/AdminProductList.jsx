// import React from "react";
// import { Link } from "react-router-dom";

// const AdminProductList = ({ products }) => {
//   return (
//     <div className=" ">
//       <h1 className="mt-10 ml-24 text-center text-3xl">All Products:</h1>
//       <table className="w-full border-collapse mt-[30px] ml-24 text-center">
//         <thead>
//           <tr>
//             <th className="text-xl">Name</th>
//             <th className="text-xl">Category</th>
//             <th className="text-xl">Price</th>
//             <th className="text-xl">Image</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => {
//             const { _id, name, CategoryName, price, img } = product;

//             return (
//               <tr key={_id}>
//                 <td>{name}</td>
//                 <td>{CategoryName}</td>
//                 <td>Rs. {price}</td>
//                 <td>
//                   <img
//                     src={img}
//                     alt={name}
//                     className="max-w-[100px] max-h-[100px]"
//                   />
//                 </td>
//                 <td>
//                   <Link
//                     to={`/admin/products/edit/${_id}`}
//                     className="text-green-500 hover:underline"
//                   >
//                     Edit
//                   </Link>{" "}
//                   |{" "}
//                   <button className="text-red-500 hover:underline cursor-pointer">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminProductList;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import AddNewProduct from "./AddNewProduct";

const AdminProductList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Adjust this as needed
  const pageCount = Math.ceil(products.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
  const updateProducts = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/womenfashion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setProducts(data[0]);
    } catch (error) {
      console.log("Error updating products:", error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/deleteProduct/:id`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        updateProducts(); // Fetch updated product list after deletion
      }
    } catch (error) {
      console.log("Error deleting product:", error);
    }
  };

  return (
    <div className=" shadow-2xl ml-[300px] w-[800px] h-[730px] ">
      {/* <p>{totalProducts}</p> */}
      <h1 className="p-3 mt-6  ml-4 text-3xl font-custom "> Products:</h1>
      <table className="w-[100%] border-collapse mt-[10px] text-center ">
        <thead>
          <tr>
            <th className="text-xl font-custom">Name</th>
            <th className="text-xl font-custom">Category</th>
            <th className="text-xl font-custom">Price</th>
            <th className="text-xl font-custom">Image</th>
            <th className="text-xl font-custom">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {paginatedProducts.map((product) => {
            const { _id, name, CategoryName, price, img } = product;

            return (
              <tr key={_id} className="">
                <td className="">{name}</td>
                <td>{CategoryName}</td>
                <td>Rs. {price}</td>
                <td>
                  <img
                    src={img}
                    alt={name}
                    className="max-w-[140px] max-h-[90px] mt-2 rounded-xl ml-10 shadow-2xl"
                  />
                </td>
                <td className="">
                  <button className="bg-green-500 h-[50px] w-[70px] rounded-xl mr-2 text-xl">
                    <Link
                      to={`/admin/products/edit/${_id}`}
                      className="text-white hover:underline "
                    >
                      Edit
                    </Link>{" "}
                  </button>

                  <button
                    onClick={() => handleDeleteProduct(_id)}
                    className=" hover:underline cursor-pointer bg-red-400 h-[50px] w-[90px] text-white rounded-xl text-xl"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ReactPaginate
        onPageChange={handlePageClick}
        pageCount={pageCount}
        containerClassName="pagination flex justify-center items-center mt-4"
        pageClassName="page-item"
        pageLinkClassName="page-link px-3 py-1 rounded-md border border-gray-300 mr-2"
        previousClassName="page-item"
        previousLinkClassName="page-link px-3 py-1 rounded-md border border-gray-300 mr-2"
        nextClassName="page-item"
        nextLinkClassName="page-link px-3 py-1 rounded-md border border-gray-300"
        activeClassName=" text-red-600"
      />
      <AddNewProduct updateProducts={updateProducts} />
    </div>
  );
};

export default AdminProductList;
