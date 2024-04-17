import { useEffect } from "react";
import { useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay } from 'swiper/modules';
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
const Testimonials = () => {
    const [testimonials,setTestimonials] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setTestimonials(data))
    },[])
    return (
        <div>
           <SectionTitle subHeading={'What our clients say'} heading={'testimonials'}/>
           <Swiper navigation={true} autoplay modules={[Navigation,Autoplay]} className="mySwiper">
           {
            testimonials.map(testimonial=><SwiperSlide key={testimonial?._id}>
                <div className="flex flex-col items-center p-8 md:p-16 md:space-y-7">
                   
                 <Rating style={{ maxWidth: 200 }} value={testimonial?.rating} readOnly />
                <RiDoubleQuotesL size={80}/>
                    <p className="font-mono ">{testimonial?.details}</p>
                    <p className="text-2xl text-amber-500 font-mono">{testimonial?.name}</p>
                </div>
            </SwiperSlide>)
           }
        
      </Swiper>
        </div>
    );
};

export default Testimonials;