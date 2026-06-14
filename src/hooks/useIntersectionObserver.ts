"use client";

import { useEffect } from "react";

export function useIntersectionObserver() {
    useEffect(() => {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) e.target.classList.add("visible");
            });
        }, { threshold: 0.07 });

        const elements = document.querySelectorAll(".reveal");
        elements.forEach((el) => revealObserver.observe(el));

        return () => {
            elements.forEach((el) => revealObserver.unobserve(el));
            revealObserver.disconnect();
        };
    }, []);
}
