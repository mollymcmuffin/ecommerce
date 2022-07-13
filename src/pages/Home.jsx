import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";

const home = () => {
  return (
    <>
      <Annoucement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </>
  );
};

export default home;
