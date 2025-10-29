import '../globals.css'

export default function ContactPage() {


    return(
        <div className='contact-page'>
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
    )
}