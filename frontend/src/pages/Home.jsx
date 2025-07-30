import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";
import Mainsection from "../components/common/Mainsection";
import Crausel from '../components/common/Crausel'
import Marquee from '../components/common/Marquee'

const Home = () => {
  return (
    <div>
      <Mainsection/>
      <LatestCollection />
      <Crausel/>
      <BestSeller />
      <Marquee/>
      <OurPolicy />
      <NewsletterBox />


    </div>
  );
};

export default Home;
