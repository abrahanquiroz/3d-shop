"use client";

import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { signIn, useSession, signOut } from "next-auth/react";



export default function HeaderMain() {
  const { data: session } = useSession();

  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
          Logo
        </div>
        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Enter any product name..."
          />

          <BsSearch
            className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
            size={20}
          />
        </div>
        <div>
          {session?.user ? (
            <div className="flex gap-x-2 items-center">
              <Link href="/dashboard">Dashboard</Link>
              <p>
                {session.user.name} {session.user.email}
              </p>
              <img
                src={session.user.image ?? ""}
                alt=""
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              <button onClick={async () => { await signOut({callbackUrl: "/"}); }}>Logout</button>
            </div>
          ) : (
            <button onClick={() => signIn()} className="bg-slate-950 text-zinc-50 px-3 py-2 rounded-xl">Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

