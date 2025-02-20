/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import nurse from "../assets/nurse2.png";
import { motion } from "framer-motion";
import { Btn } from "./index";
function Header1(props) {
  const { bookAppointment, scrollToSection } = props;
  return (
    <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{type:"tween", duration:0.5 }} exit={{x:-10, opacity:0, transition:{duration:1}}}  className=" h-[100%] w-[98%]  mx-auto sm:h-[100%] grid place-items-end">

      <div className="  header_parent w-[100%] h-full sm:h-[100%]  sm:w-[100%]  lg:w-[90%] bg-transparent  relative mx-auto  ">
        
      
          <div className="header_text   lg:p-0 flex flex-col  items-start  mt-0  sm:mt-0 w-[60%] absolute left-0 bottom-0 sm:bottom-auto sm:top-[50%] sm:translate-y-[-50%] ">
            <motion.h1 animate={{x:0,opacity:1}} initial={{x:50, opacity:0}} transition={{type:"tween", duration:1 ,delay:1}} className="  text-2xl  sm:text-[35px] md:text-[45px] md:leading-[70px] lg:text-5xl xl:text-6xl    font-title font-medium text-white  leading-[35px] sm:leading-[55px] lg:leading-[80px] xl:leading-[90px] tracking-[0.2px] text-start  mt-10 sm:text-start  ">
            Pharmacy Services <br />From Home
            </motion.h1>
            <motion.div onClick={()=>scrollToSection(bookAppointment)} animate={{y:0, opacity:1}} initial={{y:10, opacity:0}} transition={{type:"tween", duration:1 ,delay:2}} className="banner-btn px-0 mt-2 sm:mt-10 mb-5 flex justify-between items-center ">
            <Btn styles="bg-btn-color text-[16px] py-[10px] px-[13px] text-white md:py-[15px] md:px-[25px]" texts="Appointment" />
            
            </motion.div>

          </div>
            
        

        <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{type:"tween", duration:1 }} className="header_image  sm:block w-[50%] sm:w-[45%] right-0 absolute sm:top-0 bottom-0 ">
         
         
            <img
              src={nurse}
              alt="image of a nurse"
              className=" absolute bottom-0"
            />
         
        
        </motion.div>

      </div>
</motion.div>
  )
}

export default Header1;
