import Button from "../../../Components/Button/Button";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featureImg from '../../../assets/home/featured.jpg'

const FromMenu = () => {
    return (
        <div className="bgImg bg-fixed ">
        
          <div className="md:pt-28 pt-8">
          <SectionTitle heading={'from our menu'} subHeading={'check it out'}/>
          </div>
           
<div className="flex flex-col md:flex-row md:space-x-8 space-y-5 md:p-12  p-5 max-w-screen-lg mx-auto  ">

<div className="md:w-[1980px] w-[648px] md:mb-12 md:mt-3 "><img  src={featureImg} /></div>
<div className="">
    <p className=" text-black font-mono font-bold text-xl">March 20, 2023</p>
    <p className=" text-black font-mono font-bold text-xl">WHERE CAN I GET SOME?</p>
    <p className=" text-black font-mono"> 

Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
<button className="btn btn-primary my-5">Read More</button>

</div>
</div>
        </div>
    );
};

export default FromMenu;
