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
  const totalProducts = products.length;
  return (
    <div className=" shadow-2xl ml-[300px] w-[800px] h-[730px] ">
      <p>{totalProducts}</p>
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

                  <button className=" hover:underline cursor-pointer bg-red-400 h-[50px] w-[70px] text-white rounded-xl text-xl">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className=" ml-16">
        <ReactPaginate
          onPageChange={handlePageClick}
          nextLabel=" >"
          pageCount={pageCount}
          previousLabel="< "
          containerClassName="pagination flex  mt-6 ml-4"
          pageClassName="page-item"
          pageLinkClassName="page-link px-3 py-1 rounded-md border border-gray-300 mr-2"
          previousClassName="page-item"
          previousLinkClassName="page-link px-3 py-1 rounded-md border border-gray-500 mr-2"
          nextClassName="page-item"
          nextLinkClassName="page-link px-3 py-1 rounded-md border border-gray-500"
          activeClassName=" text-red-500"
        />
      </div>
    </div>
  );
};

export default AdminProductList;
