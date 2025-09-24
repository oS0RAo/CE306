import React from "react";
import ProductCard from "./component/ProductCard";

const products = [
  {
    id: 1,
    imageUrl: "https://m.media-amazon.com/images/I/717mW1W0VKL._AC_SL1500_.jpg",
    title: "Coffee Machine",
    description:
      "Drink coffee every time.",
    price: 29.99,
  },
  {
    id: 2,
    imageUrl:
      "https://www.alottechs.com/wp-content/uploads/2024/05/nothing-phone-2a-white.jpg",
    title: "Smartphone",
    description:
      "It's smartphone?",
    price: 79.5,
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/itcity-production/image/upload/f_jpg,q_80,w_1000/v1727080678/products/PRD202409008276/skus/j2ul9mis2pk2etvl1wu0.jpg",
    title: "Wireless Mouse",
    description:
      "This is a mouse.",
    price: 33.55,
  },
  {
    id: 4,
    imageUrl:
      "https://drprepare.com/cdn/shop/files/Dr.Prepare_desk_fan_DCCFA1-G1-US.jpg?v=1725619930",
    title: "Fan",
    description: "This is a fan",
    price: 3.55,
  },
  {
    id: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQJDLcuRZeSdBTroVXJ5lhXpiFRoor0LK9Q&s",
    title: "Keyboard",
    description: "Keyboard",
    price: 13.55,
  },
];

const App: React.FC = () => {
  const handleAddToCart = (productName: string) => {
    alert(`Added "${productName}" to cart! 🛒`);
  };

  return (
    <div className="bg-white min-h-screen py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        รายการสินค้าของเรา
      </h1>

      <div
        className="
          grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6 md:gap-8 xl:gap-10
            justify-items-center
        "
      >
        {products.map((product) => (
          <div key={product.id} className="flex w-full h-full">
            <ProductCard
              imageUrl={product.imageUrl}
              title={product.title}
              description={product.description}
              price={product.price}
              onAddToCart={() => handleAddToCart(product.title)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;