import React from "react";
import SmallCard from "./SmallCard";

function Explore() {
  const exploreData = [
    {
      img: "https://links.papareact.com/5j2",
      location: "Central Jakarta",
      distance: "15-Minutes Drive",
    },
    {
      img: "https://links.papareact.com/1to",
      location: "Bogor",
      distance: "4.5-Hours Drive",
    },
    {
      img: "https://links.papareact.com/40m",
      location: "Tangerang",
      distance: "1.5-Hours Drive",
    },
    {
      img: "https://links.papareact.com/msp",
      location: "Bogor",
      distance: "4-Hours Drive",
    },
    {
      img: "https://links.papareact.com/2k3",
      location: "Bali",
      distance: "20-Hours Drive",
    },
    {
      img: "https://links.papareact.com/ynx",
      location: "Semarang",
      distance: "8.5-Hours Drive",
    },
    {
      img: "https://links.papareact.com/kji",
      location: "Surabaya",
      distance: "16-Hours Drive",
    },
    {
      img: "https://links.papareact.com/41m",
      location: "South Tangerang",
      distance: "2-Hours Drive",
    },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {exploreData?.map((explore) => (
        <SmallCard
          key={explore.img}
          img={explore.img}
          distance={explore.distance}
          location={explore.location}
        />
      ))}
    </div>
  );
}

export default Explore;
