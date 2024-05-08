import Image from 'next/image';
import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


interface propsType {
    img: string;
    title: string;
    desc: string;
    rating: number;
}

const ProductCard: React.FC<propsType> = ({ img, title, desc, rating }) => {

    const generateRating = (rating: number) => {
        switch (rating) {
            case 1:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
                case 2:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
                case 3:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
                case 4:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                );
                case 5:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                );

                default:
                    return null;
        }
        
    }

  return (
    <div className="border border-gray-200 rounded-xl max-w-[400px] w-full h-full">
      <div>
        <Image
          className="w-full h-[300px] object-cover rounded-t-xl"
          src={img}
          width={300}
          height={300}
          alt={title}
        />
      </div>

      <div className="space-y-2 py-2 px-2">
        <h2 className="text-slate-900 font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>
        <div>{generateRating(rating)}</div>
      </div>
    </div>
  );
}

export default ProductCard