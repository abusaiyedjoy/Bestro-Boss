import FoodCards from "./foodCards";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {items.map((item) => (
            <FoodCards key={item._id} item={item}></FoodCards>
          ))}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default OrderTab;
