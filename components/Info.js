import React from "react";
import InfoCard from "./InfoCard";

function Info() {
  const infoData = [
    {
      img: "https://links.papareact.com/xqj",
      location: "Private Room in Center of Jakarta",
      title: "Stay at this Spacious Modern House",
      description:
        "1 Guest · 1 Bedroom · 1 Bed · 1.5 Shared Bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.73,
      price: "Rp300.000 / Night",
      total: "Rp1.170.000 Total",
      long: -0.0022275,
      lat: 51.5421655,
    },
    {
      img: "https://links.papareact.com/hz2",
      location: "Private Room in Center of Jakarta",
      title: "Luxury Studio Apartment",
      description:
        "2 Guest · 3 Bedroom · 1 Bed · 1.5 Shared Bathrooms · Wifi · Kitchen",
      star: 4.3,
      price: "Rp400.000 / Night",
      total: "Rp1.570.000 Total",
      long: -0.095091,
      lat: 51.48695,
    },
    {
      img: "https://links.papareact.com/uz7",
      location: "Private Room in Center of Jakarta",
      title: "Jakarta Studio Apartments",
      description:
        "4 Guest · 4 Bedroom · 4 Bed · 2 Bathrooms · Free parking · Washing Machine",
      star: 3.8,
      price: "Rp350.000 / Night",
      total: "Rp2.070.000 Total",
      long: -0.135638,
      lat: 51.521916,
    },
    {
      img: "https://links.papareact.com/6as",
      location: "Private Room in Center of Jakarta",
      title: "30 Minutes to Sudirman Street, South Jakarta",
      description:
        "1 Guest · 1 Bedroom · 1 Bed · 1.5 Shared Bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.1,
      price: "Rp550.000 / Night",
      total: "Rp3.200.000 Total",
      long: -0.069961,
      lat: 51.472618,
    },
    {
      img: "https://links.papareact.com/xhc",
      location: "Private Room in Center of Jakarta",
      title: "Spacious Peaceful Modern Bedroom",
      description:
        "3 Guest · 1 Bedroom · 1 Bed · 1.5 Shared Bathrooms · Wifi · Free parking · Dry Cleaning",
      star: 5.0,
      price: "Rp600.000 / Night",
      total: "Rp4.500.000 Total",
      long: -0.08472,
      lat: 51.510794,
    },
    {
      img: "https://links.papareact.com/pro",
      location: "Private Room in Center of Jakarta",
      title: "The Blue Room in Jakarta",
      description:
        "2 Guest · 1 Bedroom · 1 Bed · 1.5 Shared Bathrooms · Wifi · Washing Machine",
      star: 4.23,
      price: "Rp650.000 / Night",
      total: "Rp4.800.000 Total",
      long: -0.094116,
      lat: 51.51401,
    },
    {
      img: "https://links.papareact.com/8w2",
      location: "Private Room in Center of Jakarta",
      title: "5 Star Luxury Apartment",
      description:
        "3 Guest · 1 Bedroom · 1 Bed · 1.5 Shared Bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 3.85,
      price: "Rp900.000 / Night",
      total: "Rp6.500.000 Total",
      long: -0.109889,
      lat: 51.521245,
    },
  ];
  return (
    <div>
      {infoData?.map((info) => (
        <InfoCard
          key={info.img}
          img={info.img}
          location={info.location}
          title={info.title}
          description={info.description}
          star={info.star}
          price={info.price}
          total={info.total}
          long={info.long}
          lat={info.lat}
        />
      ))}
    </div>
  );
}

export default Info;
