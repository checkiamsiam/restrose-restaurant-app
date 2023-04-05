import SEO from "@/components/Common/SEO";
import LandingLayout from "@/layouts/Landing/Layout";
import { ReactNode } from "react";

const Home = () => {
  return (
    <div>
      <SEO title="Home - restRose" />
    </div>
  );
};

Home.getLayout = (page: ReactNode) => <LandingLayout>{page}</LandingLayout>;

export default Home;
