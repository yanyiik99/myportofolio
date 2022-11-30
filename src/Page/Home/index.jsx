import { useEffect, useState } from 'react';
import { Banner } from '../../components';
import * as Layout from '../../Layouts';
import { FidgetSpinner } from 'react-loader-spinner'

function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false)
    }, 1500);

  }, [])

  return (
    <>
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
            <Banner />
          </>
      }
    </>
  )
}

export default Home