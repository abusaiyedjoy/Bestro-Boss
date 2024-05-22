import { Link } from "react-router-dom";

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
          <Link to="/shop">Our Shop</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </>
  );

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
        <Link to="/signIn" className="btn">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
