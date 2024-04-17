import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Button from "../../../Components/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const CheffRecommended = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/recommended")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
 
  return (
    <div className="max-w-screen-lg  mx-auto p-5 mb-10">
       
      <SectionTitle subHeading={"Should try"} heading={"cheff recommends"} />
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={3}
    
       
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

        breakpoints={{
          // Breakpoint for screens larger than or equal to 'md'
          768: {
            slidesPerView: 3,
            centeredSlides:false
            
          },
        }}

        
      >
        {items.map((d, id) =>(
          <SwiperSlide key={id}>

            {/* ------------------ */}
          <div className="card   mx-auto card-compact md:w-64 w-56 h-80 bg-base-100 shadow-xl">
  <figure><img src={d?.image_url} /></figure>
    <div className="card-actions justify-center space-y-3 p-3">
    <p className="font-bold font-mono text-xl">{d?.dish_name}</p>
          
          <p className="font-sm font-thin text-center">{d?.ingredients}</p>
      <Button  text={'Add To Cart'}></Button>
    
    </div>
 
</div>
{/* ------------------------------------- */}
          </SwiperSlide>
        ))}
        
          
      </Swiper>
    </div>
  );
};

export default CheffRecommended;
