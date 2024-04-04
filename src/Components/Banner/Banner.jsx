
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../assets/home/01.jpg"
import img2 from "../../assets/home/02.jpg"
import img3 from "../../assets/home/03.png"
import img4 from "../../assets/home/04.jpg"
import img5 from "../../assets/home/05.png"
import img6 from "../../assets/home/06.png"
const slideImg=[
    {
        "id":"1",
        "slide":img1
    },
    { "id":"2","slide":img2},
    { "id":"3","slide":img3},
    { "id":"4","slide":img4},
    { "id":"5","slide":img5},
    { "id":"6","slide":img6},
]

const Banner = () => {
    return (
      
  <Carousel> 
{
    slideImg.map((d,id)=>
    <div key={id} >
    <img src={d?.slide} alt="" />
</div>
        
    
    )
}

            </Carousel>
        
    );
};

export default Banner;