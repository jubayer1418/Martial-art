import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/banner/banner1.webp";
import img2 from "../../assets/banner/banner2.webp";
import img3 from "../../assets/banner/banner3.webp";
import img4 from "../../assets/banner/banner4.webp";
import img5 from "../../assets/banner/banner5.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
const BannerSlider = () => {
  return (
    <div className="">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-[80%]"
      >
        <SwiperSlide className="relative">
          <img className="object-cover w-full " src={img3} alt="" />
          <div className=" absolute top-0 w-full opacity-60 lg:py-40  bg-[#110C04] h-full space-y-16 md:px-20 ">
            <h1 className="lg:w-1/3 lg:text-5xl text-white font-semibold">
              WELCOME TO KARATE AND MARTIAL ARTS SCHOOL
            </h1>
            <p className="text-2xl lg:w-1/3  text-white font-semibold">
              Karate is martial art and way of life that trains a practitioner
              to be peaceful.
            </p>
            <button className="btn bg-[#E0B573] text-[#110C04] hover:text-white hover:bg-[#ff9900]">
              Get a free lesson
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="object-cover w-full " src={img2} alt="" />
          <div className=" absolute top-0 w-full opacity-60 py-40  bg-[#110C04] h-full space-y-16 px-20 ">
            <h1 className="w-1/3 text-5xl text-white font-semibold">
              WELCOME TO KARATE AND MARTIAL ARTS SCHOOL
            </h1>
            <p className="text-2xl w-1/3 text-white font-semibold">
              Karate is martial art and way of life that trains a practitioner
              to be peaceful.
            </p>
            <button className="btn bg-[#E0B573] text-[#110C04] hover:text-white hover:bg-[#ff9900]">
              Get a free lesson
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="object-cover w-full " src={img1} alt="" />
          <div className=" absolute top-0 w-full opacity-60 py-40  bg-[#110C04] h-full space-y-16 px-20 ">
            <h1 className="w-1/3 text-5xl text-white font-semibold">
              WELCOME TO KARATE AND MARTIAL ARTS SCHOOL
            </h1>
            <p className="text-2xl w-1/3 text-white font-semibold">
              Karate is martial art and way of life that trains a practitioner
              to be peaceful.
            </p>
            <button className="btn bg-[#E0B573] text-[#110C04] hover:text-white hover:bg-[#ff9900]">
              Get a free lesson
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="object-cover w-full " src={img4} alt="" />
          <div className=" absolute top-0 w-full opacity-60 py-40  bg-[#110C04] h-full space-y-16 px-20 ">
            <h1 className="w-1/3 text-5xl text-white font-semibold">
              WELCOME TO KARATE AND MARTIAL ARTS SCHOOL
            </h1>
            <p className="text-2xl w-1/3 text-white font-semibold">
              Karate is martial art and way of life that trains a practitioner
              to be peaceful.
            </p>
            <button className="btn bg-[#E0B573] text-[#110C04] hover:text-white hover:bg-[#ff9900]">
              Get a free lesson
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="object-cover w-full " src={img5} alt="" />
          <div className=" absolute top-0 w-full opacity-60 py-40  bg-[#110C04] h-full space-y-16 px-20 ">
            <h1 className="w-1/3 text-5xl text-white font-semibold">
              WELCOME TO KARATE AND MARTIAL ARTS SCHOOL
            </h1>
            <p className="text-2xl w-1/3 text-white font-semibold">
              Karate is martial art and way of life that trains a practitioner
              to be peaceful.
            </p>
            <button className="btn bg-[#E0B573] text-[#110C04] hover:text-white hover:bg-[#ff9900]">
              Get a free lesson
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
