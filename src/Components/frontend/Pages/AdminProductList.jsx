import React from "react";
import { Link } from "react-router-dom";

const AdminProductList = ({ products }) => {
  return (
    <div className=" ">
      <h1 className="mt-[80px] ml-24 text-center text-3xl">All Products:</h1>
      <table className="w-full border-collapse mt-[60px] ml-24 text-center">
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
    </div>
  );
};

export default AdminProductList;
