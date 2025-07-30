// AutoScrollMarquee.jsx
import { motion } from "framer-motion";
import apple from '../../assets/applelog.png'
import boat from '../../assets/boat.png'
import canon from '../../assets/canon.png'
import sony from '../../assets/sony.png'
import samsung from '../../assets/samsung.png'
import hp from '../../assets/hp.png'

const Marquee = () => {
    return (<>

        
        <div className="overflow-hidden bg-white py-4 w-full">

            
            <motion.div
                className="flex gap-8 text-white text-xl whitespace-nowrap"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear"
                }}
            >

                <img src={apple} className=" w-32    object-contain  " />
                <img src={boat} className=" w-32  object-contain  " />
                <img src={canon} className="  w-32  object-contain  " />
                <img src={sony} className=" w-32   object-contain  " />
                <img src={hp} className=" w-32  object-contain  " />
                <img src={samsung} className=" w-32  object-contain  " />
                <img src={apple} className=" w-32    object-contain  " />
                <img src={boat} className=" w-32  object-contain  " />
                <img src={canon} className="  w-32  object-contain  " />
                <img src={sony} className=" w-32   object-contain  " />
                <img src={hp} className=" w-32  object-contain  " />
                <img src={samsung} className=" w-32  object-contain  " />
                <img src={apple} className=" w-32    object-contain  " />
                <img src={boat} className=" w-32  object-contain  " />
                <img src={canon} className="  w-32  object-contain  " />
                <img src={sony} className=" w-32   object-contain  " />
                <img src={hp} className=" w-32  object-contain  " />
                <img src={samsung} className=" w-32  object-contain  " />
              



            </motion.div>
        </div>

        {/* opposite */}

        <div className="overflow-hidden bg-white py-4 w-full">
            <motion.div
                className="flex gap-8 text-white text-xl whitespace-nowrap"
                animate={{ x: ["100%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear"
                }}
            >

                <img src={apple} className=" w-32    object-contain  " />
                <img src={boat} className=" w-32  object-contain  " />
                <img src={canon} className="  w-32  object-contain  " />
                <img src={sony} className=" w-32   object-contain  " />
                <img src={hp} className=" w-32  object-contain  " />
                <img src={samsung} className=" w-32  object-contain  " />
                <img src={apple} className=" w-32    object-contain  " />
                <img src={boat} className=" w-32  object-contain  " />
                <img src={canon} className="  w-32  object-contain  " />
                <img src={sony} className=" w-32   object-contain  " />
                <img src={hp} className=" w-32  object-contain  " />
                <img src={samsung} className=" w-32  object-contain  " />
                <img src={apple} className=" w-32    object-contain  " />
                <img src={boat} className=" w-32  object-contain  " />
                <img src={canon} className="  w-32  object-contain  " />
                <img src={sony} className=" w-32   object-contain  " />
                <img src={hp} className=" w-32  object-contain  " />
                <img src={samsung} className=" w-32  object-contain  " />
              



            </motion.div>
        </div>

        </>
    );
};

export default Marquee;
