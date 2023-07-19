/* eslint-disable react/no-unescaped-entities */
import nurse from "../assets/nurse5.png";
import { Btn } from "./index";
function Header3() {
  return (
    <div className="header_parent w-[90%] sm:w-[90%]  my-[0px] mx-[auto] flex items-center flex-col sm:flex-row  ">
        <div className="">
        <div className="header_text  p-4 flex flex-col  sm:items-start  mt-5 sm:mt-0 relative  ">
          <p className="text-white text-[16px] font-bold tracking-[0.1px] leading-[24px]   mt-4 sm:mt-10 ">
            Join Us
          </p>
          <h1 className=" text-4xl sm:text-5xl font-title font-bold text-white sm:leading-[67px] tracking-[0.2px]  mt-5 text-start ">
           Customized<br />Telehealth consultations<br />for you
          </h1>
         
          <div className="banner-btn px-0 mt-0 sm:mt-5 flex justify-between items-center ">
            <Btn styles="bg-btn-color text-white py-[15px] px-[25px]" texts="Book Appointment" />
            
          </div>

          <div className="angles"></div>
          <div className="angles2"></div>
          </div>
          
</div>

        <div className="header_image hidden sm:block mt-4 sm:mt-0  h-[500px] ">
         
            <img
              src={nurse}
              alt="image of a nurse"
              className="w-full h-full"
            />
         
        
        </div>

      </div>
  )
}

export default Header3;