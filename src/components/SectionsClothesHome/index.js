import styles from "./SectionsClotherHome.module.css";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import Three from "../ThreeMainPage";

function SectionsClotherHome() {
  return (
    <>
      <div className={styles.container} /* SHIRTS */>
        <h1>Camisetas</h1>
        <div className={styles.slider}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 5, spaceBetween: 50 }
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {Array(12).fill(0).map((_, index) => (
              <SwiperSlide key={index} >
                <div className={styles.productCard}>
                <img src="//img.ltwebstatic.com/images3_pi/2023/06/02/1685696511c08f157b32d3ecaa23ad10268a2a1837.webp" alt="Camiseta Universe" />
                <h5 style={{ marginTop: "2vh" }}>Camiseta Universe</h5>
                <p>R$ 100</p>
                <a href="/">
                  <button type="button" className="btn btn-dark">Ver Produto</button>
                </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className={styles.container} /* SHORTS */>
        <h1>Shorts</h1>
        <div className={styles.slider}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 5, spaceBetween: 50 }
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {Array(12).fill(0).map((_, index) => (
              <SwiperSlide key={index} className={styles.productCard}>
                <img src="//img.ltwebstatic.com/images3_pi/2023/07/19/1689764129ec946ba320d767d3a4f00541f3e62cc9_wk_shein_thumbnail_900x.jpg" alt="Shorts Rosto" />
                <h5 style={{ marginTop: "2vh" }}>Shorts Rostos</h5>
                <p>R$ 50</p>
                <a href="/">
                  <button type="button" className="btn btn-dark">Ver Produto</button>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      <Three />
          
      <div className={styles.container} /* PANTS */>
        <h1>Calças</h1>
        <div className={styles.slider}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 5, spaceBetween: 50 }
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {Array(12).fill(0).map((_, index) => (
              <SwiperSlide key={index} className={styles.productCard}>
                <img src="https://truewerk.com/cdn/shop/files/t1_werkpants_mens_olive_flat_lay_4825e693-f588-4813-bff0-1d4c46ce82ce.jpg?v=1713822726&width=2400" alt="Calças Lightweight Work" />
                <h5 style={{ marginTop: "2vh" }}>Calças Lightweight Work</h5>
                <p>R$ 120</p>
                <a href="/">
                  <button type="button" className="btn btn-dark">Ver Produto</button>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>


      <div className={styles.container} /* SWEATSHIRT */>
        <h1>Moletons</h1>
        <div className={styles.slider}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 5, spaceBetween: 50 }
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {Array(12).fill(0).map((_, index) => (
              <SwiperSlide key={index} className={styles.productCard}>
                <img src="https://acdn.mitiendanube.com/stores/001/111/914/products/shadow-d32167e42820a4e6b617108202482599-1024-1024.webp" alt="Moletom Gengar" />
                <h5 style={{ marginTop: "2vh" }}>Moletom Gengar</h5>
                <p>R$ 150</p>
                <a href="/">
                  <button type="button" className="btn btn-dark">Ver Produto</button>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default SectionsClotherHome;
