
import { Helmet } from 'react-helmet-async';
import Banner from './Banner/Banner';
import Cetagory from './Cetagory/Cetagory';
import BestroBoss from './BestroBoss/BestroBoss';
import MenuItem from './MenuItem/MenuItem';
import Contact from './Contact/Contact';
import FoodsCart from './Foods/FoodsCart';
import MenuForm from './MenuForm/MenuForm';
import Testomonials from './Testomonials/Testomonials';
const Home = () => {

  return (
    <div className="">
      <Helmet>
        <title>Bestro Boss | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner></Banner>
      <Cetagory></Cetagory>
      <BestroBoss></BestroBoss>
      <MenuItem></MenuItem>
      <Contact></Contact>
      <FoodsCart></FoodsCart>
      <MenuForm></MenuForm>
      <Testomonials></Testomonials>
    </div>
  );
};

export default Home;
