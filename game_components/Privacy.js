import React from 'react';
import { useTranslation } from '../app/i18n';

const Privacy = async ({ lng }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, 'components')
  return (
    <div className="mx-auto p-10 border-t border-b border-gray-300" id="privacy">
      <h2 className="text-2xl font-extrabold mb-4">{t('Privacy Policy')}</h2>
      <p className="lg:text-lg text-base-content/80 leading-relaxed mb-8">
        {t('Privacy Policy1')}
      </p>

      <h3 className="text-xl font-bold mb-2">{t('Privacy Policy2')}</h3>
      <p className="text-base-content/80 leading-relaxed mb-4">
        {t('Privacy Policy3')}
      </p>
      <ul className="list-disc list-inside text-base-content/80 leading-relaxed mb-6">
        <li>
          <strong>{t('Privacy Policy4')}</strong>{t('Privacy Policy5')}
        </li>
        <li>
          <strong>{t('Privacy Policy6')}</strong>{t('Privacy Policy7')}
        </li>
      </ul>

      <h3 className="text-xl font-bold mb-2">{t('Privacy Policy8')}</h3>
      <ul className="list-disc list-inside text-base-content/80 leading-relaxed mb-6">
        <li>
          <strong>{t('Privacy Policy9')}</strong>{t('Privacy Policy10')}
        </li>
        <li>
          <strong>{t('Privacy Policy11')}</strong>{t('Privacy Policy12')}
        </li>
      </ul>

      <h3 className="text-xl font-bold mb-2">{t('Privacy Policy13')}</h3>
      <p className="text-base-content/80 leading-relaxed mb-4">
        {t('Privacy Policy14')}
      </p>

      <h3 className="text-xl font-bold mb-2">{t('Privacy Policy15')}</h3>
      <p className="text-base-content/80 leading-relaxed mb-4">
        {t('Privacy Policy16')}
      </p>

      <h3 className="text-xl font-bold mb-2">{t('Privacy Policy17')}</h3>
      <p className="text-base-content/80 leading-relaxed mb-4">
        {t('Privacy Policy18')}
      </p>

      <h3 className="text-xl font-bold mb-2">{t('Privacy Policy19')}</h3>
      <p className="text-base-content/80 leading-relaxed mb-4">
        {t('Privacy Policy20')}
      </p>

      <h3 className="text-xl font-bold mb-2">{t('Privacy Policy21')}</h3>
      <p className="text-base-content/80 leading-relaxed mb-4">
        {t('Privacy Policy22')}
      </p>

      <h3 className="text-xl font-bold mb-2">{t('Privacy Policy23')}</h3>
      <p className="text-base-content/80 leading-relaxed mb-4">
        {t('Privacy Policy24')}
        <a href="mailto:hi@sprunkisprunked.best" className="text-blue-500">hi@sprunkisprunked.best</a>
        {t('Privacy Policy25')}
      </p>

      <p className="lg:text-lg text-base-content/80 leading-relaxed mb-8">
        {t('Privacy Policy26')}
      </p>
    </div>
  );
};

export default Privacy;