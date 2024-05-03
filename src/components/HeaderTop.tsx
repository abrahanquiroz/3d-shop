import React from "react";

import  {BsFacebook, BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs";



const HeaderTop = () => {
    return (
        <div className="border-b border-gray-200 hidden sm:block">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <div className="hidden lg:flex gap-1">
                        <div className="header_top__icon_wrapper">
                            <BsFacebook />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <BsInstagram />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <BsTwitter />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <BsYoutube />
                        </div>
                    </div>


                    <p className="text-gray-500 text-[12px]">
                        <b>PUT THE NAME OR OFFER</b> WEBSITE HERE ; -$% OFF ON ALL PRODUCTS
                    </p>

                    <div className="flex gap-4">
                        <select className="text-gray-800 text-[12px] w-[70px]" name="currency" id="currency">
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                            <option value="ars">ARS</option>
                        </select>


                        <select className="text-gray-800 text-[12px] w-[80px]" name="language" id="language">
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop;