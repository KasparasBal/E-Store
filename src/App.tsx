import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import Brands from "./pages/Brands";
import Categories from "./pages/Categories";

import Shirts from "./pages/Product_pages/Men/Shirts";
import TshirtsnTanks from "./pages/Product_pages/Men/TShirts&Tanks";
import PantsnChinosS from "./pages/Product_pages/Men/Pants&Chinos";
import Jeans from "./pages/Product_pages/Men/Jeans";
import HoodiesnSweatshirts from "./pages/Product_pages/Men/Hoodies&Sweatshirts";
import JacketsnCoats from "./pages/Product_pages/Men/Jackets&Coats";
import LoungeWear from "./pages/Product_pages/Men/Loungewear";
import Designer from "./pages/Product_pages/Men/Designer";
import SuitPants from "./pages/Product_pages/Men/SuitPants";
import SuitVests from "./pages/Product_pages/Men/SuitVests";
import SkinnyFitSuits from "./pages/Product_pages/Men/SkinnyFitSuits";
import Caps from "./pages/Product_pages/Men/Caps";
import Bags from "./pages/Product_pages/Men/Bags";
import Sneakers from "./pages/Product_pages/Men/Sneakers";
import Boots from "./pages/Product_pages/Men/Boots";
import Shoes from "./pages/Product_pages/Men/Shoes";
import Loafers from "./pages/Product_pages/Men/Loafers";
import Socks from "./pages/Product_pages/Men/Socks";
import Running from "./pages/Product_pages/Men/Running";
import Outdoors from "./pages/Product_pages/Men/Outdoors";
import GymnTraining from "./pages/Product_pages/Men/Gym&Training";
import LifeStyle from "./pages/Product_pages/Men/LifeStyle";
import ActiveWear from "./pages/Product_pages/Men/ActiveWear";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/m-shirts" element={<Shirts />} />
        <Route path="/m-tshirts-tanks" element={<TshirtsnTanks />} />
        <Route path="/m-pants-chinos" element={<PantsnChinosS />} />
        <Route path="/m-jeans" element={<Jeans />} />
        <Route
          path="/m-hoodies-sweatshirts"
          element={<HoodiesnSweatshirts />}
        />
        <Route path="/m-jackets-coats" element={<JacketsnCoats />} />
        <Route path="/m-loungewear" element={<LoungeWear />} />
        <Route path="/m-designer" element={<Designer />} />
        <Route path="/m-suitpants" element={<SuitPants />} />
        <Route path="/m-suitvests" element={<SuitVests />} />
        <Route path="/m-skinnyfitsuits" element={<SkinnyFitSuits />} />
        <Route path="/m-caps" element={<Caps />} />
        <Route path="/m-bags" element={<Bags />} />
        <Route path="/m-sneakers" element={<Sneakers />} />
        <Route path="/m-boots" element={<Boots />} />
        <Route path="/m-shoes" element={<Shoes />} />
        <Route path="/m-loafers" element={<Loafers />} />
        <Route path="/m-socks" element={<Socks />} />
        <Route path="/m-running" element={<Running />} />
        <Route path="/m-outdoors" element={<Outdoors />} />
        <Route path="/m-gym-traning" element={<GymnTraining />} />
        <Route path="/m-lifestyle" element={<LifeStyle />} />
        <Route path="/m-activewear" element={<ActiveWear />} />

        <Route path="/brands" element={<Brands />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
