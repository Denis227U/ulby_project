import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';

import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input = memo(({
  className,
  value,
  onChange,
  type = 'text',
  placeholder,
  autofocus,
  readonly,
  ...otherProps
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const isCaretVisible = isFocused && !readonly;

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  // без этого каретка всегда находится в конце
  const onSelect = (e: any) => {
    setCaretPosition(e?.target.selectionStart || 0);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <div className={classNames(cls.inputWrapper, mods, [className])}>
      { placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      ) }
      <div className={cls.caretWrapper}>
        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          readOnly={readonly}
          {...otherProps}
        />
        {isCaretVisible && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 9}px` }}
          />
        )}
      </div>
    </div>
  );
});
