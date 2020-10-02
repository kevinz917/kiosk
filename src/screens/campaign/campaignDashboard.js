import React, { useState, useEffect } from "react";
import Header from "../../components/header/header";
import CampaignCard from "../../components/cards/campaignCard";
import CampaignContent from "../../components/cards/campaignContent";
import Newcampaign from "../../components/modals/newcampaign";

const sample1 = {
  name: "Crazy sushi deal",
  status: "Live",
  responses: 132,
  timeleft: 90,
};

const sample2 = {
  name: "Sick deal",
  status: "Ended",
  responses: 12,
  timeleft: 0,
};

const CampaignDashboard = () => {
  const [modalIsOpen, setIsOpen] = React.useState(true);

  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Header />
      <div className="flex flex-row p-16">
        <div onClick={toggleModal}>
          <CampaignCard />
        </div>
        <CampaignContent item={sample1} />
        <CampaignContent item={sample2} />
      </div>
      <Newcampaign
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
      />
    </div>
  );
};

export default CampaignDashboard;
