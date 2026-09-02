"use client";

import { useState } from "react";

import CinematicIntro from "@/components/intro/CinematicIntro";
import InvitationEnvelope from "@/components/invitation/InvitationEnvelope";
import HomeStory from "@/components/home/HomeStory";
import HomeGallery from "@/components/home/HomeGallery";
import Countdown from "@/components/countdown/Countdown";
import CelebrationTimeline from "@/components/events/CelebrationTimeline";
import AkhandPuja from "@/components/events/AkhandPuja";
import LunchSection from "@/components/events/LunchSection";
import DinnerSection from "@/components/events/DinnerSection";
import VenueSection from "@/components/location/VenueSection";
import RSVPSection from "@/components/rsvp/RSVPSection";
import ShareInvitation from "@/components/sharing/ShareInvitation";
import DownloadInvitation from "@/components/sharing/DownloadInvitation";
import FinalBlessing from "@/components/FinalBlessing";
import FloatingPetals from "@/components/ui/FloatingPetals";
import GoldParticles from "@/components/ui/GoldParticles";
import MusicToggle from "@/components/ui/MusicToggle";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      {!introFinished && (
        <CinematicIntro
          onComplete={() => setIntroFinished(true)}
        />
      )}

      <main
        className={
          introFinished
            ? "website visible"
            : "website"
        }
      >
        <FloatingPetals />
        <GoldParticles />
        <MusicToggle />

        <InvitationEnvelope />

        <HomeStory />

        <Countdown />

        <CelebrationTimeline />

        <AkhandPuja />

        <LunchSection />

        <DinnerSection />

        <HomeGallery />

        <VenueSection />

        <RSVPSection />

        <ShareInvitation />

        {/* ADDED */}
        <DownloadInvitation />

        <FinalBlessing />
      </main>
    </>
  );
}