import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';

const MainPage: FC = () => {
  const [t] = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      <BugButton />
      {t('Главная страница')}
      <Counter />
      <Input
        placeholder="Введите текст"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default MainPage;
