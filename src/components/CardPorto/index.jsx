import { AiOutlineArrowRight } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function CardPorto() {
  const navigate = useNavigate()
  const data =  useSelector((state) => state);
  const datas = data.datas;
  // Mengecek Kondisi apakah bilangan ganjil atau genap
  const evenArr = (value) => {
    return Math.abs(value % 2) === 0;
  }

  return (
    <>
      {
        datas?.map((el, idx)=>{
          return(
            evenArr(2) === (idx % 2 === 0) ? 
            <div className='p-2' key={idx}>
              <div className= 'mt-20 max-w-md m-auto md:max-w-3xl lg:max-w-5xl md:flex rounded-lg bg-white border-4 shadow-xl border-[#2A7CAB]' >
                <div className='flex justify-center items-center rounded-md m-4 overflow-hidden max-w-lg md:max-w-5xl'>
                  <img src={el.image} className="z-0 w-full block transition-all hover:scale-x-105 hover:scale-y-105" alt="" />
                </div>
                <div className='mt-8 px-4 max-w-md mx-auto items-start justify-center flex flex-col'>
                  <span className='font-bold text-green-600'>{el.category}</span>
                  <h1 className='text-4xl font-bold mt-3'>{el.title}</h1>
                  <p className='mt-7 text-gray-400'>{el.desc}</p>
                    <div className='my-8 text-[#2A7CAB] font-bold flex items-center cursor-pointer' onClick={()=>{
                      navigate(`/project/${el.link}`)
                    }}>
                      Lihat Detail
                      <span className='px-3'>
                        <AiOutlineArrowRight />
                      </span>
                  </div>
                </div>
              </div> 
            </div>
            :
            <div className='p-2' key={idx}>
              <div className='mt-20 max-w-md m-auto md:max-w-3xl lg:max-w-5xl md:flex md:flex-row-reverse rounded-lg bg-white border-4 shadow-xl border-[#2A7CAB]'>
                  <div className='flex justify-center items-center rounded-md m-4 overflow-hidden max-w-lg md:max-w-5xl'>
                  <img src={el.image} className="w-full block transition-all hover:scale-x-105 hover:scale-y-105" alt="" />
                </div>
                <div className='mt-8 px-4 max-w-md mx-auto items-start justify-center flex flex-col'>
                  <span className='font-bold text-green-600'>{el.category}</span>
                  <h1 className='text-4xl font-bold mt-3'>{el.title}</h1>
                  <p className='mt-7 text-gray-400'>{el.desc}</p>
                    <div className='my-8 text-[#2A7CAB] font-bold flex items-center cursor-pointer' onClick={() => {
                      navigate(`/project/${el.link}`)
                    }}>
                    Lihat Detail
                    <span className='px-3'>
                      <AiOutlineArrowRight />
                    </span>
                  </div>
                </div>
              </div>   

            </div>
          )
        })
      }



    </>
  )
}

export default CardPorto