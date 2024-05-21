// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import necessary Swiper modules
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Slide
import slide1 from "./../../../assets/home/slide1.jpg";
import slide2 from "./../../../assets/home/slide2.jpg";
import slide3 from "./../../../assets/home/slide3.jpg";
import slide4 from "./../../../assets/home/slide4.jpg";
import slide5 from "./../../../assets/home/slide5.jpg";
import Header from "../../../Components/Heading/Header";

// Define the Cetagory component
const Cetagory = () => {
  return (
    <section>
      <Header
      Heading={'---From 11:00am to 10:00pm---'}
      SubHeading={'ORDER ONLINE'}
      >        
      </Header>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper my-12"
      >
        <SwiperSlide>
          <img src={slide1} className="w-96" alt="" />
          <h1 className="text-4xl uppercase text-white font-semibold text-center -mt-16 mb-7">
            Salad
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} className="w-96" alt="" />
          <h1 className="text-4xl uppercase text-white font-semibold text-center -mt-16 mb-7">
            Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} className="w-96" alt="" />
          <h1 className="text-4xl uppercase text-white font-semibold text-center -mt-16 mb-7">
            Pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} className="w-96" alt="" />
          <h1 className="text-4xl uppercase text-white font-semibold text-center -mt-16 mb-7">
            Desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} className="w-96" alt="" />
          <h1 className="text-4xl uppercase text-white font-semibold text-center -mt-16 mb-7">
            Salad
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

// Export the Cetagory component
export default Cetagory;
