import { Helmet } from "react-helmet-async";
import MenuCover from "../MenuPage/MenuCover";
import img from "./../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const OurShop = () => {
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
        <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
