import { BsFillCircleFill } from "react-icons/bs";
import * as Component from '..';
import ari from '../../Assets/images/ari.webp';
import js from '../../Assets/images/js.png';
import rc from '../../Assets/images/react.png';
import fg from '../../Assets/images/figma.png';
import ps from '../../Assets/images/ps.png';
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../../Bootstraps/actions";
import classNames from 'classnames';
import Colors from '../../Styles/Colors/Colors.module.css';
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


function Banner() {
  const dispatch = useDispatch();
  const {blue, red, purple, green, datas} = useSelector((state)=>state.data);
  // console.log(datas)

  // console.log(blue)
  const blueHandling = () => {
    dispatch(
      setColor({blue: true, green: false, red: false, purple: false, datas: datas })
    )
  }
  // console.log(red)
  const redHandling = ()=>{
    dispatch(setColor({ red: true, purple: false, green: false, blue: false, datas: datas }))
  }
  // console.log(purple)
  const purpleHandling = () => {
    dispatch(setColor({ purple: true, red: false, green: false, blue: false, datas: datas }))
  }
  // console.log(green)
  const greenHandling = () => {
    dispatch(setColor({ green: true, red: false, purple: false, blue: false, datas: datas }))
  }

  
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, [])





  return (
    <div className="h-full lg:h-screen lg:overflow-y-hidden">
      <div className="flex flex-col-reverse lg:flex-row  overflow-y-hidden">

        {/* Left Side */}
        <div className="container px-5 lg:px-16 pt-10 lg:pt-40 max-w-full lg:w-2/4 h-screen text-gray-800 bg-[#F6F7FF] overflow-y-hidden">

          <div className='flex items-center justify-center lg:justify-start container max-3xl m-auto lg:m-0'>
            <h1 className='text-8xl font-extrabold' data-aos="fade-right" data-aos-duration="2000">I'M</h1>
            <div className='px-8 text-3xl font-bold flex flex-col justify-between items-start'>
              <p data-aos="fade-down" data-aos-duration="2000">Ari Pramana</p>
              <p className={classNames('text-xl lg:text-4xl',
                blue === true ? Colors.blue :
                red === true ? Colors.red : 
                purple === true ?  Colors.purple : 
                green === true ? Colors.green : '') }
              >
                Junior Front End
              </p>
            </div>
          </div>

          <p className='text-gray-400 sm:text-center lg:text-start font-semibold mt-10 max-w-md m-auto lg:m-1 lg:mt-10'>
            Impian tidak dapat terwujud dengan sendirinya, akan tetapi impian akan datang ketika kita berusaha untuk meraihnya.
          </p>
          
          {/* Button */}
          <div className='mt-10 flex sm:justify-center lg:justify-start'>
            <Component.Button btn="hireMe" className={
              classNames('text-xs', 
                blue === true ? Colors.blueBtn :
                red === true ? Colors.redBtn :
                purple === true ? Colors.purpleBtn :
                green === true ? Colors.greenBtn : '')
            }/>

            {/* ICON */}
            <Component.IconsSosmed 
              className="flex pl-10" 
              aClassName="text-4xl ml-6"
            />

            
          </div>

          {/* Statistik */}
          <div className="flex text-2xl font-bold mt-14 max-w-md sm:m-auto sm:mt-20 lg:m-0 lg:mt-20">
            <p className="">+ 2 Project Done</p>
            <p className="pl-8">+ 10 Mini Project</p>
          </div>

          {/* Change Color */}
          <div className="flex items-center mt-20 sm:justify-center lg:justify-start">
            <p className={classNames('text-xl font-bold', 
              blue === true ? Colors.blue :
              red === true ? Colors.red :
              purple === true ? Colors.purple :
              green === true ? Colors.green : ''
              )}>Choose Color</p>
            <div className="flex items-center">
              <div 
                onClick={()=>{
                  blueHandling()
                }} 
                className="ml-10 cursor-pointer"
              >
                <span className={classNames(Colors.blue, blue === true ? "text-5xl" : "text-4xl")}>
                  <BsFillCircleFill />
                </span>
              </div>

              <div 
                onClick={()=>{
                  redHandling()
                }} 
                className="ml-10 cursor-pointer"
              >
                <span className={classNames( Colors.red, red === true ? "text-5xl" : "text-4xl")}>
                  <BsFillCircleFill />
                </span>
              </div>


              <div
                onClick={() => {
                  purpleHandling()
                }} 
                className="ml-10 cursor-pointer"
                >
                <span className={classNames(Colors.purple, purple === true ? "text-5xl" : "text-4xl")}>
                  <BsFillCircleFill />
                </span>
                </div>

              <div 
                onClick={() => {
                  greenHandling()
                }} 
                className="ml-10 cursor-pointer"
              >
                <span className={classNames(Colors.green, green === true ? "text-5xl" : "text-4xl")}>
                  <BsFillCircleFill />
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 relative bottom-0 ">
            <svg className={classNames("fill-current",
              blue === true ? Colors.blue :
              red === true ? Colors.red :
                purple === true ? Colors.purple :
              green === true ? Colors.green : ''
            )} stroke="currentColor" width="154" height="154" viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path  d="M154 77C154 119.526 119.526 154 77 154C34.4741 154 0 119.526 0 77C0 34.4741 34.4741 0 77 0C119.526 0 154 34.4741 154 77ZM27.8982 77C27.8982 104.118 49.8818 126.102 77 126.102C104.118 126.102 126.102 104.118 126.102 77C126.102 49.8818 104.118 27.8982 77 27.8982C49.8818 27.8982 27.8982 49.8818 27.8982 77Z"/>
            </svg>
          </div>

         

        </div>




        {/* Right Side */}
        <div className="text-3xl pt-28 max-w-full lg:w-2/4 relative -z-10 h-[99vh] bg-gradient-to-b from-[#025381] to-[#7ACFFF]">
          <div className="flex">
            <marquee className="text-white text-lg" behavior="scroll" direction="left" >Goals
              <span className="pl-24">kuliah</span> 
              <span className="pl-24">web design</span> 
              <span className="pl-24">bali</span> 
              <span className="pl-24">Growing</span>
              <span className="pl-24">20th</span>
              <span className="pl-24">NeverGiveUp</span>
            </marquee>
          </div>
          <img className='absolute right-20 top-60' src={js} alt="js" width="auto" height="100%" data-aos="zoom-in" data-aos-duration="300"/>
          <img className='absolute top-40 left-20' src={rc} alt="react" width="auto" height="100%" data-aos="zoom-in" data-aos-duration="600"/>
          <img className='absolute bottom-40 left-10' src={fg} alt="figma"  width="auto" height="100%" data-aos="zoom-in" data-aos-duration="900"/>
          <img className='absolute bottom-32 right-12' src={ps} alt="photoshop" width="auto" height="100%" data-aos="zoom-in" data-aos-duration="1200"/>
          {/* Image */}
          <div className='flex justify-center items-end'>
            <img className=" absolute bottom-0 -z-10" data-aos="fade-up" data-aos-offset="0" data-aos-duration="2500" src={ari} alt="ari" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner