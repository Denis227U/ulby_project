import { ChangeEvent, memo, useMemo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOptions {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOptions[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo(({
  className,
  label,
  options,
  value,
  onChange,
  readonly,
}: SelectProps) => {
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    // if (onChange) {
    //   onChange(e.target.value);
    // }
    onChange?.(e.target.value);
  };

  const optionsList = useMemo(() => options?.map((opt) => (
    <option
      className={cls.option}
      value={opt.value}
      key={opt.value}
    >
      {opt.content}
    </option>
  )), [options]);

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      {label && (
        <span className={cls.label}>
          {`${label}>`}
        </span>
      )}
      <select
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  );
});
