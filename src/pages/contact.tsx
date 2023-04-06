import BreadcrumbBanner from "@/components/Common/BreadcrumbBanner";
import SEO from "@/components/Common/SEO";
import ReservationSection from "@/components/ContactPage/BookNowSection";
import ContactSection from "@/components/ContactPage/ContactForm";

const ContactPage = () => {
  return (
    <>
      <SEO title="Contact - restRose" />
      <BreadcrumbBanner
        crumbs={[
          { label: "Home", link: "/" },
          { label: "Contact", link: "/contact" },
        ]}
        title="Contact Us"
        description="Get in Touch and Let Us Serve You Better"
      />
      <ContactSection />
      <ReservationSection />
    </>
  );
};

export default ContactPage;
