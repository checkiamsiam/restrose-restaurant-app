import { ProductCardProps } from "@/Types/Interface/ComponentProps/Product";
import Image from "next/image"; 
import { useState } from "react";
import happyFood from "@/assets/image/yellow minimalist healthy food banner.png";

const ProductCard = ({ product } : ProductCardProps) => {
  const { name, rating, price, description, image } = product;
  const [showModal, setShowModal] = useState<Boolean>(false);

  const handleOrderNow = () => {
    setShowModal(true);
  };

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
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {/* SVG path for rating stars */}
                </svg>
              ))}
            </div>
            <p className="text-gray-600 ml-2">{rating.toFixed(1)}</p>
          </div>
          <p className="text-gray-700 mb-4">${price}</p>
          <p className="text-gray-700">{description}</p>
        </div>
        <button
          onClick={handleOrderNow}
          className="w-full py-3 text-white bg-indigo-500 hover:bg-indigo-600 font-semibold uppercase transition duration-200"
        >
          Order Now
        </button>
      </div>

      {/* Modal for order confirmation */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={() => setShowModal(false)}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <div
              className="inline-block align-middle bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                  Confirm Order
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{name}</p>
                  <p 
                  className="mt-1 text-sm text-gray-500">{description}</p>
                  <p className="mt-1 text-sm text-gray-500">${price}</p>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => setShowModal(false)}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-500 text-base font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Add logic for order confirmation here
                    setShowModal(false);
                  }}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-500 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
