import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const slideImg = [
  {
    id: "1",
    slide: img1,
    name:"salad"
  },
  { id: "2", slide: img2 ,name:"pizza"},
  { id: "3", slide: img3 ,name:"soup"},
  { id: "4", slide: img4 ,name:"desert"},
  { id: "5", slide: img5 ,name:"salad"},
];
const Category = () => {
 
  return (
    <>
    <SectionTitle subHeading={"From 9:00am To 10:00pm"} heading={"order online"}/>
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={10}
    
       
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable:true,
        }}
        navigation={true}
        modules={[ Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        {slideImg.map((d, id) =>(
          <SwiperSlide key={id}>
            <img src={d?.slide} alt=""/>
            <p className="uppercase font-mono md:text-3xl font-bold text-2xl text-black text-center  -mt-10 ">{d?.name}</p>
          </SwiperSlide>
        ))}
        
      </Swiper>

    </>
  );
};

export default Category;
