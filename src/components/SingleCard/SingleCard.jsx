// import React from "react";
// // import data from "../../books";
// import "./SingleCard.scss";
// import { useNavigate } from "react-router-dom";

// export default function SingleCard({
//   item,
//   handleClick,
//   cartItems,
//   setCartItems,
// }) {
//   const navigate = useNavigate();
//   const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);
//   const handleAddToCart = () => {
//     if (!isInCart) {
//       setCartItems([...cartItems, item]);
//     }
//     handleClick(item);
//   };

//   return (
//     <div className="singleCard" onClick={() => navigate(`/store/${item.id}`)}>
//       <div className="cardImg">
//         <img src={item.imgSrc} />
//       </div>
//       <div className="cardTitle">
//         <h2>{item.title}</h2>
//         <span>{item.author}</span>
//       </div>
//       <div className="cardPrice">
//         <p>{item.price}</p>
//       </div>
//       <button onClick={handleAddToCart}>
//         {isInCart ? "In Cart" : "Add to Cart"}
//       </button>
//     </div>
//   );
// }
