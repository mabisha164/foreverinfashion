import React from "react";
import { Link } from "react-router-dom";

const AdminProductList = ({ products }) => {
  return (
    <div className=" ">
      <h1 className="mt-10 ml-24 text-center text-3xl">All Products:</h1>
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
          {products.map((product) => {
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
                <td>
                  <Link
                    to={`/admin/products/edit/${_id}`}
                    className="text-green-500 hover:underline"
                  >
                    Edit
                  </Link>{" "}
                  |{" "}
                  <button className="text-red-500 hover:underline cursor-pointer">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductList;
