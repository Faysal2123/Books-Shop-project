const NavBar = () => {
    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              aria-label="Open navigation menu"
            >
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              <li>
                <a  aria-label="Home">Home</a>
              </li>
              <li>
                <a  aria-label="Listed Books">Listed Books</a>
              </li>
              <li>
                <a  aria-label="Pages to Read">Pages to Read</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-lg lg:text-2xl font-bold" href="#home">
            Books-A-Million
          </a>
        </div>
  
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base">
            <li>
              <a  aria-label="Home">Home</a>
            </li>
            <li>
              <a  aria-label="Listed Books">Listed Books</a>
            </li>
            <li>
              <a  aria-label="Pages to Read">Pages to Read</a>
            </li>
          </ul>
        </div>
  
        <div className="navbar-end gap-3">
          <a
            href="#sign-in"
            className="btn px-2 py-2 md:px-4 md:py-3 rounded-md bg-[#23BE0A] md:font-semibold text-white"
            aria-label="Sign In"
          >
            Sign In
          </a>
          <a
            href="#sign-up"
            className="btn px-2 py-2 md:px-4 md:py-3  rounded-md bg-[#59C6D2] md:font-semibold text-white"
            aria-label="Sign Up"
          >
            Sign Up
          </a>
        </div>
      </div>
    );
  };
  
  export default NavBar;
  