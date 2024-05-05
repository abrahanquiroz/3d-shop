import React from 'react'
import Image from 'next/image'  

const DiscountBanner= () => {
  return (
    <div>
      <div className="container pt-16 pb-16">
          <div className="bg-gray-600 bg-[url(/cta-banner.jpg)] border-stone-950 bg-cover h-[500px] rounded-2xl grid place-items-center">
            <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
                <button className="bg-blackish text-white p-2 rounded-md">25% DISCOUNT</button>
                <h2 className="font-extrabold text-2xl text-[#272727]">Winter Sold</h2>
                <p className="text-green-800 text-[20px]">Starting $20 <b>Shop Now</b></p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default DiscountBanner