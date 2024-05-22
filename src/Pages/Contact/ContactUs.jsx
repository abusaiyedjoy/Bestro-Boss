import { Helmet } from "react-helmet-async";
import MenuCover from "../MenuPage/MenuCover";
import img from './../../assets/contact/banner.jpg';
import Header from "../../Components/Heading/Header";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Bestro Boss | Contact Us</title>
      </Helmet>
      <MenuCover
        img={img}
        title="Contact Us"
        description="Would you like to try a dish?"
        width="h-[700px]"
      ></MenuCover>
      <Header Heading="---Visit Us---" SubHeading="Our Location"></Header>
    </div>
  );
};

export default ContactUs;
