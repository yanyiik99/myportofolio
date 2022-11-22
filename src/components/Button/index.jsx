import { AiOutlineSend } from "react-icons/ai";

function Button(props) {
  const btn = props.btn;

  switch(btn){
    case "tertarik": 
      return (
          <button 
            className="text-[#096E96] font-bold px-5 py-2 border-2 border-[#096E96] rounded-md shadow hover:text-white hover:bg-[#096E96] "
          >
            Tertarik!
          </button>
      );

    case "hireMe": 
      return (
        <button
          className={`${props.className} font-bold px-5 py-2 border-2 rounded-md shadow hover:shadow-xl flex items-center`}
        >
          <span className="pr-3 text-xl">
            <AiOutlineSend />
          </span>
          Hire Me
        </button>
      );
    
    case "kembali": 
    return(
      <button
        className="m-10 text-white bg-gray-600 font-bold px-5 py-2 border-2 border-[#096E96] rounded-md shadow "
      >
        Kembali
      </button>
    )
    default: 
      return(
        <div>ERROR</div>
      )
  }
}

export default Button

// COLORS BTN HIRE
/*
  text-gray-200
  border-[#096E96]
  bg-[#096E96]
  hover:text-[#096E96] 
  hover:bg-transparent
*/ 