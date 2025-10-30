import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Person3Icon from "@mui/icons-material/Person3";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../context/ProductsContextProvider";

const items = [
  <div className="item" data-value="1">
    <img src="/assets/image1.png" alt="" />
  </div>,
  <div className="item" data-value="2">
    <img src="/assets/image1.png" alt="" />
  </div>,
  <div className="item" data-value="3">
    <img src="/assets/image1.png" alt="" />
  </div>,
];

const categoryList = [
  {
    id: 1,
    icon: <Person3Icon fontSize="large" />,
    title: "Men",
  },
  {
    id: 2,
    icon: <Person3Icon fontSize="large" />,
    title: "Women",
  },
  {
    id: 3,
    icon: <Person3Icon fontSize="large" />,
    title: "Kids",
  },
  {
    id: 4,
    icon: <Person3Icon fontSize="large" />,
    title: "Electronics",
  },
  {
    id: 5,
    icon: <Person3Icon fontSize="large" />,
    title: "Sports",
  },
];

const brandsList = [
  {
    id: 1,
    icon: <Person3Icon fontSize="large" />,
    title: "H&M",
  },
  {
    id: 2,
    icon: <Person3Icon fontSize="large" />,
    title: "Adidas",
  },
  {
    id: 3,
    icon: <Person3Icon fontSize="large" />,
    title: "Nike",
  },
  {
    id: 4,
    icon: <Person3Icon fontSize="large" />,
    title: "Puma",
  },
  {
    id: 5,
    icon: <Person3Icon fontSize="large" />,
    title: "Zara",
  },
];

const HomePage = () => {
  let { allProducts } = useContext(ProductsContext);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto w-full">
        <div className="py-4 px-2">
          <AliceCarousel
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={2000}
            animationDuration={1000}
            animationType="slide"
            infinite
            touchTracking={false}
            disableDotsControls
            disableButtonsControls
            items={items.map((item, idx) => (
              <div key={idx} className="w-full h-40 sm:h-64 md:h-80 flex items-center justify-center">
                {item}
              </div>
            ))}
          />
        </div>

        <section className="py-8 px-2">
          <header className="font-extrabold text-3xl sm:text-4xl mb-6">
            <h1 className="text-center">Shop By Category</h1>
          </header>
          <article className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {categoryList.map((category, idx) => (
              <div key={idx} className="flex flex-col items-center px-4 py-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition">
                <figure className="text-2xl mb-2">{category.icon}</figure>
                <h3 className="text-center text-base sm:text-lg font-semibold">{category.title}</h3>
              </div>
            ))}
          </article>
        </section>

        <section className="py-8 px-2">
          <header className="font-extrabold text-3xl sm:text-4xl mb-6">
            <h1 className="text-center">Shop By Brands</h1>
          </header>
          <article className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {brandsList.map((brand, idx) => (
              <div key={idx} className="flex flex-col items-center px-4 py-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition">
                <figure className="text-2xl mb-2">{brand.icon}</figure>
                <h3 className="text-center text-base sm:text-lg font-semibold">{brand.title}</h3>
              </div>
            ))}
          </article>
        </section>

        <section className="py-8 px-2">
          <header className="font-extrabold text-3xl sm:text-4xl mb-6">
            <h1 className="text-center">Featured Products</h1>
          </header>
          <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allProducts.length === 0 ? (
              <h1 className="text-center col-span-full">No Products Available</h1>
            ) : (
              allProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </article>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
