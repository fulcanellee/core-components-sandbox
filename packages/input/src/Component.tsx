/**
 * Vendor
 */

import React, { useState } from 'react';
import cn from 'classnames';

/**
 * Styles
 */

import styles from './Component.module.css';

/**
 * Types
 */

export type InputProps = {
  /** Размер компонента */
  size?: 's' | 'm' | 'l';
  /** Атрибут type */
  type?: 'number' | 'card' | 'email' | 'file' | 'hidden' | 'money' | 'password' | 'tel' | 'text';
  /** Класс компонента */
  className?: string;
  /** Класс компонента */
  innerClassName?: string;
  /** Класс компонента */
  inputClassName?: string;
  /** Класс аддонов */
  addonsClassName?: string;
  /** Значение поля */
  value?: string;
  /** Плейсхолдер */
  placeholder?: string;
  /** Атрибут disabled */
  disabled?: boolean;
  /** Атрибут required */
  required?: boolean;
  /** Лейбл компонента */
  label?: React.ReactNode;
  /** Текст подсказки */
  hint?: string;
  /** Текст ошибки */
  error?: string;
  /** Слот слева от инпута */
  leftAddons?: React.ReactNode;
  /** Слот справа от инпута */
  rightAddons?: React.ReactNode;
  /** Слот для отображения контента снизу */
  children?: React.ReactNode;
  /** Обработчик фокуса инпута */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Обработчик блюра инпута */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Обработчик ввода */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Id компонента для тестов */
  dataTestId?: string;
};

/**
 * Expo
 */

// TODO: Этого не будет, когда появится компонент иконки.
const errorIcon = (
  <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M16.8709 14.432L9.80088 2.61199C9.71724 2.47327 9.59918 2.35852 9.45813 2.27886C9.31709 2.19921 9.15786 2.15735 8.99588 2.15735C8.8339 2.15735 8.67467 2.19921 8.53362 2.27886C8.39258 2.35852 8.27452 2.47327 8.19088 2.61199L1.13088 14.432C1.04895 14.5739 1.00552 14.7347 1.00489 14.8985C1.00426 15.0623 1.04647 15.2235 1.12731 15.366C1.20816 15.5085 1.32484 15.6273 1.46579 15.7108C1.60674 15.7943 1.76707 15.8395 1.93088 15.842H16.0609C16.2259 15.8426 16.3881 15.7993 16.5309 15.7165C16.6736 15.6337 16.7918 15.5145 16.8732 15.3709C16.9546 15.2274 16.9964 15.0648 16.9942 14.8998C16.9921 14.7348 16.9461 14.5733 16.8609 14.432H16.8709ZM9.87088 13.242C9.87088 13.4489 9.7887 13.6473 9.64242 13.7935C9.49614 13.9398 9.29775 14.022 9.09088 14.022H8.86088C8.75845 14.022 8.65702 14.0018 8.56239 13.9626C8.46775 13.9234 8.38177 13.866 8.30934 13.7935C8.23691 13.7211 8.17945 13.6351 8.14025 13.5405C8.10105 13.4458 8.08088 13.3444 8.08088 13.242V13.002C8.08088 12.572 8.43088 12.222 8.86088 12.222H9.13088C9.56188 12.222 9.91088 12.572 9.91088 13.002L9.87088 13.242ZM9.64088 11.242H8.31088L8.09088 5.80199H9.91088L9.64088 11.242Z' fill='#EF3124' />
  </svg>
);

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  size='s',
  type='text',
  error,
  hint,
  className,
  innerClassName,
  inputClassName,
  addonsClassName,
  value,
  disabled,
  required,
  placeholder,
  label,
  leftAddons,
  rightAddons,
  children,
  onFocus,
  onBlur,
  onChange,
  dataTestId
}, ref) => {
  const [focused, setFocused] = useState(false);

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);

    if (onFocus) {
      onFocus(e);
    }
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);

    if (onBlur) {
      onBlur(e);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  const rightAddonsRenderer = () => (
    <div className={ cn(styles.addons, addonsClassName) }>
      { error && errorIcon }
      { rightAddons }
    </div>
  );

  const leftAddonsRenderer = () => leftAddons && (
    <div className={ styles.addons }>
      { leftAddons }
    </div>
  );

  return (
    <div
      className={ cn(
        styles.component,
        {
          [styles.focused]: focused,
          [styles.disabled]: disabled,
          [styles.filled]: value,
          [styles.hasLabel]: label,
          [styles.hasError]: error
        },
        className
      ) }
    >
      <div className={ cn(styles.inner, innerClassName) }>
        { leftAddonsRenderer() }

        <div className={ styles.inputWrapper }>
          { label && (
            <div className={ styles.label }>
              { label }
            </div>
          ) }

          <input
            className={ cn(styles.input, styles[size], inputClassName) }
            ref={ ref }
            type={ type }
            value={ value }
            placeholder={ placeholder }
            disabled={ disabled }
            required={ required }
            onChange={ handleInputChange }
            onFocus={ handleInputFocus }
            onBlur={ handleInputBlur }
            data-test-id={ dataTestId }
          />
        </div>

        { rightAddonsRenderer() }
      </div>

      { (error || hint) && (
        <span className={ styles.sub }>
          { error || hint }
        </span>
      ) }

      { children }
    </div>
  );
});
