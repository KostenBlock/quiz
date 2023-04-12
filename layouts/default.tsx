import {PropsWithChildren, useEffect, useRef} from "react";
import { useDispatch } from "react-redux";
import { setState } from "~/store/reducers/globals.slice";

import classes from "~/styles/layout-default.module.scss";
import Navbar from "~/components/layouts-components/navbar";


export default function Default({ children }: PropsWithChildren) {
    const ref = useRef<HTMLDivElement | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setState({ isRetina: detectIos() }));
        dispatch(setState({ width: innerWidth, height: innerHeight }))
    }, []);

    const detectIos = () => {
        const toMatch = [
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /Macintosh/i
        ];

        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    };

    return (
        <div ref={ref} className={`${classes.layout__wrapper}`}>
            <Navbar />
            {children}
        </div>
    );
}