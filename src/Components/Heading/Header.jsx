const Header = ({Heading, SubHeading}) => {
  return (
    <div className="text-center w-3/12 space-y-4 mx-auto my-12
     ">
        <h1 className="mb-2 text-xl text-[#ceb174]">{Heading}</h1>
        <h1 className="uppercase text-4xl font-medium border-y-2 py-2">{SubHeading}</h1>
    </div>
  );
};

export default Header;
