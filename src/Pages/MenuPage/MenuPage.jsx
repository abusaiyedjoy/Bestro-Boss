import { Helmet } from "react-helmet-async";
import MenuCover from './MenuCover';
import MenuItem from "../Home/MenuItem/MenuItem";
import img from "./../../assets/menu/banner3.jpg"
import soup from "./../../assets/shop/banner2.jpg"
import desert from "./../../assets/home/chef-service.jpg"
import pizza from "./../../assets/menu/pizza-bg.jpg"
import salad from "./../../assets/menu/salad-bg.jpg"
import Header from './../../Components/Heading/Header';
import MenuPageItem from "./MenuPageItem";


const MenuPage = () => {
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
      <MenuPageItem></MenuPageItem>
      <MenuCover
      img={desert}
      title="Desserts"
      description="Monotonectally reintermediate parallel infomediaries after fully researched relationships. Dramatically strategize corporate technologies via corporate."
      width="h-[450px]"
      ></MenuCover>
      <MenuItem></MenuItem>
      <MenuCover
      img={pizza}
      title="Pizza"
      description="Monotonectally reintermediate parallel infomediaries after fully researched relationships. corporate technologies via corporate."
      width="h-[450px]"
      ></MenuCover>
      <MenuItem></MenuItem>
      <MenuCover
      img={salad}
      title="Salad"
      description="Monotonectally reintermediate parallel infomediaries after fully researched relationships. Dramatically strategize corporate technologies via corporate."
      width="h-[450px]"
      ></MenuCover>
      <MenuItem></MenuItem>
      <MenuCover
      img={soup}
      title="Soup"
      description="Monotonectally reintermediate after fully researched relationships. Dramatically strategize corporate technologies via corporate."
      width="h-[450px]"
      ></MenuCover>
      <MenuItem></MenuItem>

    </div>
  );
};

export default MenuPage;
