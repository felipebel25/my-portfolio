import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Box } from "@mui/material"
import { HeaderHomePortfolio } from "../molecules/homePortfolio/header/HeaderHomePortfolio"
import { styles } from "./stylesPortfolio"
import { MainHomePortfolio } from "../molecules/homePortfolio/main/MainHomePortfolio";

export const Portfolio = () => {
    const router = useRouter();
    useEffect(() => {
        const handleScrollToSection = (e: any) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }

            router.push(targetId, undefined);
        };

        const links: any = document.querySelectorAll('a[href^="#"]');
        links.forEach((link: any) => {
            link.addEventListener('click', handleScrollToSection);
        });

        return () => {
            links.forEach((link: any) => {
                link.removeEventListener('click', handleScrollToSection);
            });
        };
    }, []);
    return (
        <Box sx={styles.main}>
            <HeaderHomePortfolio />
            <MainHomePortfolio />
        </Box>
    )
}
