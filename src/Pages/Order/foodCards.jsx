import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
 import toast from "react-hot-toast";
import useAxios from "../../Hook/useAxios";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = useAxios();


  const addToCart = (food) => {
    console.log(food, user.email);
    if (user && user.email) {
      const menuCart ={
        menuId: _id,
        email: user.email,
        name,
        image,
        price

      }
      axiosSecure.post("/carts", menuCart)
      .then(res=>{
        if(res.data.insertedId){
          toast.success('Add to Cart Successfully!'),
          console.log('Added successfully');

        }
      })
    } else {
      Swal.fire({
        title: "Not logged in!",
        text: "You need to sign in to add items to your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sign In",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/signIn');
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="p-2">
        <img src={image} alt={name} className="rounded-xl" />
      </figure>
      <p className="absolute top-4 right-4 px-3 bg-gray-900 text-white rounded-md">
        ${price}
      </p>
      <div className="card-body items-center text-gray-100 text-center">
        <h2 className="card-title text-2xl">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => addToCart(item)}
            className="overflow-hidden text-center p-2 h-12 bg-gray-100 text-black border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
          >
            Add to Cart
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-[#d2c3a5] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-[#d1bb8c] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-[#ceb174] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
              Add to Cart
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
