import { CSSProperties, LegacyRef, ReactNode, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectGlobalsSlice } from "~/store/reducers/globals.slice";

import classes from "./plain-image.module.scss";

interface plainImageI{
    src?: string;
    alt?: string;
    className?: string;
    classNameImage?: string;
    style?: {};
    handleReady?: () => void;
    handleError?: () => void;
    customType?: string;
    children?: ReactNode;
    imageRef?: LegacyRef<HTMLImageElement> | undefined;
    format?: string;
    imageKey?: string;
    styleImage?: CSSProperties;
    clickEvent?: () => void;
    hoverEvent?: (arg: boolean) => void;
    forcedPoint?: number | undefined;
}

export default function PlainImage ({
    children,
    imageRef,
    src,
    alt,
    className,
    classNameImage,
    style,
    handleReady = () => {},
    handleError = () => {},
    format,
    imageKey,
    styleImage,
    clickEvent = () => {},
    hoverEvent = () => {},
    customType=``,
    forcedPoint
}:plainImageI) {
    const ref = useRef<HTMLDivElement | null>(null);
    const { isRetina } = useSelector(selectGlobalsSlice)
    const [width, setWidth] = useState<number | null>(null);
    const [isWebp, setIsWebp] = useState<boolean | null>(null);
    const [point, setPoint] = useState<null | number>(null);
    const [imgType, setImgType] = useState<string | null>(null);
    const [completeSrc, setCompleteSrc] = useState('');

    const breakPoints = [600, 800, 1000, 1200, 2000, 2500, 3000, 3500, 4000];

    useEffect(() => {
        if (!ref.current || isRetina === null) return;

        if (isRetina) {
            setWidth(ref.current.clientWidth * 2);
        } else {
            setWidth(ref.current.clientWidth);
        }

    }, [ref.current]);

    useEffect(() => {
        if (width === null) return;
        testWebP().then((hasWebP: any) => setIsWebp(hasWebP));
        let tempIndex = null;
        let difference = 3000;
        if (forcedPoint !== undefined) {
            setPoint(forcedPoint);
            return;
        }
        for (const [index, breakPoint] of breakPoints.entries()) {
            if (difference > Math.abs(breakPoint - width)) {
                difference = Math.abs(breakPoint - width);
                tempIndex = index;
            }
        }
        if (tempIndex === null) {
            setPoint(breakPoints[5])
        } else {
            setPoint(breakPoints[tempIndex]);
        }
    }, [width]);

    useEffect(() => {
        if (isWebp === null || point === null) return;
        // @ts-ignore
        setImgType(isWebp ? 'webp' : format);
    }, [isWebp, point]);

    useEffect(() => {
        if (imgType === null) return;
        setCompleteSrc(`https://storage.yandexcloud.net/t2v-storage/images/${imageKey}/w${point}.${customType === '' ? imgType : customType}`);
    }, [imgType, imageKey]);

    function testWebP() {
        return new Promise((res) => {
            const webP = new Image();
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            webP.onload = webP.onerror = () => {
                res(webP.height === 2);
            };
        });
    }

    if (src) return (<div
            ref={ref}
            onClick={clickEvent}
            onMouseEnter={() => hoverEvent(true)}
            onMouseLeave={() => hoverEvent(false)}
            className={`${classes.picture__container} ${className}`}
            style={{...style}}
        >
            <img
                ref={imageRef}
                src={src}
                alt={alt}
                className={`${classNameImage} absolute`}
                style={{...styleImage}}
                onLoad={handleReady}
                onError={handleError}
            />
            {children}
        </div>);


    return (<div
            ref={ref}
            onClick={clickEvent}
            onMouseEnter={() => hoverEvent(true)}
            onMouseLeave={() => hoverEvent(false)}
            className={`${classes.picture__container} ${className}`}
            style={{...style}}
        >
            <img
                ref={imageRef}
                src={completeSrc}
                alt={alt}
                className={`${classNameImage} absolute`}
                style={{...styleImage}}
                onLoad={handleReady}
                onError={handleError}
            />
            {children}
        </div>);
};


