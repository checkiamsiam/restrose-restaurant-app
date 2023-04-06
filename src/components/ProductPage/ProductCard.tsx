import { ProductCardProps } from "@/Types/Interface/ComponentProps/Product";
import Image from "next/image";
import happyFood from "@/assets/image/yellow minimalist healthy food banner.png";
const ProductCard = ({ product }: ProductCardProps) => {
  const { name, image, rating, price, description } = product;

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform transition duration-200 hover:scale-105">
        <div className="h-48 overflow-hidden">
          <Image src={happyFood} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <div className="flex items-center mb-2">
            <div className="flex items-center text-yellow-500">
              {[...Array(Math.round(rating))].map((_, index) => (
                <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 14.795l-4.265 2.23a1 1 0 0 1-1.451-1.054l.814-4.739-3.451-3.364a1 1 0 0 1 .562-1.706l4.81-.7L9.397 1.38a1 1 0 0 1 1.206 0l2.24 1.178c.537.282.748.954.452 1.476l-3.256 3.992.814 4.738a1 1 0 0 1-1.452 1.054L10 14.795z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 ml-2">{rating.toFixed(1)}</p>
          </div>
          <p className="text-gray-700 mb-4">${price}</p>
          <p className="text-gray-700">{description}</p>
        </div>
        <button className="w-full py-3 text-white bg-indigo-500 hover:bg-indigo-600 font-semibold uppercase transition duration-200">Order Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
