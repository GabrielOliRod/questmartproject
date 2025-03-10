import styles from "./SectionsClotherHome.module.css";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import Three from "../ThreeMainPage";
import shirts from "../../database/shirtsdb.json"
import shorts from "../../database/shortsdb.json"
import pants from "../../database/pantsdb.json"
import sweatshirts from "../../database/sweatshirtdb.json"
import ButtonProduct from "../ButtonProduct";

function SectionsClotherHome() {
  return (
    <>
      <div className={styles.container} /* SHIRTS */>
      <a href="/Camisetas">
        <h1>Camisetas</h1>
      </a>
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
            {shirts.slice(0, 12).map((shirt) => (
              <SwiperSlide key={shirt.id}>
                <div className={styles.productCard}>
                  <img src={shirt.photo} alt={shirt.name} />
                  <h5 style={{ marginTop: "2vh" }}>{shirt.name}</h5>
                  <p>R$ {shirt.price}</p>
                  <ButtonProduct product={shirt} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className={styles.container} /* SHORTS */>
      <a href="/Shorts">
        <h1>Shorts</h1>
      </a>
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
            {shorts.slice(0, 12).map((short) => (
              <SwiperSlide key={short.id}>
                <div className={styles.productCard}>
                  <img src={short.photo} alt={short.name} />
                  <h5 style={{ marginTop: "2vh" }}>{short.name}</h5>
                  <p>R$ {short.price}</p>
                  <ButtonProduct product={short} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      <Three />
          
      <div className={styles.container} /* PANTS */>
      <a href="/Calcas">
        <h1>Calças</h1>
      </a>
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
            {pants.slice(0, 12).map((pant) => (
              <SwiperSlide key={pant.id}>
                <div className={styles.productCard}>
                  <img src={pant.photo} alt={pant.name} />
                  <h5 style={{ marginTop: "2vh" }}>{pant.name}</h5>
                  <p>R$ {pant.price}</p>
                  <ButtonProduct product={pant} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>


      <div className={styles.container} /* SWEATSHIRT */>
      <a href="/Moletons">
        <h1 onClick={() => window.location.href = "/Moletons"}>Moletons</h1>
      </a>
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
            {sweatshirts.slice(0, 12).map((sweatshirt) => (
              <SwiperSlide key={sweatshirt.id}>
                <div className={styles.productCard}>
                  <img src={sweatshirt.photo} alt={sweatshirt.name} />
                  <h5 style={{ marginTop: "2vh" }}>{sweatshirt.name}</h5>
                  <p>R$ {sweatshirt.price}</p>
                  <ButtonProduct product={sweatshirt} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default SectionsClotherHome;
