
const MenuDetails = ({item}) => {
    const {name, image, price, recipe}=item;
    return (
        <div className="flex justify-start items-center gap-3">
            <div className="">
                <img style={{borderRadius: '0 200px 200px 200px'}} src={image} width="80px" alt="" />
            </div>
            <div className="">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-medium ">{name}---</h1>
                    <p className="text-2xl font-medium text-[#ceb174]">{price}</p>
                </div>
                <p>{recipe}</p>
            </div>
        </div>
    );
};

export default MenuDetails;