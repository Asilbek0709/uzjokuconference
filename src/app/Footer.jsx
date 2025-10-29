"use client";

import Link from "next/link";
import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { usePathname, useRouter } from "next/navigation";

export default function footer() {
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
    </>
  )

}