import Image from "next/image";
import styles from "./page.module.css";
import Hero from 'next/image'
import Requirements from 'next/image'

export default function Home() {
  return (
      <div className="home">
        <div className="hero">
          <h1>O‘zbek tiliga Davlat tili maqomi berilganining 36 yilligi munosabati hamda <span className="blue">O‘zbekiston Respublikasi Prezidentining 2019-yil 21-oktyabrdagi PF-5850-son</span> “O‘zbek tilining Davlat tili sifatidagi nufuzi va mavqeyini tubdan oshirish chora-tadbirlari to‘g‘risida”gi, 2020-yil 20-oktyabrdagi PF-6084-son “Mamlakatimizda o‘zbek tilini yanada rivojlantirish va til siyosatini takomillashtirish chora-tadbirlari to‘g‘risida”gi Farmonida belgilangan vazifalar ijrosini ta’minlash maqsadida O‘zbekiston jurnalistika va ommaviy kommunikatsiyalar universitetida 2025-yil 15-oktyabr kuni <span className="blue">“TIL, ADABIYOT VA JURNALISTIKA TA’LIMI: MUAMMO, YECHIM VA ISTIQBOLLAR”</span> mavzusida xalqaro ilmiy-amaliy konferensiya o‘tkaziladi.</h1>
          <img src="/image/hero.png" alt="" />
        </div>
        <div className="variations">
          <h1> <span className="blue">Anjuman materiallari to‘plamiga quyidagi shо’balar asosida ilmiy maqolalar qabul qilinadi</span> </h1>
          <div className="variations-container">
            <div className="variation-card"><p>Filologiya ta’limida tilshunoslikning taraqqiyot tendensiyalari.</p></div>
            <div className="variation-card"><p>Adabiyotshunoslik va tarjima faoliyatida nazariya, amaliyot hamda innovatsion yondashuvlar.</p></div>
            <div className="variation-card"><p>Ijtimoiy-siyosiy ong va til madaniyatini shakllantirish masalalari.</p></div>
            <div className="variation-card"><p>Raqamli davrda jurnalistika va PR: kommunikatsiya va o‘zaro hamkorlikning yangi formatlari.</p></div>
            <div className="variation-card"><p>Nutq ta’sirchanligini oshirishda notiqlik san’ati, nutq madaniyati va muloqot psixologiyasi.</p></div>
          </div>
        </div>
        <div className="requirements">
          <h1><span className="blue">Tezislarga qo`yiladigan texnik talablar</span></h1>
          <div className="requirements-main">
            <div className="requirements-container">
              <div className="requirement-card"><p>Matn lotin alifbosida, hajmi - havolalar bilan 5-8 bet</p></div>
              <div className="requirement-card"><p>formati – Microsoft Word</p></div>
              <div className="requirement-card"><p>shrift hajmi – 14, oralig‘i – 1,5.</p></div>
              <div className="requirement-card"><p>Maqola yuqori qismida qaysi shubaga tegishli ekanligini belgilash zarur.</p></div>
              <div className="requirement-card"><p>shrifti – Times New Roman</p></div>
              <div className="requirement-card"><p>satrning o‘ng tomonida – muallif haqida ma’lumot</p></div>
            </div>
            <img src="/image/requirements.png" alt="" />
          </div>
        </div>
        <div className="faculty">
          <h1><span className="blue">Konferensiya tashkiliy qo‘mitasi</span></h1>
          <div className="faculty-main">
            <h2>Xalqaro munosabatlar va ijtimoiy-gumanitar fanlar fakulteti, O‘zbek tili va adabiyoti kafedrasi</h2>
            <img src="/image/faculty.png" alt="" />
          </div>
        </div>
        <div className="location">
          <div className="info">
            <p>Manzil: <br /> O‘zJOKU Xalqaro munosabatlar va ijtimoiy-gumanitar fanlar fakulteti O‘zbek tili va adabiyoti kafedrasi, Toshkent shahri, Markaz 5/Qiyot 88.</p>
            <p>Murojaat uchun <br /> Nargiza Mirzayeva – <br />+998 93 561 22 62 <br /> Munira Nazarova – <br />+998 90 944 36 16 </p>
          </div>
              <div className="map" style={{ position: "relative", overflow: "hidden" }}>
                    <a
                      href="https://yandex.uz/maps/org/34137449087/?utm_medium=mapframe&utm_source=maps"
                      style={{
                        color: "#eee",
                        fontSize: "12px",
                        position: "absolute",
                        top: 0,
                      }}
                    >
                      Университет журналистики и массовых коммуникаций
                    </a>

                    <a
                      href="https://yandex.uz/maps/10335/tashkent/category/university/184106140/?utm_medium=mapframe&utm_source=maps"
                      style={{
                        color: "#eee",
                        fontSize: "12px",
                        position: "absolute",
                        top: "14px",
                      }}
                    >
                      ВУЗ в Ташкенте
                    </a>

                    <iframe
                      src="https://yandex.uz/map-widget/v1/?ll=69.277216%2C41.325641&mode=poi&poi%5Bpoint%5D=69.277737%2C41.324664&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D34137449087&z=17.4"
                      width="100%"
                      height="500"
                      frameBorder="0"
                      allowFullScreen
                      style={{
                        position: "relative",
                        border: 0,
                        borderRadius: "15px",
                      }}></iframe>
              </div>
        </div>
      </div>
  );
}
