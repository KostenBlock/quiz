import { ReactNode, useRef } from "react";

import classes from './plain-button.module.scss'

interface Props{
    /**
     * статус активности
     */
    isActive?: boolean,
    /**
     * статус блокировки
     */
    isDisabled?: boolean,
    /**
     * DOM элементы внутри кнопки
     */
    children?: ReactNode,
    /**
     * событие по клику
     */
    clickEvent?: () => void,
    /**
     * Класс неактивной кнопки
     */
    defaultClass?: string,
    /**
     * Класс активной кнопки
     */
    activeClass?: string,
    /**
     * Выбор цвета кнопки
     */
    buttonColor?: string,
    /**
     * Простой класс кнопки
     */
    className?: string,
    /**
     * Стили через JSX
     */
    style?: any,
    isAnimated?: boolean
}

export default function  PlainButton ({isActive, isDisabled, children, clickEvent = () => {}, defaultClass, activeClass, buttonColor, className, style, isAnimated=false}: Props) {
    /**
     * DOM элемент для сняти фокуса
     * @type {React.MutableRefObject<undefined>}
     */
    const buttonElement = useRef<HTMLButtonElement | null>(null);

    return (
        <button
            ref={buttonElement}
            style={{
                ...style,
                opacity: isDisabled ? '0.5' : '1'
            }}
            disabled={isDisabled}
            onClick={() => {clickEvent(); buttonElement?.current?.focus()}}
            className={`${classes.button__default} ${isActive ? `${classes.button__active} ${activeClass}` : defaultClass} ${className} button__regular-text ${isAnimated ? classes.button__animate : ""}`}
            onMouseLeave={() => buttonElement?.current?.blur()}
        >
            {children}
        </button>
    );
};

