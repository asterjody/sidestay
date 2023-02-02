import Footer from "@/components/Footer";
import Info from "@/components/Info";
import InfoCard from "@/components/InfoCard";
import Navbar from "@/components/Navbar";
import { format } from "date-fns";
import { useRouter } from "next/router";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, guestNumber } = router.query;

  const formattedStartDate =
    startDate && format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndDate = endDate && format(new Date(endDate), "dd MMMM yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Navbar placeholder={`${location} | ${range} | ${guestNumber} Guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300 + Stays - {range} - for {guestNumber} Guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="filterButton">Cancellation Flexibility</p>
            <p className="filterButton">Type of Place</p>
            <p className="filterButton">Price</p>
            <p className="filterButton">Rooms and Beds</p>
            <p className="filterButton">More Filters</p>
          </div>

          <Info />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
