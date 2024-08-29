import { CiUser, CiSearch } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isVisible }) => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/login");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-transform duration-500 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="text-sm text-center py-2 text-white uppercase ">
        Free TR Delivery and Returns
      </div>

      <nav className="bg-white shadow-md py-4 px-6 mx-auto w-[98%] max-w-full">
        <div className="flex justify-between items-center">
          <div className="flex space-x-8 font-semibold">
            <a href="/" className="text-gray-700 hover:text-black">
              For Beginners
            </a>
            <a href="/" className="text-gray-700 hover:text-black">
              Microcontrollers
            </a>
            <a href="/" className="text-gray-700 hover:text-black">
              Sensors
            </a>
            <a href="/" className="text-gray-700 hover:text-black">
              Projects
            </a>
            <a href="/" className="text-gray-700 hover:text-black">
              About Us
            </a>
          </div>

          <div className="text-2xl font-bold absolute left-1/2 transform -translate-x-1/2">
            <a href="/">EmporiA</a>
          </div>

          <div className="flex space-x-4 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border rounded-lg py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            <CiUser
              className="w-6 h-6 cursor-pointer text-gray-700"
              onClick={handleSearchClick}
            />

            <AiOutlineShopping className="w-6 h-6 text-gray-700 cursor-pointer" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
