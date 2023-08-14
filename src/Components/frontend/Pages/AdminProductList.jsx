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

  return (
    <div className=" ">
      <h1 className="mt-10 ml-24 text-center text-3xl"> Products:</h1>
      <table className="w-full border-collapse mt-[30px] ml-24 text-center">
        <thead>
          <tr>
            <th className="text-xl">Name</th>
            <th className="text-xl">Category</th>
            <th className="text-xl">Price</th>
            <th className="text-xl">Image</th>
          </tr>
        </thead>
        <tbody>
          {paginatedProducts.map((product) => {
            const { _id, name, CategoryName, price, img } = product;

            return (
              <tr key={_id}>
                <td>{name}</td>
                <td>{CategoryName}</td>
                <td>Rs. {price}</td>
                <td>
                  <img
                    src={img}
                    alt={name}
                    className="max-w-[100px] max-h-[100px]"
                  />
                </td>
                <td className="">
                  <button className="bg-green-500 h-[50px] w-[90px] rounded-xl mr-2 text-xl">
                    <Link
                      to={`/admin/products/edit/${_id}`}
                      className="text-white hover:underline "
                    >
                      Edit
                    </Link>{" "}
                  </button>

                  <button className=" hover:underline cursor-pointer bg-red-400 h-[50px] w-[90px] text-white rounded-xl text-xl">
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
        activeClassName="bg-blue-500 text-white"
      />
    </div>
  );
};

export default AdminProductList;
