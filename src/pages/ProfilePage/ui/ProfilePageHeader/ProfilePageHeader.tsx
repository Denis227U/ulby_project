import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader:FC<ProfilePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation();
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const oncancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSaveEdit = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {readonly
        ? (
          <Button
            className={cls.editBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onEdit}
          >
            {t('Редактировать')}
          </Button>
        )
        : (
          <>
            <Button
              className={cls.editBtn}
              theme={ButtonTheme.OUTLINE_RED}
              onClick={oncancelEdit}
            >
              {t('Отменить')}
            </Button>
            <Button
              className={cls.saveBtn}
              theme={ButtonTheme.OUTLINE}
              onClick={onSaveEdit}
            >
              {t('Сохранить')}
            </Button>
          </>
        )}
    </div>
  );
};
