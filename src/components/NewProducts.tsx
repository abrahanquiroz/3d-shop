import { title } from 'process'
import React from 'react'
import ProductCard from './ProductCard'


const productsData = [
    {
        img: "/autito.png",
        title: "Autito",
        desc: "3D Printed Autito",
        rating: 2,
    },
    {
        img: "/dragon.png",
        title: "Dragon",
        desc: "3D Printed Dragon",
        rating: 5,
    },
    {
        img: "/Keycaps.jpg",
        title: "Keycaps",
        desc: "3D Printed Keycaps",
        rating: 3,
    },
    {
        img: "/luzdenoche.jpg",
        title: "Night Light",
        desc: "3D Printed Night Light",
        rating: 4,
    },
    {
        img: "/organizador.png",
        title: "Organizer",
        desc: "3D Printed Organizer Drawer",
        rating: 5,
    },
    {
        img: "/portalentes.png",
        title: "Glasses Holder",
        desc: "3D Printed Glasses Holder",
        rating: 3,
    },
    {
        img: "/soportecontrol.png",
        title: "Control Stand",
        desc: "3D Printed Control Stand",
        rating: 4,
    },
    {
        img: "/soportecafe.png",
        title: "Coffee Stand",
        desc: "3D Printed Coffee Stand",
        rating: 4,
    },
    {
        img: "/figuradeaccion.png",
        title: "Action Figure",
        desc: "3D Printed Action Figure",
        rating: 4,
    },
]

const NewProducts = () => {
  return (
    <div >
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-15 ">
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts