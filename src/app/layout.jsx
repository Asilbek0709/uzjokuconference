"use client"

import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import ThemeSwitcher from "./themeSwitcher";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function RootLayout({ children }) {

          useEffect(() => {
        Aos.init({
            duration: 3000,
            once: true,
        })
    }, [])


  return (
    <html lang="uz">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
                <header data-aos="fade">
            <div className="header-logo">
                <img src="/image/logo.png" alt="" />
            </div>
            <div className="header-navigation">
                <ul className="upper-navigation">
                    <Link href="/" className="Link">Bosh sahifa</Link>
                    <Link href="/conference" className="Link">Anjuman</Link>
                    <Link href="/gallery" className="Link">Galereya</Link>
                    <Link href="/contact" className="Link">Aloqa</Link>
                </ul>
                <select name="" id="">
                    <option value="">UZ</option>
                    <option value="">RU</option>
                    <option value="">EN</option>
                </select>
                <ThemeSwitcher />              
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
