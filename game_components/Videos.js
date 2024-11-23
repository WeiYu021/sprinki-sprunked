'use client';
import React from 'react';
import { useTranslation } from '../app/i18n/client'
// import SmallVideoBlock from '@/game_components/SmallVideoBlock';

const SmallVideoBlock = ({
  title,
  description,
  videoUrl,
}) => {
  return (
    <div className="mx-auto rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <div className="relative">
        {/* Video Player */}
        <div className="aspect-video relative bg-black">
          <video
            className="w-full h-full video-player"
            x5-video-player-type="h5"
            x-webkit-airplay="true"
            webkit-playsinline="true"
            loop
            muted
            controls // 添加控制条
            onPlay={() => console.log('视频开始播放')} // 添加播放事件监听
            onPause={() => console.log('视频暂停')} // 添加暂停事件监听
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Video Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

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