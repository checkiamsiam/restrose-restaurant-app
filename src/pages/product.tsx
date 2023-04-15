import { ProductSectionProps } from "@/Types/Interface/ComponentProps/Product";
import BreadcrumbBanner from "@/components/Common/BreadcrumbBanner";
import SEO from "@/components/Common/SEO";
import ProductsSection from "@/components/ProductPage/ProductsSection";

const ProductPage = ({ products }: ProductSectionProps) => {
  console.log(products);
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
      <ProductsSection products={products} />
    </>
  );
};

export async function getServerSideProps() {
  // Fetch product data from products.json file
  const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://restrose-restaurant-app.vercel.app";
  const response: Response = await fetch(`${baseUrl}/products.json`);
  const products = await response.json();

  return {
    props: {
      products,
    },
  };
}

export default ProductPage;
