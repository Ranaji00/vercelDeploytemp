import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";
import Mainsection from "../components/common/Mainsection";
import Crausel from '../components/common/Crausel'
import Marquee from '../components/common/Marquee'
import Footer from "../components/Footer";

const Home = () => {
  return (

    <>
      <div className="md:px-16 px-2">
        <Mainsection />
        <LatestCollection />
        <Crausel />
        <BestSeller />
        <Marquee />
        <OurPolicy />
        <NewsletterBox />
      </div>
      <Footer /></>
  );
};

export default Home;
