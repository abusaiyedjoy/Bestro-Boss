import { Helmet } from "react-helmet-async";
import MenuCover from "../MenuPage/MenuCover";
import img from "./../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderTab from "./OrderTab";

const OurShop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [menu, setMenu] = useState([]);
  const [tabindex, setTabindex] = useState(initialIndex);

  useEffect(() => {
    fetch("http://localhost:9000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
  }, []);

  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");

  return (
    <div>
      <Helmet>
        <title>Bestro Boss | Our Shop</title>
      </Helmet>
      <MenuCover
        img={img}
        title="Our Shop"
        description="Would you like to try a dish?"
        width="h-[700px]"
      ></MenuCover>
      <div className="my-12">
        <Tabs defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
