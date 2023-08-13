import React from "react";
import { Link } from "react-router-dom";

const AdminProductList = ({ products }) => {
  return (
    <table className="w-full border-collapse mt-6">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Image</th>
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
  );
};

export default AdminProductList;
