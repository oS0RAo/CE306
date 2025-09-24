import React from "react";
import Button from "./Button";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  description,
  price,
  onAddToCart,
}) => {
  return (
    <div
    className="
        flex flex-col
        bg-white
        shadow-lg
        rounded-xl
        p-4
        md:p-6
        w-full
        h-full
        transition-transform duration-300 transform hover:scale-105
    "
    >
      <div className="flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      </div>

      <div className="flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
            {description}
          </p>
        </div>

        <div className="mt-auto">
          <p className="text-xl font-semibold text-blue-600 mb-4">
            ${price.toFixed(2)}
          </p>
          <Button onClick={onAddToCart} className="w-full" variant="primary">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;