import BreadcrumbBanner from '@/components/Common/BreadcrumbBanner';
import SEO from '@/components/Common/SEO';
import React from 'react';

const ProductPage = () => {
  return (
    <>
      <SEO title="Product - restRose" />
      <BreadcrumbBanner
        crumbs={[
          { label: "Home", link: "/" },
          { label: "Products", link: "/products" },
        ]}
        title="Our Products"
        description=" Explore Our Wide Range of Products."
      />
    </>
  );
};

export default ProductPage