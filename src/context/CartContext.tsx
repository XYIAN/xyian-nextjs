// import React, { createContext, useState, useContext } from 'react';

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider: React.FC = ({ children }) => {
//     const [cart, setCart] = useState<CartItem[]>([]);

//     const addToCart = (item: CartItem) => setCart((prev) => [...prev, item]);
//     const removeFromCart = (id: string) =>
//         setCart((prev) => prev.filter((item) => item.id !== id));
//     const clearCart = () => setCart([]);

//     return (
//         <CartContext.Provider
//             value={{ cart, addToCart, removeFromCart, clearCart }}
//         >
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => {
//     const context = useContext(CartContext);
//     if (!context) throw new Error('useCart must be used within a CartProvider');
//     return context;
// };
