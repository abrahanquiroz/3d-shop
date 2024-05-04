import Image from "next/image";
import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Testimonial from "@/components/DiscountBanner";
import DiscountBanner from "@/components/DiscountBanner";
import Members from "@/components/Members";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewProducts />
      <DiscountBanner />
      <Members />
    </main>
  );
}
