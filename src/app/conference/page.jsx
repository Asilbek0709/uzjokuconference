import '@/app/globals.css'


export default function ConferencePage() {



    return(
        <div className='conference-page'>
            <img src="/image/hero.png" alt=""  className="conference-2025" />
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
        </div>
    )
}