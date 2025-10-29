"use client";

import Link from "next/link";
import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { usePathname, useRouter } from "next/navigation";
import ThemeSwitcher from "./themeSwitcher";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/"
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 3000,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (!isHomePage) return;
    const onScroll = () => setScrolled(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);


  return (
          <>
            <header data-aos="fade" className={`header ${isHomePage ? (scrolled ? "scrolled" : "") : "static-header"}`}>
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
                    <Link className="Link" href={'/'} onClick={() => setMenuOpen(false)}>Bosh sahifa</Link>
                    <Link className="Link" href={'/conference'} onClick={() => setMenuOpen(false)}>Anjuman</Link>
                    <Link className="Link" href={'/gallery'} onClick={() => setMenuOpen(false)}>Galereya</Link>
                    <Link className="Link" href={'/contact'} onClick={() => setMenuOpen(false)}>Aloqa</Link>
                  </ul>

                  <div className="select">
                    <select value=''>
                      <option value="uz">UZ</option>
                      <option value="ru">RU</option>
                      <option value="en">EN</option>
                    </select>
                  </div>
                  <ThemeSwitcher/>
                </nav>
              </div>
          </header>
        </>
  );
}
