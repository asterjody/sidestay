import Banner from "@/components/Banner";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import LargeCard from "@/components/LargeCard";
import Live from "@/components/Live";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>SideStay</title>
        <meta name="description" content="SideStay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/sidestayicon.svg" />
      </Head>

      <Navbar />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl text-gray-800 font-semibold pb-5">
            Explore Nearby
          </h2>
          <Explore />
        </section>

        <section>
          <h2 className="text-4xl text-gray-800 font-semibold py-8">
            Live Anywhere
          </h2>
          <Live />
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlist Curated by SideStay"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </>
  );
}
