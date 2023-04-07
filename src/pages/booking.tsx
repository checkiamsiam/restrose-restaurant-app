import BookingSection from "@/components/BookingPage/BookingMain";
import BreadcrumbBanner from "@/components/Common/BreadcrumbBanner";
import SEO from "@/components/Common/SEO";

const BookingPage = () => {
  return (
    <>
      <SEO title="Booking - restRose" />
      <BreadcrumbBanner
        crumbs={[
          { label: "Home", link: "/" },
          { label: "Booking", link: "/booking" },
        ]}
        title="Reservations"
        description="Book a table and enjoy your meal."
      />
      <BookingSection/>
    </>
  );
};

export default BookingPage;