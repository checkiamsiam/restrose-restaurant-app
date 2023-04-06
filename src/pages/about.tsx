import OurStory from "@/components/AboutPage/OurStory";
import BreadcrumbBanner from "@/components/Common/BreadcrumbBanner";
import SEO from "@/components/Common/SEO";

const About = () => {
  return (
    <>
      <SEO title="About - restRose" />
      <BreadcrumbBanner
        crumbs={[
          { label: "Home", link: "/" },
          { label: "About", link: "/products" },
        ]}
        title="About Us"
        description="See our story and how we started our journey."
      />
      <OurStory/>
    </>
  );
};

export default About;
