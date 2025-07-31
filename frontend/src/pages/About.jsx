import Title from "../components/Title";

// import { assets } from "../assets/assets";
import Aboutimg from '../assets/techimg.webp'
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={Aboutimg}
          className="w-full object-cover h-[32rem] md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At <strong>ByteCart</strong>, we believe the future belongs to those who innovate—and we’re here to put the latest tech in your hands. Born from a passion for gadgets and a love for seamless technology, ByteCart is your one-stop online shop for cutting-edge electronics that elevate everyday life.
          </p>
          <p>
            Whether you're a tech enthusiast, a professional in need of powerful tools, or someone just looking for smart lifestyle upgrades, ByteCart delivers trusted gadgets at unbeatable prices—with speed, quality, and satisfaction guaranteed.
          </p>

          <p>
            We handpick products based on performance, reliability, and user experience, ensuring that every item on our platform adds real value to your digital life.
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is simple:
            To make the latest and greatest gadgets accessible to everyone, by combining affordability, speed, and support in one seamless shopping experience.


            <ul className="list-disc pl-5">
              We’re committed to:
              <li>
                Curating the best in consumer tech
              </li>
              <li>
                Providing fast and secure delivery
              </li>
              <li>
                Offering excellent customer service
              </li>
              <li>
                Join the ByteCart movement—where tech meets trust.
              </li>
              <li>
                Promoting innovation and digital empowerment
              </li>






            </ul>

          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standard.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping fas never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
