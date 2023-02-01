import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold uppercase text-[#87AE73]">About</h5>
        <p className="font-medium">How SideStay Works</p>
        <p className="font-medium">Newsroom</p>
        <p className="font-medium">Our Investors</p>
        <p className="font-medium">SideStay Gold</p>
        <p className="font-medium">SideStay Diamond</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold uppercase text-[#87AE73]">Community</h5>
        <p className="font-medium">Accessibility</p>
        <p className="font-medium">SideStay Talks</p>
        <p className="font-medium">SideStay Meets</p>
        <p className="font-medium">SideStay Family</p>
        <p className="font-medium">Overseas Community</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold uppercase text-[#87AE73]">Social Media</h5>
        <p className="font-medium">Instagram</p>
        <p className="font-medium">Youtube</p>
        <p className="font-medium">TikTok</p>
        <p className="font-medium">Facebook</p>
        <p className="font-medium">Twitter</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold uppercase text-[#87AE73]">Support</h5>
        <p className="font-medium">Customer Centre</p>
        <p className="font-medium">Help Centre</p>
        <p className="font-medium">Emergency Centre</p>
        <p className="font-medium">SideStay Health</p>
        <p className="font-medium">SideStay Fund</p>
      </div>
    </div>
  );
}

export default Footer;
