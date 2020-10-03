import React, { useState, useEffect } from "react";
import HeaderUser from "../../components/header/headerUser";
import DealContent from "../../components/userView/dealContent";

const sample1 = {
  name: "Crazy Sushi Deal",
  restaurant: "Michael Sushi Bar",
  img_url: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  spots: 10,
  total: 40,
  timeleft: 90,
  price: 5,
};

const sample2 = {
  name: "Sick deal",
  restaurant: "Noodle Shack",
  img_url: "https://0013a05e776cb3a3cacf-7d16a3f45b9fed243f74feb2d088df02.ssl.cf1.rackcdn.com/Andy-Post-Food-Photography-Ramen-Noodles.jpg",
  spots: 20,
  total: 40,
  timeleft: 4,
  price: 10,
};

const UserDashboard = () => {
  const [modalIsOpen, setIsOpen] = React.useState(true);

  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  return (
    <div>
      <HeaderUser />
      <div className="grid gap-1">
        {/* <div onClick={toggleModal}>
          <DealCard />
        </div> */}
        
        <DealContent item={sample1} />
        
            <DealContent item={sample2} />
            <DealContent item={sample1} />
        

      </div>
    </div>
  );
};

export default UserDashboard;
