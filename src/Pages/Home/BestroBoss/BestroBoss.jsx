import chef from "./../../../assets/home/chef-service.jpg";

const BestroBoss = () => {
  return (
    <div className="mt-12 relative w-full">
      <img src={chef} alt="" />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-24 py-14 text-center text-black w-[1000px]">
        <h1 className="text-4xl font-semibold my-3">Bestro Boss</h1>
        <p className="text-lg">
          laborum voluptates enim ducimus pariatur necessitatibus. Assumenda
          deleniti quos neque odio a totam dolores facilis mollitia nobis
          eligendi! Veniam officia deleniti odit totam quia aliquam nobis
          accusantium veritatis 
        </p>
      </div>
    </div>
  );
};

export default BestroBoss;
