import React from "react";
import MediumCard from "./MediumCard";

function Live() {
  const liveData = [
    { img: "https://links.papareact.com/2io", title: "Outdoor Getaways" },
    { img: "https://links.papareact.com/q7j", title: "Unique Stays" },
    { img: "https://links.papareact.com/s03", title: "Entire Homes" },
    { img: "https://links.papareact.com/8ix", title: "Pet Allowed" },
  ];
  return (
    <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
      {liveData?.map((live) => (
        <MediumCard key={live.img} img={live.img} title={live.title} />
      ))}
    </div>
  );
}

export default Live;
