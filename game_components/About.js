import React from 'react';
import { useTranslation } from '../app/i18n';

const About = async ({ lng }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, 'components')
  return (
    <div className="mx-auto p-10 border-t border-b border-gray-300" id="about">
      <h2 className="text-2xl font-extrabold mb-6">{t('About')}</h2>
      <p className="text-base-content/80 leading-relaxed mb-8 lg:text-lg">
        {t('About1')}
      </p>

      <h3 className="text-xl font-extrabold mb-6">{t('About2')}</h3>
      <p className="text-base-content/80 leading-relaxed mb-8">
        {t('About3')}
      </p>

      <h4 className="text-lg font-bold mb-4">{t('About4')}</h4>
      <p className="text-base-content/80 leading-relaxed mb-8">
        {t('About5')}
      </p>

      <h4 className="text-lg font-bold mb-4">{t('About6')}</h4>
      <p className="text-base-content/80 leading-relaxed mb-8">
        {t('About7')}
        <a href="mailto:hi@sprunkisprunked.best" className="text-blue-500 hover:underline">hi@sprunkisprunked.best</a>.
        {t('About8')}
      </p>

      <h3 className="text-xl font-extrabold mb-6">{t('About9')}</h3>
      <p className="text-base-content/80 leading-relaxed mb-8">
        {t('About10')}
      </p>

      <h4 className="text-lg font-bold mb-4">{t('About11')}</h4>
      <ul className="list-disc list-inside text-base-content/80 leading-relaxed mb-8">
        <li>{t('About12')}</li>
        <li>{t('About13')}</li>
        <li>{t('About14')}</li>
        <li>{t('About15')}</li>
      </ul>

      <h3 className="text-xl font-extrabold mb-6">{t('About16')}</h3>
      <p className="text-base-content/80 leading-relaxed mb-8">
        {t('About17')}
        <a href="mailto:hi@sprunkisprunked.best" className="text-blue-500 hover:underline">hi@sprunkisprunked.best</a>.
        {t('About18')}
      </p>

      <p className="text-base-content/80 leading-relaxed mb-8 lg:text-lg">
        {t('About19')}
      </p>
    </div>
  );
};

export default About;