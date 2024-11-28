'use client';
import React from 'react';
import { useTranslation } from '../app/i18n/client'
import SmallVideoBlock from '@/game_components/SmallVideoBlock';



const Videos = ({lng}) => {
  const { t } = useTranslation(lng, 'components')
  return (
    <div className="container mx-auto p-8 border-t border-b border-gray-300" id="videos">
      <h2 className="text-2xl font-extrabold mb-4"> {t('Video Main')}</h2>
      <div className="mt-8 space-y-4">
        <SmallVideoBlock title={t("Video1 title")} description={t("Video1 Introduction")} videoUrl="https://sprunki-game-assets-worker.yuweiloopy.workers.dev/2.mp4" />
        <SmallVideoBlock title={t("Video2 title")} description="" videoUrl="https://sprunki-game-assets-worker.yuweiloopy.workers.dev/3.mp4" />
        <SmallVideoBlock title={t("Video3 title")} description={t("Video3 Introduction")} videoUrl="https://sprunki-game-assets-worker.yuweiloopy.workers.dev/4.mp4" />
      </div>
    </div>
  );
};

export default Videos;