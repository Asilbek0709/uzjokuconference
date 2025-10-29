"use client"

import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import ThemeSwitcher from "./themeSwitcher";
import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {

          useEffect(() => {
        Aos.init({
            duration: 3000,
            once: true,
        })
    }, [])

    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const [menuOpen, setMenuOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        if (!isHomePage) return;
        const handScroll = () => setScrolled(window.scrollY > 500)
        window.addEventListener("scroll", handScroll)
        return () => window.removeEventListener("scroll", handScroll)
    }, [isHomePage])

  return (
    <html lang="uz">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
                <header data-aos="fade" className={`header ${isHomePage ? scrolled ? "scrolled" : "" : "static-header"}`}>
            <div className="header-logo">
                <img src="/image/logo.png" alt="" />
            </div>
            <div className="header-navigation">
                <div className={`burger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={`nav ${menuOpen ? "open" : ""}`}>
                    <ul className="upper-navigation">
                        <Link href="/" className="Link" onClick={() => setMenuOpen(false)}>Bosh sahifa</Link>
                        <Link href="/conference" className="Link" onClick={() => setMenuOpen(false)}>Anjuman</Link>
                        <Link href="/gallery" className="Link" onClick={() => setMenuOpen(false)}>Galereya</Link>
                        <Link href="/contact" className="Link" onClick={() => setMenuOpen(false)}>Aloqa</Link>
                    </ul>
                <div className="select">
                    <select name="" id="">
                        <option value="uz">UZ</option>
                        <option value="ru">RU</option>
                        <option value="en">EN</option>
                    </select>
                </div>
                <ThemeSwitcher /> 
                </nav>             
            </div>
        </header>
        
            {children}
        
        <footer data-aos="fade">
            <div className="footer-logo">
                <img src="/image/logo.png" alt="" />
            </div>
            <div className="line"></div>
            <div className="fast-links">
                <div className="down-navigation">
                    <ul className="footer-navigation">
                        <li><span className="heading">Navigatsiya</span></li>
                        <Link href="/" className="Link">Bosh sahifa</Link>
                        <Link href="/conference" className="Link">Anjuman</Link>
                        <Link href="/gallery" className="Link">Galereya</Link>
                        <Link href="/contact" className="Link">Aloqa</Link>
                    </ul>
                </div>
                <div className="faq">
                    <p><span className="heading">FAQ</span></p>
                    <p>Konferensiya Ishchi tillari</p>
                    <p>Konferensiyada ishtrok etish talabi</p>
                    <p>Tezislarni shakllantirishga qo‘yiladigan talablar</p>
                    <p>Texnik talablar</p>
                </div>
            </div>
            <div className="line"></div>
            <div className="social-media">
                <p><span className="heading">Havolalar</span></p>
                <img src="/image/tg.png" alt="" /> <br />
                <img src="/image/fb.png" alt="" /> <br />
                <img src="/image/inst.png" alt="" />
            </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
