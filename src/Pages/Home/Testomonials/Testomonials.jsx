import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Header from "../../../Components/Heading/Header";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import comma from './../../../assets/dashboard/Group.png';
const Testimonials = () => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch("Reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  });
  return (
    <section className="my-20">
      <Header
        Heading={"---What Our Clients Say---"}
        SubHeading={"Testimonials"}
      />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24 my-12 flex justify-center items-center flex-col">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <img src={comma} className="text-center mt-7" alt="" />
              <p className="text-center max-w-[1000px] mt-10 mb-6">{review.details}</p>
              <h2 className="text-4xl font-semibold text-[#ceb174] text-center">
                {review.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
