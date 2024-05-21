import Header from "../../../Components/Heading/Header";

const FoodsCart = () => {
  return (
    <section className="mt-16 mb-12">
      <Header
        Heading={"---Should try---"}
        SubHeading={"CHEF RECOMMENDS"}
      ></Header>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className=" p-2">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="overflow-hidden w-32 p-2 h-12 bg-gray-100 text-black border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
              Hover me!
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-[#d2c3a5] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-[#d1bb8c] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-[#ceb174] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                Explore!
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodsCart;
