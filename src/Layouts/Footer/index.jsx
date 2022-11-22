import { BsTelephonePlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import * as Component from '../../components'

function Footer() {
  return (
    <div className="mt-32">
      <footer className="bg-white py-10 lg:py-16">
        <div className="container mx-auto text-[#2A7CAB]">
          {/* Top */}
          <div className="flex flex-col-reverse lg:flex-row lg:max-w-5xl mx-auto justify-center items-center">
            <div className="mt-6">
              <span className="flex items-center justify-center text-3xl">
                <BsTelephonePlus/>
                <Link to="/" className="ml-4 font-bold">
                  +6285 946 370 867
                </Link>
              </span>
            </div>

            <div className="mx-auto mt-6 max-w-sm text-center lg:text-start text-[#7BA4BC]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod adipisci explicabo odit, recusandae quasi!
            </div>

            <div className="text-center lg:text-start pr-8">
              <h4 className="text-2xl font-semibold">Product</h4>
              <div className="text-[#7BA4BC]">
                <p className="my-2">Design Feed Instagram</p>
                <p className="my-2">Website</p>
                <p className="my-2">Design</p>
              </div>
            </div>

            <div>
              <Component.IconsSosmed className="flex items-center justify-center lg:flex-col " aClassName="text-3xl ml-2 mr-6 my-5 lg:my-2" />
            </div>

          </div>

          {/* Bottom */}
          <br />
          <div className="py-2 max-w-sm mx-auto lg:max-w-5xl ">
          <hr />
            <p className="pt-6 text-[#7BA4BC] text-center lg:text-start">Copyright 2022 yikdev.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer