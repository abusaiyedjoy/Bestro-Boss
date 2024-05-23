const foodCards = ({item}) => {
    const {name, image, price, recipe}=item;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className=" p-2">
          <img
            src={image}
            alt="Foods"
            className="rounded-xl"
          />
        </figure>
        <p className="absolute top-4 right-4 px-3 bg-gray-900 text-white rounded-md">{price}</p>
        <div className="card-body items-center text-gray-100 text-center">
          <h2 className="card-title text-2xl ">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="overflow-hidden text-center p-2 h-12 bg-gray-100 text-black border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
              Add to Cart
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-[#d2c3a5] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-[#d1bb8c] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-[#ceb174] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                Cart
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default foodCards;
