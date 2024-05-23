import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuBg from "../../../assets/menu/banner3.jpg";
import desertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu]=useMenu();
    const offered = menu.filter(item=>item.category === 'offered');
    const dessert = menu.filter(item=>item.category === 'dessert');
    const salad = menu.filter(item=>item.category === 'salad');
    const soup = menu.filter(item=>item.category === 'soup');
    const pizza = menu.filter(item=>item.category === 'pizza');
   
  return (
    <div>
      <Helmet>FlavourVista | Our Menu</Helmet>
      <Cover
        img={menuBg}
        title={"our menu"}
        details={"would you like to try dish?"}
      />
      <SectionTitle heading={"todays offer"} subHeading={"Dont miss"} />
<MenuCategory items={offered}  title={"dessert"}/>
<Cover
        img={desertBg}
        title={"desert"}
        details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      />
<MenuCategory title={"dessert"} items={dessert}/>
<Cover
        img={pizzaBg}
        title={"pizza"}
        details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      />
<MenuCategory items={pizza}  title={"pizza"}/>
<Cover
        img={saladBg}
        title={"salad"}
        details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      />
<MenuCategory items={salad}  title={"salad"}/>
<Cover
        img={soupBg}
        title={"soup"}
        details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      />
<MenuCategory items={soup}  title={"soup"}/>
    </div>
  );
};

export default Menu;
