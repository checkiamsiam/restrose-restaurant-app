import { CustomerReview } from "@/Types/Interface/Service";
import deoAvatar from "@/assets/avatar/icon-ge34078a46_640.png";
import smithAvatar from "@/assets/avatar/icon-gf57282e05_1280.png";
import rahmanAvatar from "@/assets/avatar/user-clipart-md.png";
import reviewBanner from "@/assets/image/Customer-feedback-giving-5-star-228049-pixahive-150x150.jpg";
import Image from "next/image";
import Slider from "react-slick";

// customerReviews.js

const customerReviews: CustomerReview[] = [
  {
    name: "John Doe",
    profileImg: deoAvatar,
    review:
      "I absolutely loved the food here! The flavors were amazing and the portions were generous. The service was also excellent. I highly recommend trying their biryani and kebabs.",
    date: "March 2023",
  },
  {
    name: "Jane Smith",
    profileImg: smithAvatar,
    review:
      "As someone who loves Bangladeshi cuisine, this restaurant exceeded my expectations. The food was authentic and delicious. The ambience was cozy and the staff was friendly. I will definitely be coming back!",
    date: "April 2023",
  },
  {
    name: "Ahmed Rahman",
    profileImg: rahmanAvatar,
    review:
      "I had a wonderful dining experience at this restaurant. The food was top-notch and the service was impeccable. The menu had a great variety of dishes to choose from. I highly recommend trying their traditional Bangladeshi desserts.",
    date: "May 2023",
  },
];

const CustomerReviewSection = () => {
  // Slick settings for the customer review slider
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="flex bg-cover bg-center py-12 px-5 bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 pr-8">
          <div>
          <h2 className="text-white text-3xl font-bold mb-8">Customers Reviews</h2>
          <Slider {...settings}>
            {customerReviews.map((review: CustomerReview, index: number) => (
              <div key={index} className="flex flex-col lg:flex-row items-start mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image src={review?.profileImg} alt={review?.name} className="w-full h-full" />
                </div>
                <div className="flex flex-col">
                  <p className="text-white font-medium mb-1">{review?.name}</p>
                  <p className="text-gray-300 italic text-sm mb-2">{review?.date}</p>
                  <p className="text-gray-200">{review?.review}</p>
                </div>
              </div>
            ))}
          </Slider>
          </div>
        </div>
        <div className="w-full h-full lg:w-2/5 mt-6 lg:mt-0">
          <Image src={reviewBanner} alt="Animated Image"  className="animate-spin-slow w-full h-[300px] rounded-lg " />;
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewSection;
