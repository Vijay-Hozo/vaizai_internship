// import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div>
          <h1 className="text-xl font-bold uppercase">Shop Ease</h1>
        </div>

        <div className="space-x-4 ">
          <a>Home</a>
          <a>About</a>
          <a>Products</a>
          <a>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
