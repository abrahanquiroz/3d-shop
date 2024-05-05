import React from "react";
import Image from "next/image";

interface UserProps {
    img: string;
    name: string;
    role: string;
    quote: string;
  }

const usersData = [
    {
        img: "/user.jpeg",
        name: "Abrahan Quiroz",
        role: "CEO & Founder Invision",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque similique totam iusto quas, quos, quae, quidem",
    },
    {
        img: "/user2.jpeg",
        name: "Leonardo Diaz",
        role: "Web Design Consultant",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque similique totam iusto quas, quos, quae, quidem",
    },
    // Agrega aquí más usuarios según sea necesario
];

const User = ({ img, name, role, quote }: UserProps) => {
  return (
    <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
      <div className="text-center flex flex-col items-center gap-1">
        <Image
          className="rounded-full inline-block"
          src={img}
          width={150}
          height={150}
          alt={name}
        />
        <h2 className="text-gray-500 font-black text-[20px]">{name}</h2>
        <p>{role}</p>
        <Image
          className="inline-block py-2"
          src="/quotes.svg"
          width={20}
          height={20}
          alt="quotes"
        />
        <p className="max-w-[200px] text-gray-500">{quote}</p>
      </div>
    </div>
  );
};

const Members = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4"><b>Members</b></h2>

        <div className="mb-10 grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-15 ">
          {usersData.map((user, index) => (
            <User
              key={index}
              img={user.img}
              name={user.name}
              role={user.role}
              quote={user.quote}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;