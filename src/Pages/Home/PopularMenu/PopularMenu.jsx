
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuList from "./MenuList";
import Button from "../../../Components/Button/Button";
import useMenu from "../../../hooks/useMenu";



const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item=>item.category === 'popular');
  

    return (
        <section>
       
            <SectionTitle subHeading={"check it out"} heading={"popular menu"}/>
       <div className="grid md:grid-cols-2 gap-5 md:gap-0">
       {
            popular.map((item,id)=><MenuList key={id} item={item}/>)
        }
       </div>
      <div className="">
      <Button text={'View Full Menu'}/>
      </div>
        </section>
        
    );
};

export default PopularMenu;