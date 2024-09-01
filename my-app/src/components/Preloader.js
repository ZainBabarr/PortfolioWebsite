import { useEffect, useState } from "react";
import React from "react";
import classes from "./Styles/preloader.module.css";

const svgClasses = {
    start: classes.idle,
    animating: classes.animating,
    closing: classes.closing,
};

export default function Preloader({ setNavbarVisible }) {
    const [svgStyle, setSvgStyle] = useState(svgClasses.animating);
    const [textStyle, setTextStyle] = useState(classes.pHidden);
    const [preloaderStyle, setPreloaderStyle] = useState(classes.preloader);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const timer2 = setTimeout(() => {
            setTextStyle(classes.p);
        }, 2000);

        const timer = setTimeout(() => {
            setSvgStyle(svgClasses.closing);
            setTextStyle(classes.pHidden);
        }, 3500);

        const timer3 = setTimeout(() => {
            setPreloaderStyle(classes.preloaderHidden);
            document.body.style.overflow = "visible";
            setNavbarVisible(true);
        }, 3700);

        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [setNavbarVisible]);

    return (
        <div className={preloaderStyle}>
            <svg viewBox="0 0 24 24" className={`${svgStyle} ${classes.largeSvg}`}>
                <g>
                    <path d="m 2 6 l 0 -4 l 19 0 l 0 18 L 2 20 l 0 -5 m 4 -10 l 11 0 l -11 12 L 17 17" strokeWidth="1.3" />
                </g>
            </svg>
            <p className={`code ${textStyle} ${classes.name}`}>Zain Babar</p>
        </div>
    );
}
