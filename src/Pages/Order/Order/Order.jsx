import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/order.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import ItemList from "../../../Components/ItemList/ItemList";
import { useState } from "react";
import { useParams } from "react-router-dom";
const Order = () => {
    const categories = ['salad','pizza','soup','dessert','drink'];
    const {category}=useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>FlavourVista | Order Now</Helmet>
      <Cover
        img={orderImg}
        title={"order now"}
        details={"order you favourite dish"}
      />

      <Tabs className={'flex flex-col uppercase items-center p-5 md:p-9'} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salads</Tab>
          <Tab>Pizzas</Tab>
          <Tab>Soups</Tab>
          <Tab>Deserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
        <ItemList item={salad}/>
        </TabPanel>
        <TabPanel>
        <ItemList item={pizza}/>
        </TabPanel>
        <TabPanel>
        <ItemList item={soup}/>
        </TabPanel>
        <TabPanel>
        <ItemList item={dessert}/>
        </TabPanel>
        <TabPanel>
        <ItemList item={drinks}/>
        </TabPanel>
     
      </Tabs>
    </div>
  );
};

export default Order;
