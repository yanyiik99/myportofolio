import { Link, useLocation } from "react-router-dom";
import * as Component from '../../components';
import classNames from 'classnames';
import { AiOutlineLoading } from "react-icons/ai";
import { BsFilterRight, BsX } from "react-icons/bs";
import Colors from '../../Styles/Colors/Colors.module.css'
import { useSelector } from "react-redux";
import { useState } from "react";

function Navbar() {
  const links = [
    {
      label: "Home",
      navigate: "myportofolio/"
    },
    {
      label: "Portofolio",
      navigate: "/portofolio"
    },
    {
      label: "Achievement",
      navigate: "/achievement"
    },
  ]

  const currentLink = useLocation().pathname;
  const { blue, red, purple, green } = useSelector((state) => state);

  const [nav, setNav] = useState(false)

  const handlingNav = () => {
    setNav(!nav)
  }

  return (
    <div className="w-full bg-white shadow-md py-6 z-10 fixed">
      <nav className="w-4/5 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/">
            <h2 className={classNames("text-2xl font-bold", 
              blue === true ? Colors.blue :
              red === true ? Colors.red :
              purple === true ? Colors.purple :
              green === true ? Colors.green : ''
              )}> <span className="flex">YikDev. <AiOutlineLoading /></span>
            </h2>
          </Link>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <ul className="flex">
              {
                links.map((el, i) => {
                  return(
                    <li className="px-6" key={i}>
                      {
                        (currentLink === el.navigate) ? 
                          <Link to={el.navigate} className={classNames("font-bold",
                            blue === true ? Colors.blue :
                            red === true ? Colors.red :
                            purple === true ? Colors.purple :
                            green === true ? Colors.green : '')} >{el.label}</Link> :
                          <Link to={el.navigate} className={classNames(Colors.regularLink)} >{el.label}</Link> 
                      }
                    </li>
                  )})
              }
          </ul>
        </div>
        <div className="hidden lg:block">
          <Component.Button btn="tertarik"/>
        </div>
        

        {/* Mobile View */}
        <div className="text-3xl lg:hidden" onClick={handlingNav}>
          {
            !nav ? <BsFilterRight  /> : <BsX  />
          }
        </div>
        <div className={!nav ? "absolute right-0 -z-10 -top-96 bg-white ease-linear duration-500 opacity-0 lg:hidden" : "absolute right-0 -z-10 pt-80 bg-white ease-out duration-500 lg:hidden"}>
          <ul className="flex flex-col">
            {
              links.map((el, i) => {
                return (
                  <li className="px-6 pb-10" key={i}>
                    {
                      (currentLink === el.navigate) ?
                        <Link to={el.navigate} className={classNames("font-bold",
                          blue === true ? Colors.blue :
                            red === true ? Colors.red :
                              purple === true ? Colors.purple :
                                green === true ? Colors.green : '')} >{el.label}</Link> :
                        <Link to={el.navigate} className={classNames(Colors.regularLink)} >{el.label}</Link>
                    }
                  </li>
                )
              })
            }
          </ul>
        </div>

      </nav>
    </div>
  )
}

export default Navbar