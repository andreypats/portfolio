import React, { useState, useEffect } from "react";
import scrollToTop from "../../../assets/image/scrollToTop.svg";
import s from './ScrollToTop.module.scss'

export const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className={s.topToBtm}>
            {" "}
            {showTopBtn && (
                <img src={scrollToTop} alt="ScrollToTop" onClick={goToTop} className={s.iconBtn}/>
            )}{" "}
        </div>
    );
};