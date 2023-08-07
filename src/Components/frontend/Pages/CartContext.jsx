import { useContext, useState, createContext, useEffect } from "react";
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    let existingItem = localStorage.getItem("cart");
    if (existingItem) setCart(JSON.parse(existingItem));
  }, []);
  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    setCart(item, id);
  };
  return (
    <CartContext.Provider value={[cart, setCart, increaseAmount]}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { useCart, CartProvider, CartContext };
