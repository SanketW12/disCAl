import logo from "../../assets/navbarlogo.png";

function Navbar() {
  return (
    <div className="sticky top-0 z-20  flex h-16 items-center justify-center  bg-white px-6 shadow md:ml-0 md:h-24">
      <img onClick={() => {}} className=" h-16 md:h-24 " src={logo} alt="" />
    </div>
  );
}

export default Navbar;
