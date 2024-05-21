import { Parallax } from "react-parallax";

const MenuCover = ({ img, title, description, width }) => {
  return (
    <Parallax
      blur={{ min: -30, max: 30 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className={`relative w-full ${width}`}>
        {/* <img src={img} className="w-full h-full object-cover" alt="" /> */}

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-24 py-14 text-center w-[1000px]">
          <h1 className="text-7xl font-semibold my-3">{title}</h1>
          <p className="text-xl">{description}</p>
        </div>
      </div>
    </Parallax>
  );
};

export default MenuCover;
