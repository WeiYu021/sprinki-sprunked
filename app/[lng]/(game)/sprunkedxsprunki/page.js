import Header from "@/game_components/Header";
import { Suspense } from "react";
import Hero from "@/game_components/Hero";
import IframeBlock from '@/game_components/IframeBlock';
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


export async function generateMetadata({ params: { lng } }) {
  return getSEOTags({
    title: "Sprunked x Sprunki: A Chilling Collaboration - Blend Horror with Music in Incredibox",
    canonicalUrlRelative: `/${lng}/sprunkedxsprunki`,
  });
}


export default async function Home({ params: { lng } }) {
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
        <Hero title={t('sprunkedxsprunki-hero-title')} discription={t('sprunkedxsprunki-hero-description')} />
        <Suspense>
          <SmallHeader lng={lng} />
        </Suspense>
        <div className="bg-amber-100">
          <div className="mx-auto bg-white lg:max-w-2/3">
            <IframeBlock title={t('sprunkedxsprunki-iframe-title')} discription={t('sprunkedxsprunki-iframe-description')} fullscreentext={t('sprunkedxsprunki-iframe-fullscreen')}
              url="https://wowtbc.net/sprunkin/sprunked-x-sprunki/index.html" />
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