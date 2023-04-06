import SEO from "@/components/Common/SEO";
import HomeBanner from "@/components/HomePage/HomePageBanner";
import MenuSection from "@/components/HomePage/OffersSection";
import BranchesSection from "@/components/HomePage/OurBranches";
import CustomerReviewSection from "@/components/HomePage/ReviewSection";
import Services from "@/components/HomePage/Services";

const Home = () => {
  return (
    <div>
      <SEO title="Home - restRose" />
      <HomeBanner />
      <Services />
      <MenuSection />
      <BranchesSection />
      <CustomerReviewSection />
    </div>
  );
};

export default Home;
