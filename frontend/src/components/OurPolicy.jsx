import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex px-8 md:px-4 justify-around mb-8 gap-12 md:gap-1 text-center py-20 text-xs md:text-xs text-gray-700">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold"> Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy.</p>
      </div>

      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold"> 7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy.</p>
      </div>

      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We provide 24/7 customer support.</p>
      </div>
    </div>
  );
};

export default OurPolicy;
