

const Navbar = () => {
    return (
        <div class="navbar bg-base-100">
        <div class="navbar-start">
          <a class="btn btn-ghost text-xl">Boundless Books</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Listed Books</a></li>
            <li><a>Page to Read</a></li>
          </ul>
        </div>
        <div class="navbar-end">
          <a class="btn">Sign In</a>
          <a class="btn">Sign Up</a>
        </div>
      </div>
    );
};

export default Navbar;