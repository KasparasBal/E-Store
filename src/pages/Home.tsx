import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import InformationLine from "../components/InformationLine";
import InformationLine2 from "../components/InformationLine2";

const Home: React.FC = () => {
  return (
    <div>
      <InformationLine />
      <div className=" container mx-auto flex justify-center items-center p-2">
        <Carousel />
      </div>
      <InformationLine2 />

      <Footer />
    </div>
  );
};

export default Home;
