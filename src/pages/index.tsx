import SEO from "@/components/Common/SEO";
import ReservationSection from "@/components/HomePage/BookNowSection";
import HomeBanner from "@/components/HomePage/HomePageBanner";
import MenuSection from "@/components/HomePage/OffersSection";
import CustomerReviewSection from "@/components/HomePage/ReviewSection";
import Services from "@/components/HomePage/Services";
import LandingLayout from "@/layouts/Landing/Layout";
import { ReactNode } from "react";

const Home = () => {
  return (
    <div>
      <SEO title="Home - restRose" />
      <HomeBanner/>
      <Services/>
      <MenuSection/>
      <ReservationSection/>
      <CustomerReviewSection/>
    </div>
  );
};


export default Home;
