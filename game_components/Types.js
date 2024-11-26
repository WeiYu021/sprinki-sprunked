import React from 'react';
import RadioBlock from '@/game_components/RadioBlock';
import { useTranslation } from '../app/i18n';

const SmallTypes = ({ gameName, gameIntro, feature1, feature2, feature3, tag1, tag2, tag3 }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
      <h3 className="text-xl font-bold mb-2">{gameName}</h3>
      <p className="text-gray-700 mb-4">{gameIntro}</p>

      <ul className="list-disc list-inside mb-4">
        <li>{feature1}</li>
        <li>{feature2}</li>
        <li>{feature3}</li>
      </ul>
      <div className="flex space-x-2">
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">{tag1}</span>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">{tag2}</span>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">{tag3}</span>
      </div>
    </div>
  );
};

const Types = async ({ lng }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, 'components')
  return (
    <div className="container mx-auto p-8 border-t border-b border-gray-300" id="types">
      <h2 className="text-2xl font-extrabold mb-4">{t('types-title')}</h2>
      <p className="text-lg opacity-80 mb-4">{t('types-description')}</p>
      <div className="p-4 border rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">{t('Type question')}</h2>
        <RadioBlock/>
      </div>
      <div className="mt-8 space-y-4">
        <SmallTypes
          gameName={t('Sprunki Sprunked')}
          gameIntro={t('Sprunki Sprunked Introduction')}
          feature1={t("Sprunki Sprunked Feature1")}
          feature2={t("Sprunki Sprunked Feature2")}
          feature3={t("Sprunki Sprunked Feature3")}
          tag1={t("Sprunki Sprunked Tag1")}
          tag2={t("Sprunki Sprunked Tag2")}
          tag3={t("Sprunki Sprunked Tag3")}
        />
        <SmallTypes
          gameName={t('Sprunki Sprunked 2.0')}
          gameIntro={t('Sprunki Sprunked 2.0 Introduction')}
          feature1={t('Sprunki Sprunked 2.0 Feature1')}
          feature2={t('Sprunki Sprunked 2.0 Feature2')}
          feature3={t('Sprunki Sprunked 2.0 Feature3')}
          tag1={t("Sprunki Sprunked 2.0 Tag1")}
          tag2={t("Sprunki Sprunked 2.0 Tag2")}
          tag3={t("Sprunki Sprunked 2.0 Tag3")}
        />
        <SmallTypes
          gameName={t('Sprunked x Sprunki')}
          gameIntro={t('Sprunked x Sprunki Introduction')}
          feature1={t('Sprunked x Sprunki Feature1')}
          feature2={t('Sprunked x Sprunki Feature2')}
          feature3={t('Sprunked x Sprunki Feature3')}
          tag1={t("Sprunked x Sprunki Tag1")}
          tag2={t("Sprunked x Sprunki Tag2")}
          tag3={t("Sprunked x Sprunki Tag3")}
        />
        <SmallTypes
          gameName={t('Sprunki Romantic Mod')}
          gameIntro={t('Sprunki Romantic Mod Introduction')}
          feature1={t('Sprunki Romantic Mod Feature1')}
          feature2={t('Sprunki Romantic Mod Feature2')}
          feature3={t('Sprunki Romantic Mod Feature3')}
          tag1={t("Sprunki Romantic Mod Tag1")}
          tag2={t("Sprunki Romantic Mod Tag2")}
          tag3={t("Sprunki Romantic Mod Tag3")}
        />
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mt-4 mb-4">
        <h3 className="text-xl font-bold mb-2">{t('More Website')}</h3>
        <a href="https://iuu.ai/" className="text-blue-500 hover:underline font-bold text-lg">iuu AI</a>
        <br />
        <a href="https://magicbox.tools/" title="MagicBox.Tools - AI Tools Directory" className="text-blue-500 hover:underline font-bold text-lg">MagicBox.Tools - AI Tools Diresctory</a>
        <br />
        <a href="https://aiwith.me/" title="AI With Me: Discover thousands of AI Tools" className="text-blue-500 hover:underline font-bold text-lg">AI With Me</a>
        <br />
        <a title="The Best AI Tools" href="https://allinai.tools" className="text-blue-500 hover:underline font-bold text-lg">All in AI Tools</a>
        <br />
        <a href="https://right-ai.com/" title="RightAI Tools Directory" className="text-blue-500 hover:underline font-bold text-lg">RightAI Tools Diresctory</a>
        <br />
        <a href="https://aijustworks.com" title="AI Just Works" className="text-blue-500 hover:underline font-bold text-lg">AI Just Works</a>
        <br />
        <a href="https://SeekAIs.com/" title="SeekAIs" className="text-blue-500 hover:underline font-bold text-lg">SeekAIs - AI Tools Directory</a>
        <br />
        <a href="https://AIToolly.com/" title="Best AI Tools Directory" className="text-blue-500 hover:underline font-bold text-lg">AIToolly</a>
        <a href="https://www.aitoolnet.com/" target="_blank"><img src="http://www.aitoolnet.com/static/assets/images/logo.svg" alt="aitoolnet.com" /></a>
      </div>
    </div>
  );
};

export default Types;