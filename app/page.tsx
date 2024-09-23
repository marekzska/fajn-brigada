"use client";
import { Cards } from "./components/Homepage/Cards";
import { Hero } from "./components/Homepage/Hero";
import { History } from "./components/Homepage/History";
import { JoinOurJourney } from "./components/Homepage/JoinOurJourney";
import { WhatIsCati } from "./components/Homepage/WhatIsCati";
import { WhyIsYourWorkImportant } from "./components/Homepage/WhyIsYourWorkImportant";

export default function page() {
  return (
    <>
      <Hero />
      <Cards />
      <WhatIsCati />
      <WhyIsYourWorkImportant />
      <JoinOurJourney />
      <History />
      <iframe
        src='https://www.chatbase.co/chatbot-iframe/qaebUnWAF_Kd3VlcgQ_Cr'
        width='100%'
        style={{ height: "100%", minHeight: "700px" }}
        frameBorder={0}
      ></iframe>
    </>
  );
}
