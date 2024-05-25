import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useCart from "../../Hook/useCart";

const Navbar = () => {
  const navlinks = (
    <>
      <ul className="menu menu-horizontal px-1 text-xl">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/shop/salad">Our Shop</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </>
  );
  const { user, signOutUser } = useContext(AuthContext);
  const [cart]= useCart()
  const handleLogOut = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar fixed z-10 bg-opacity-35 container mx-auto bg-base-100 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl">Bestro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">{navlinks}</div>
      <div className="navbar-end">
        <div className="mr-3">
          <Link to="/dashboard/cart" className="btn">
            Cart
            <div className="badge bg-[#ceb174]">+{cart.length}</div>
          </Link>
        </div>
        <div className="">
          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className="bg-[#ceb174] text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-[#c8a65b] active:bg-[#c6952d] focus:outline-none"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/signIn" className="btn">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
