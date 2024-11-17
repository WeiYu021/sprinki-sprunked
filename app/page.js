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
  title: "Sprunki Incredibox: Ultimate Music Creation Game | Characters, Download & More",
  canonicalUrlRelative: "/",
});

export default function Home() {
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

              url="https://game.sprunki.com/game.sprunki.html" />
            <GameRecommendation games={games} />
            <Types title="The Complete Guide to Sprunki Games" description="Explore the complete collection of Sprunki games and mods! From the original classic to creative fan adaptations, discover all the different ways to experience Sprunki's musical universe."/>
            <Videos/>
            {/* 游戏角色 */}
            <Characters/>
            {/* 游戏攻略 */}
            <GamePlay/>
            {/* 游戏下载 */}
            <Download/>
            {/* 游戏背景故事 */}
            <Lore/>
            {/* 游戏创作 */}
            <Creation/>
            {/* 游戏社区 */}
            <Community/>
            {/* 游戏相关资源 */}
            <Resource/>
            <FAQ/>
            <About/>
            <Privacy/>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}