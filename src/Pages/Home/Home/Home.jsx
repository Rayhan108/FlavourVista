import Banner from "../../../Components/Banner/Banner";
import PopularMenu from "../PopularMenu/PopularMenu";
import Category from "./Category";
import Contact from "./Contact";
import Services from "./Services";



const Home = () => {
    return (
        <div>
       
          <Banner/>
          <Category/>
          <Services/>
          <PopularMenu/>
          <Contact/>
        </div>
    );
};

export default Home;