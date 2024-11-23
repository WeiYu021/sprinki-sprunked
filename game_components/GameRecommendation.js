import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '../app/i18n';

const GameRecommendation = async ({ lng, games }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, 'components')
  const maxRows = 4;
  const cols = 5;
  const totalGames = games.length;
  const rows = Math.min(maxRows, Math.ceil(totalGames / cols));

  return (
    <div className="container mx-auto p-8 border-t border-b border-gray-300">
      <h2 className="text-2xl font-extrabold mb-4">{t('Game Recommendation')}</h2>
      {/* 添加边框来查看网格布局 */}
      {/* <div className="grid gap-4" style={{
        gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
        display: 'grid'
      }}> */}
      <div className="grid grid-cols-5 gap-4">
        {games.slice(0, rows * cols).map((game, index) => (
          <Link key={index} href={`/${lng}/${game.url_path.replace("/", "")}`} passHref>
            {/* 添加边框来查看每个项目 */}
            <div className="cursor-pointer">
              <Image
                src={`https://sprunki-game-assets-worker.yuweiloopy.workers.dev/${game.url_path.replace("/", "")}.png`}
                alt={game.title}
                width={500}
                height={300}
                className="w-full h-auto"
              // 移除 layout="responsive"，因为在 Next.js 13+ 中推荐使用 fill 或具体尺寸
              />
              <div className="text-center mt-2">{t(game.title)}</div>
            </div>
            {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
            </div> */}
          </Link>
        ))}
      </div>
      {/* 添加调试信息 */}
      {/* <div className="mt-4 text-sm text-gray-500">
        Total Games: {totalGames}, Rows: {rows}, Cols: {cols},
        Displayed: {Math.min(rows * cols, totalGames)}
      </div> */}
    </div>
  );
};

export default GameRecommendation;