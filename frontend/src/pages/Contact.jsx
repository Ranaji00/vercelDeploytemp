import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[480px]"
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            3467 South Delhi India <br /> Buglow - 345, South Delhi, India
          </p>
          <p className="text-gray-500">
            {" "}
            Tel: (+91) 9761436322 <br /> Email: customerSupport@gmail.com{" "}
          </p>
          <p className="font-semibold text-xl text-gray-600">
            We Sell the Tech to Technocrates
          </p>
          <p className="text-gray-500">
            Shop More , Buy Better , Buy Faster.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all transition-500">
            Explore Blogs..
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
