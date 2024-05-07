import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import DiscountBanner from "@/components/DiscountBanner";
import Members from "@/components/Members";

function Home() {
  console.log('holahgola')
  console.log(process.env.GOOGLE_CLIENT_ID);
  return (
    <main>
      <Hero />
      <NewProducts />
      <DiscountBanner />
      <Members />
    </main>
  );
}

export default Home;