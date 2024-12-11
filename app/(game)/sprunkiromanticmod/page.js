import { Suspense } from "react";
import Hero from "@/game_components/Hero";
// import Footer from "@/game_components/Footer";
import VideoBlock from '@/game_components/VideoBlock';
import SmallHeader from '@/game_components/SmallHeader';
import GameRecommendation from '@/game_components/GameRecommendation';
import Types from '@/game_components/Types';
import Videos from '@/game_components/Videos';
// import Characters from "@/game_components/Characters";
// import GamePlay from "@/game_components/GamePlay";
// import Download from "@/game_components/Download";
// import Lore from "@/game_components/Lore"
// import Creation from "@/game_components/Creation";
// import Community from "@/game_components/Community";
// import Resource from "@/game_components/Resource"
// import FAQ from '@/game_components/FAQ';
import About from '@/game_components/About';
import Privacy from '@/game_components/Privacy';
import { getSEOTags } from "@/libs/seo";
import { useTranslation } from '@/app/i18n';
import Language from "@/game_components/Language"
import Header from "@/game_components/Header";


export async function generateMetadata() {
  return getSEOTags({
    title: "Sprunki Romantic Mod: Incredibox Sprunki ROMANTIC KISS Run Challenge",
    canonicalUrlRelative: "/sprunkiromanticmod",
  });
}


export default async function Home() {
  const lng = "en"
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng)
  const games = [
    { url_path: '/sprunkisprunked', title: 'Sprunki Sprunked' },
    { url_path: '/sprunkisprunked2', title: 'Sprunki Sprunked 2.0' },
    { url_path: '/sprunkedxsprunki', title: 'Sprunked x Sprunki' },
    { url_path: '/sprunkiromanticmod', title: 'Sprunki Romantic Mod' },
  ]

  return (
    <>
      <Suspense>
        <Header lng={lng} />
      </Suspense>
      <main>
        <Suspense>
          <Language lng={lng} />
        </Suspense>
        <Hero title={t('sprunkiromanticmod-hero-title')} discription={t('sprunkiromanticmod-hero-description')} />
        <Suspense>
          <SmallHeader lng={lng}/>
        </Suspense>
        <div className="bg-amber-100">
          <div className="mx-auto bg-white lg:max-w-2/3">
            {/* <IframeBlock title="Discover Sprunked x Sprunki - Blend Horror with Music in One Click" discription="Are you ready to explore the fusion of two worlds? Play Sprunked x Sprunki now and let the dark and playful characters guide you through a musical journey like no other. Click the button below to dive into a horror-themed Incredibox experience that will have you composing tunes in the shadows."
              url="https://wowtbc.net/sprunkin/sprunked-x-sprunki/index.html" /> */}
            <VideoBlock title={t('sprunkiromanticmod-videoblock-title')} discription={t('sprunkiromanticmod-videoblock-description')} url="https://sprunki-game-assets-worker.yuweiloopy.workers.dev/5.mp4" />
            <Suspense>
              <GameRecommendation lng={lng} games={games} />
            </Suspense>
            <Types lng={lng} />
            <Suspense>
              <Videos lng={lng} />
            </Suspense>
            {/*<Characters/>
            <GamePlay/>
            <Download/>
            <Lore/>
            <Creation/>
            <Community/>
            <Resource/>
            <FAQ/> */}
            <About lng={lng} />
            <Privacy lng={lng} />

          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </>
  );
}