import { Suspense } from "react";
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
  title: "Sprunki Sprunked: Craft Original Tracks in a Spooky, Interactive Music World",
  canonicalUrlRelative: "/",
});

export default function Home() {
  const games = [
    { url_path: '/sprunkisprunked', title: 'Sprunki Sprunked' },
    { url_path: '/sprunkisprunked2', title: 'Sprunki Sprunked 2.0' },
    { url_path: '/sprunkedxsprunki', title: 'Sprunked x Sprunki' },
  ]

// Sprunki Sprunked 2.0 
// https://sprunkedgame.org/sprunked-game.embed
// Sprunki Sprunked 2.0 Mod is a version that enhances the original Incredibox Sprunki series, 
// introducing a mix of horror features, exclusive characters, and an engaging atmosphere. 
// This mod builds on its predecessor to create new soundscapes, enchanting characters, and frightening visuals, 
// offering players an unforgettable experience. The gameplay involves selecting enhanced characters, 
// combining sounds to craft personal soundtracks filled with terrifying beats and melodies, and 
// unlocking special sound effects through unique combinations of characters. Key features include 
// redesigned character looks with horror-inspired designs, magnified horror visuals that enhance the 
// game's chilling atmosphere, and enriched sound layers for more intense music mixes1.

// Sprunked x Sprunki
// https://wowtbc.net/sprunkin/sprunked-x-sprunki/index.html
// The Sprunked x Sprunki Mod combines elements from both the Sprunked and Sprunki mods within the Incredibox universe. 
// It features redesigned characters that blend the dark essence of Sprunked with the playful traits of Sprunki. 
// This mod emphasizes a horror-themed ambiance with dark visuals and shadowy backgrounds, creating an immersive atmosphere 
// that complements the music. Players 
// can enjoy enhanced sound effects that add depth to their musical compositions 
// while maintaining the core gameplay mechanics of Incredibox2.

// Sprunki Sprunked
// https://html-classic.itch.zone/html/11995631/index.html
// The New Incredibox - SPRUNKED  is a fun, interactive music-making game where you combine beats, sounds, and 
// characters to create original tracks. Dive into a vibrant world where each character adds a unique sound, 
// and every choice builds a new beat. With easy drag-and-drop controls, Incredibox - SPRUNKED lets 
// you explore endless musical possibilities in a game that’s both creative and addictive. 

  return (
    <>
      <main>
        <Hero title="SPRUNKI SPRUNKED: The Ultimate Music-Making Adventure" discription="Dive into the rhythmic world of SPRUNKI SPRUNKED, where every beat tells a story and every sound is a masterpiece waiting to be created." />
        <Suspense>
          <SmallHeader />
        </Suspense>
        <div className="bg-amber-100">
          <div className="mx-auto bg-white lg:max-w-2/3">
            <IframeBlock title="Create Your Own Musical Masterpiece with SPRUNKI SPRUNKED" discription="Unleash your inner composer in SPRUNKI SPRUNKED, a dynamic music-making game that lets you mix and match unique sounds and characters to craft your own unforgettable tracks. With intuitive controls and endless creative possibilities, this game is your ticket to a world of musical innovation and fun!"
              url="https://html-classic.itch.zone/html/11995631/index.html" />
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