import { useContext } from "react";
import { AxiosInstance } from "../routes/axiosInstance";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import { toast } from "react-toastify";
import CartDrawer from "./CartDrawer";

const Navbar = () => {
  let { setIsLoggedInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogout() {
    let res = await AxiosInstance.post("/user/logout");
    if (res.data.success) {
      setIsLoggedInUser(false);
      toast.success("Logged Out");
      navigate("/");
    }
  }

  return (
    <nav className="w-full shadow bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-extrabold text-2xl text-purple-700">QShop</div>
          <div className="hidden md:flex gap-8 font-semibold items-center">
            <a href="/" className="p-2 hover:text-purple-600 transition">Home</a>
            <a href="/products" className="p-2 hover:text-purple-600 transition">Products</a>
            <div  className="p-2 hover:text-purple-600 transition">
              <CartDrawer/>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold hover:from-blue-500 hover:to-purple-600 transition"
            >
              Logout
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button id="mobile-menu-btn" className="text-3xl text-purple-700 focus:outline-none" onClick={() => {
              const menu = document.getElementById('mobile-menu');
              if (menu) menu.classList.toggle('hidden');
            }}>
              &#9776;
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div id="mobile-menu" className="md:hidden hidden px-4 pb-4 bg-white border-t">
        <a href="/" className="block py-2 font-semibold hover:text-purple-600">Home</a>
        <a href="/products" className="block py-2 font-semibold hover:text-purple-600">Products</a>
        <a href="/cart" className="block py-2 font-semibold hover:text-purple-600">Cart</a>
        <button
          onClick={handleLogout}
          className="w-full mt-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold hover:from-blue-500 hover:to-purple-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
