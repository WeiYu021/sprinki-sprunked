﻿import { Suspense } from "react";
import Hero from "@/game_components/Hero";
import Footer from "@/game_components/Footer";
import IframeBlock from '@/game_components/IframeBlock';
import SmallHeader from '@/game_components/SmallHeader';
import GameRecommendation from '@/game_components/GameRecommendation';
import Types from '@/game_components/Types';
import Videos from '@/game_components/Videos';
import Characters from "@/game_components/Characters";
import GamePlay from "@/game_components/GamePlay";
import Download from "@/game_components/Download";
import Lore from "@/game_components/Lore"
import Creation from "@/game_components/Creation";
import Community from "@/game_components/Community";
import Resource from "@/game_components/Resource"
import FAQ from '@/game_components/FAQ';
import About from '@/game_components/About';
import Privacy from '@/game_components/Privacy';
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Sprunki Sprunked 2.0: Horror Harmonies - Create Terrifying Tunes with Enhanced Characters",
  canonicalUrlRelative: "/sprunkisprunked2",
});

export default function Home() {
  const games = [
    { url_path: '/sprunkisprunked', title: 'Sprunki Sprunked' },
    { url_path: '/sprunkisprunked2', title: 'Sprunki Sprunked 2.0' },
    { url_path: '/sprunkedxsprunki', title: 'Sprunked x Sprunki' },
    { url_path: '/sprunkiromanticmod', title: 'Sprunki Romantic Mod' },
  ]

  return (
    <>
      <main>
        <Hero title="Sprunki Sprunked 2.0: Dive into the Horror-Infused Music World" discription="Embark on a spine-chilling adventure with Sprunki Sprunked 2.0!" />
        <Suspense>
          <SmallHeader />
        </Suspense>

        <div className="bg-amber-100">
          <div className="mx-auto bg-white lg:max-w-2/3">
            <IframeBlock title="Play Sprunki Sprunked 2.0 Now - Unleash Your Inner Horror Composer!" discription="Dare to step into the chilling world of Sprunki Sprunked 2.0? Click the button below to start your horror music journey. Select from a roster of terrifying characters, combine spine-tingling sounds, and craft your own haunting melodies. It's time to see how music and fear can collide in the most creative ways."
              url="https://sprunkedgame.org/sprunked-game.embed" />
            <GameRecommendation games={games} />
            <Types title="Dive into the World of Sprunki Sprunked: Your Ultimate Guide to the Creepiest Music-Making Games" description="Welcome to the thrilling world of Sprunki Sprunked games, where music meets horror in a unique and immersive experience. These games are not just about creating beats; they're about crafting a chilling atmosphere with every note. Whether you're a fan of Incredibox or looking for a new way to express your creativity, our guide will take you through the spine-tingling features, characters, and soundscapes of each game. Get ready to mix, match, and scare your way to the top of the music charts."/>
            <Videos/>
            {/*<Characters/>
            <GamePlay/>
            <Download/>
            <Lore/>
            <Creation/>
            <Community/>
            <Resource/>
            <FAQ/> */}
            <About/>
            <Privacy/>

          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </>
  );
}