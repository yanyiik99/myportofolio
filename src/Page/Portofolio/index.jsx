import * as Layout from '../../Layouts';
import bgPorto from '../../Assets/images/bg-porto.png';
import * as Component from '../../components';
import { AiOutlineFileSearch } from "react-icons/ai";
import { useEffect, useState } from 'react';
import { FidgetSpinner } from 'react-loader-spinner'



function Portofolio() {
  // const blue = 2;
  // const red = 2;
  // const purple = 2;
  // const green = 2;

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false)
    }, 3000);

  }, [])




  return (
    <div className='bg-[#F6F7FF]'>
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
        <>
          {/* Background */}
          <div 
            className=''
            style={{
              backgroundImage: `url(${bgPorto})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed", height: "60vh"
            }}>
              <h1 className='pt-48 text-5xl lg:text-7xl text-center font-semibold text-white uppercase'>Portofolio Ku</h1>
            <Component.Button btn="hireMe" className="text-white hover:bg-white hover:text-gray-700 max-w-xs m-auto mt-10"/>
          </div>
    
          <div className='flex items-center mt-16 container text-gray-800 mx-auto px-2 md text-3xl -mb-14 md:max-w-3xl lg:max-w-5xl font-bold '>
            <AiOutlineFileSearch  />
            <h3>Project</h3> 
          </div>
          <Component.CardPorto />
          <Layout.Footer />
        
        </>
      }
    </div>
  )
}

export default Portofolio