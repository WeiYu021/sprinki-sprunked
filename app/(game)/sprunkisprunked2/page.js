import { Suspense } from "react";
import Hero from "@/game_components/Hero";
import Footer from "@/game_components/Footer";
import IframeBlock from '@/game_components/IframeBlock';
import SmallHeader from '@/game_components/SmallHeader';
import GameRecommendation from '@/game_components/GameRecommendation';
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Sprunki Phase 2: Ultimate Music Creation Game | Characters, Download & More",
  canonicalUrlRelative: "/sprunki-phase-2",
});

export default function Sprunkiphase2() {
  const games = [
    { url_path: '/sprunki', title: 'Sprunki' },
    { url_path: '/sprunki-phase-2', title: 'Sprunki Phase 2' },
    { url_path: '/sprunki-phase-3', title: 'Sprunki Phase 3' },
  ]
  return (
    <>
      <main>
        <Hero title="Welcome to the World of Sprunki Incredibox" discription="Explore the unique universe of Sprunki Incredibox!" />
        <Suspense>
          <SmallHeader />
        </Suspense>
        <div className="bg-amber-100">
          <div className="mx-auto bg-white lg:max-w-2/3">
            <IframeBlock title="Welcome to Sprunki, Play Incredibox Sprunki Right Now!" discription="Your ultimate hub for all things Sprunki Incredibox! Discover the latest news, explore character guides, watch creative mixes, and access essential tools to enhance your Sprunki experience. Whether you're a devoted fan or a curious newcomer, Sprunki.com is your go-to resource for diving into this vibrant musical universe.

              Experience the newest version of Incredibox with a fresh, funky twist. Create your own tunes by blending beats, effects, and vocals with our unique Sprunki characters!

              (Content Warning: This game may contain violence, suggestive themes, crude humor, blood, and other material not suitable for users under 13 years old. Our rating system ensures that content is suitable for different age groups. Please play responsibly.)

              Hold your horses for 3-5 seconds while the beat drops! Once it\'s loaded, hit it to get this party started!"

              url="https://html-classic.itch.zone/html/11700918/index.html" />
            <GameRecommendation games={games} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}