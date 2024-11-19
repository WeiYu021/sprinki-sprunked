import { Suspense } from "react";
import Hero from "@/game_components/Hero";
import Footer from "@/game_components/Footer";
import VideoBlock from '@/game_components/VideoBlock';
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
  title: "Sprunki Romantic Mod: Incredibox Sprunki ROMANTIC KISS Run Challenge",
  canonicalUrlRelative: "/sprunkiromanticmod",
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
        <Hero title="Sprunki Romantic Mod: An Engaging Short Video" discription="Experience a romantic theme with Sprunki Romantic Mod" />
        <Suspense>
          <SmallHeader />
        </Suspense>
        <div className="bg-amber-100">
          <div className="mx-auto bg-white lg:max-w-2/3">
            {/* <IframeBlock title="Discover Sprunked x Sprunki - Blend Horror with Music in One Click" discription="Are you ready to explore the fusion of two worlds? Play Sprunked x Sprunki now and let the dark and playful characters guide you through a musical journey like no other. Click the button below to dive into a horror-themed Incredibox experience that will have you composing tunes in the shadows."
              url="https://wowtbc.net/sprunkin/sprunked-x-sprunki/index.html" /> */}
            <VideoBlock title="Sprunki Romantic Mod" discription="In this short video, viewers will see:
Romantic Music Creation: The video demonstrates how to use Incredibox's features to compose music in a romantic style, emphasizing emotional expression.
Character Interaction: Different characters interact within the video, showcasing their unique sounds and styles, allowing the audience to experience the diversity of music.
Visual Effects: Lively animations and colorful scenes enhance the viewing experience, making the entire video vibrant and entertaining." url="https://sprunki-game-assets-worker.yuweiloopy.workers.dev/5.mp4"/>
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