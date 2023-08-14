import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const AdminProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    CategoryName: "",
    price: "",
    img: "",
  });

  useEffect(() => {
    fetch(`http://localhost:8000/api/womenfashion/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data); // Set the fetched product data
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8000/api/womenfashion/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );

      if (response.ok) {
        navigate("/admin/products");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleInputChange}
        />
        <label>Category</label>
        <input
          type="text"
          name="CategoryName"
          value={product.CategoryName}
          onChange={handleInputChange}
        />
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />
        <label>Image URL</label>
        <input
          type="text"
          name="img"
          value={product.img}
          onChange={handleInputChange}
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default AdminProductEdit;
