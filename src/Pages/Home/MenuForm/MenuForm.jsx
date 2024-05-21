import Header from "./../../../Components/Heading/Header";
import feature from "./../../../assets/home/featured.jpg";

const MenuForm = () => {
  return (
    <section className="mt-16 mb-12">
      <div
        className="hero h-full bg-fixed"
        style={{
          backgroundImage: `url(${feature})`,
          width: "full",
          height: "full",
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="w-full">
          <div className="w-full text-gray-200">
            <Header
              Heading={"---Check it Out---"}
              SubHeading={"Form Our Menu"}
            ></Header>
          </div>
          <div className="flex text-gray-200 justify-center items-center gap-8 mb-12">
            <img src={feature} className="w-96" alt="" />
            <div className="flex flex-col items-start">
              <h1 className="text-lg">March 20, 2023</h1>
              <h2 className="text-lg">WHERE CAN I GET SOME?</h2>
              <p className="max-w-lg text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="mt-3 bg-transparent text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span className="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuForm;
