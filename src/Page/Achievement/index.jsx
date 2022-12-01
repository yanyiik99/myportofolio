import * as Layout from '../../Layouts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from "swiper";
import "swiper/css/effect-cards";
import 'swiper/css';
import './index.css';
import IMAGES from '../../Assets/images/achivement';
import { useState, useEffect } from 'react';
import { FidgetSpinner } from 'react-loader-spinner'

function Achievement() {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false)
    }, 1500);

  }, [])


  return (
    <div className='bg-color-background w-full'>
      <Layout.Navbar />
      
      {
        isLoading ? 
          <div className='h-screen flex justify-center items-center max-w-full'>

            <FidgetSpinner
              visible={true}
              height="100"
              width="100"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
              ballColors={['#B90000', '#650095', '#009220']}
              backgroundColor="#096E96"
            />
          </div>
          : 
          <div>
            <div className='w-full h-screen '>
              <div className='w-full pt-56 '>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards, Autoplay]}
                  className="mySwiper overflow-x-hidden"
                    autoplay={{
                      delay: 3500,
                    }}
                    loop
                >
                    {
                      IMAGES.map((el, idx)=>{
                        return(
                          <SwiperSlide key={idx}>
                            <img src={el.img} alt="" />
                          </SwiperSlide>
                        )
                      })
                    }
                </Swiper>
              </div>
            </div>
          </div>
          
      }

      <Layout.Footer />
    </div>
  )
}

export default Achievement;