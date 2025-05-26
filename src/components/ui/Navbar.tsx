/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable react/require-default-props */
/* eslint-disable react/boolean-prop-naming */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/jsx-handler-names */
import logo from "../../assets/navbarlogo.png";

function Navbar() {
  return (
    <div className="sticky top-0 z-20  flex h-16 items-center justify-center  bg-white px-6 shadow md:ml-0 md:h-24">
      <img onClick={() => {}} className=" h-16 md:h-24 " src={logo} alt="" />
    </div>
  );
}

export default Navbar;
