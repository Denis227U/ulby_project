import { Counter } from 'entities/Counter';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
  const [t] = useTranslation('about'); // в хук передаем название файла в locales

  return (
    <div>
      {t('О сайте')}
      <Counter />
    </div>
  );
};

export default AboutPage;
