import { Helmet } from "react-helmet-async";
import MenuCover from './MenuCover';
import img from "./../../assets/menu/banner3.jpg"
import soupimg from "./../../assets/shop/banner2.jpg"
import desertimg from "./../../assets/home/chef-service.jpg"
import pizzaimg from "./../../assets/menu/pizza-bg.jpg"
import saladimg from "./../../assets/menu/salad-bg.jpg"
import Header from './../../Components/Heading/Header';
import MenuPageItem from "./MenuPageItem";
import { useEffect, useState } from "react";



const MenuPage = () => {
  
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
  },[]);
  const popular = menu.filter((item) => item.category === "popular");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>Bestro Boss | Menu</title>
      </Helmet>
      <MenuCover
      img={img}
      title="Our Menu"
      description="Would you like to try a dish?"
      width="h-[700px]"
      ></MenuCover>
      <Header Heading="---Don't Miss---" SubHeading="Today's Offer"></Header>
      <MenuPageItem menu={popular} title={"popular"}></MenuPageItem>
      <MenuCover
      img={desertimg}
      title="Desserts"
      description="Monotonectally reintermediate parallel infomediaries after fully researched relationships. Dramatically strategize corporate technologies via corporate."
      width="h-[450px]"
      ></MenuCover>
      <MenuPageItem menu={dessert} title={"dessert"}></MenuPageItem>
      <MenuCover
      img={pizzaimg}
      title="Pizza"
      description="Monotonectally reintermediate parallel infomediaries after fully researched relationships. corporate technologies via corporate."
      width="h-[450px]"
      ></MenuCover>
       <MenuPageItem menu={pizza} title={"pizza"}></MenuPageItem>
      <MenuCover
      img={saladimg}
      title="Salad"
      description="Monotonectally reintermediate parallel infomediaries after fully researched relationships. Dramatically strategize corporate technologies via corporate."
      width="h-[450px]"
      ></MenuCover>
       <MenuPageItem menu={salad} title={"salad"}></MenuPageItem>
      <MenuCover
      img={soupimg}
      title="Soup"
      description="Monotonectally reintermediate after fully researched relationships. Dramatically strategize corporate technologies via corporate."
      width="h-[450px]"
      ></MenuCover>
       <MenuPageItem menu={soup} title={"soup"}></MenuPageItem>

    </div>
  );
};

export default MenuPage;
