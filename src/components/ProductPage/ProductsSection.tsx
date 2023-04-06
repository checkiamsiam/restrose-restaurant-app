import React, { useState } from "react";
import ProductCard from "./ProductCard"; // assuming a ProductCard component for displaying each product
import { ProductSectionProps } from "@/Types/Interface/ComponentProps/Product";

const ProductsSection = ({ products } : ProductSectionProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // number of products to display per page

  // Calculate total number of pages based on products data and productsPerPage
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Get products to display for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const productsToDisplay = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handle pagination - go to previous page
  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // Handle pagination - go to next page
  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <section className="bg-gray-100 py-10 px-5">
      <h2 className="text-3xl text-center mb-6">Our Products</h2>
      <div className="flex flex-wrap justify-center items-center">
        {/* Render ProductCard component for each product */}
        {productsToDisplay.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-5 mt-6">
        {/* Render pagination buttons */}
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-md mr-2"
        >
          Previous
        </button>
        <span className="text-gray-600 text-xl font-semibold">
          {currentPage}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-md ml-2"
        >
          Next
        </button>
      </div>
    </section>
  );
};



export default ProductsSection;
