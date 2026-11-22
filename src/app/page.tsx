import { ChefCue } from "@/components/home/chef-cue";
import { CoursePlates } from "@/components/home/course-plates";
import { HomeHero } from "@/components/home/hero";
import { JournalStrip } from "@/components/home/journal-strip";
import { PrivateInvite } from "@/components/home/private-invite";
import { ReserveCta } from "@/components/home/reserve-cta";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <CoursePlates />
      <ChefCue />
      <PrivateInvite />
      <JournalStrip />
      <ReserveCta />
    </>
  );
}
