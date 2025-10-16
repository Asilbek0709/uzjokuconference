"use client"

import '@/app/globals.css'
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Link from 'next/link';

export default function ConferencePage() {

      useEffect(() => {
        Aos.init({
          duration: 3000,
        })
      }, [])

    return(
        <div className='conference-page' data-aos="fade-up">
            <img src="/image/hero.png" alt=""  className="conference-2025" />
            <div className="variations">
          <h1> <span className="blue">Anjuman materiallari to‘plamiga quyidagi shо’balar asosida ilmiy maqolalar qabul qilinadi</span> </h1>
          <div className="variations-container">
            <div className="variation-card" data-aos="fade" ><Link href="/1-variation" className='Link'><p>Filologiya ta’limida tilshunoslikning taraqqiyot tendensiyalari.</p></Link></div>
            <div className="variation-card" data-aos="fade"><Link href="/2-variation" className='Link'><p>Adabiyotshunoslik va tarjima faoliyatida nazariya, amaliyot hamda innovatsion yondashuvlar.</p></Link></div>
            <div className="variation-card" data-aos="fade"><Link href="/3-variation" className='Link'><p>Ijtimoiy-siyosiy ong va til madaniyatini shakllantirish masalalari.</p></Link></div>
            <div className="variation-card" data-aos="fade"><Link href="/4-variation" className='Link'><p>Raqamli davrda jurnalistika va PR: kommunikatsiya va o‘zaro hamkorlikning yangi formatlari.</p></Link></div>
            <div className="variation-card" data-aos="fade"><Link href="/5-variation" className='Link'><p>Nutq ta’sirchanligini oshirishda notiqlik san’ati, nutq madaniyati va muloqot psixologiyasi.</p></Link></div>
          </div>
        </div>
        </div>
    )
}