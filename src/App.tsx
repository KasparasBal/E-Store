import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

//Men

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

//Women
import WShirts from "./pages/Product_pages/Woman/WShirts";
import CropTops from "./pages/Product_pages/Woman/CropTops";
import PantsLeggings from "./pages/Product_pages/Woman/PantsLeggings";
import WJeans from "./pages/Product_pages/Woman/WJeans";
import Dresses from "./pages/Product_pages/Woman/Dresses";
import WCoats from "./pages/Product_pages/Woman/wCoats";
import SummerDresses from "./pages/Product_pages/Woman/SummerDresses";
import WhiteDresses from "./pages/Product_pages/Woman/WhiteDresses";
import PartyDresses from "./pages/Product_pages/Woman/PartyDresses";
import FormalDresses from "./pages/Product_pages/Woman/FormalDresses";
import BlackDresses from "./pages/Product_pages/Woman/BlackDresses";
import ShirtDresses from "./pages/Product_pages/Woman/ShirtDresses";
import WCAPS from "./pages/Product_pages/Woman/wCaps";
import WBackpacks from "./pages/Product_pages/Woman/WBackpacks";
import Sunglasses from "./pages/Product_pages/Woman/Sunglasses";
import WHats from "./pages/Product_pages/Woman/WHats";
import Bracelets from "./pages/Product_pages/Woman/Bracelets";
import Earrings from "./pages/Product_pages/Woman/Earrings";
import Necklaces from "./pages/Product_pages/Woman/Necklaces";
import Rings from "./pages/Product_pages/Woman/Rings";
import WBoots from "./pages/Product_pages/Woman/wBoots";
import WSneakers from "./pages/Product_pages/Woman/WSneakers";
import WRunning from "./pages/Product_pages/Woman/WRunning";
import WOutdoors from "./pages/Product_pages/Woman/WOutdoors";
import YogaStudio from "./pages/Product_pages/Woman/YogaStudio";
import WGymTraining from "./pages/Product_pages/Woman/WGymTraining";
import SwimwearBeachWear from "./pages/Product_pages/Woman/SwimwearBeachWear";
import ProductDetail from "./pages/ProductDetail";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="productDetail/:id" element={<ProductDetail />} />

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

        <Route path="/w-shirts" element={<WShirts />} />
        <Route path="/w-croptops" element={<CropTops />} />
        <Route path="/w-pants-leggings" element={<PantsLeggings />} />
        <Route path="/w-jeans" element={<WJeans />} />
        <Route path="/w-dresses" element={<Dresses />} />
        <Route path="/w-coats" element={<WCoats />} />
        <Route path="/w-summerdresses" element={<SummerDresses />} />
        <Route path="/w-whitedresses" element={<WhiteDresses />} />
        <Route path="/w-partydresses" element={<PartyDresses />} />
        <Route path="/w-formaldresses" element={<FormalDresses />} />
        <Route path="/w-blackdresses" element={<BlackDresses />} />
        <Route path="/w-shirtdresses" element={<ShirtDresses />} />
        <Route path="/w-formaldresses" element={<FormalDresses />} />
        <Route path="/w-caps" element={<WCAPS />} />
        <Route path="/w-backpacks" element={<WBackpacks />} />
        <Route path="/w-sunglasses" element={<Sunglasses />} />
        <Route path="/w-hats" element={<WHats />} />
        <Route path="/w-bracelets" element={<Bracelets />} />
        <Route path="/w-earrings" element={<Earrings />} />
        <Route path="/w-necklaces" element={<Necklaces />} />
        <Route path="/w-rings" element={<Rings />} />
        <Route path="/w-sneakers" element={<WSneakers />} />
        <Route path="/w-boots" element={<WBoots />} />
        <Route path="/w-running" element={<WRunning />} />
        <Route path="/w-outdoors" element={<WOutdoors />} />
        <Route path="/w-yoga-studio" element={<YogaStudio />} />
        <Route path="/w-gym-training" element={<WGymTraining />} />
        <Route path="/w-swimwear-beachwear" element={<SwimwearBeachWear />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
