import Banner from "../../../Components/Banner/Banner";
import CheffRecommended from "../CheffRecommended/CheffRecommended";
import PopularMenu from "../PopularMenu/PopularMenu";
import Category from "./Category";
import Contact from "./Contact";
import FromMenu from "./FromMenu";
import Services from "./Services";



const Home = () => {
    return (
        <div>
       
          <Banner/>
          <Category/>
          <Services/>
          <PopularMenu/>
          <Contact/>
          <CheffRecommended/>
          <FromMenu/>
        </div>
    );
};

export default Home;