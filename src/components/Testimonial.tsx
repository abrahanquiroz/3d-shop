import React from 'react'
import Image from 'next/image'  

const Testimonial = () => {
  return (
    <div>
      <div className="container pt-16 pb-16 grid-cols-2">
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">
          <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
            <div className="text-center flex flex-col items-center gap-1">
              <Image
                className="rounded-full inline-block"
                src="/user.jpeg"
                width={80}
                height={80}
                alt="user"
              />
              <h2 className="text-gray-500 font-black text-[20px]">Abrahan</h2>
              <p>CEO & Founder Invision</p>
              <Image
                className="inline-block py-2"
                src="/quotes.svg"
                width={30}
                height={30}
                alt="quotes"
              />
              <p className="max-w-[200px] text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                similique totam iusto quas, quos, quae, quidem
              </p>
            </div>
          </div>

          <div className="bg-gray-600 bg-[url(/cta-banner.jpg)] border-stone-950 bg-cover h-[500px] rounded-2xl grid place-items-center">
            <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-cl py-8 sm:px-8 px-2 grid place-items-center gap-3">
                <button className="bg-blackish text-white p-2 rounded-md">25% DISCOUNT</button>
                <h2 className="font-extrabold text-2xl text-[#272727]">Winter Sold</h2>
                <p className="text-gray-500 text-[20px]">Starting @ $20 <b>Shop Now</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial