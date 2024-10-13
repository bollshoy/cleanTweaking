import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Импорт стилей Swiper
import './_Advantages.scss';

const Advantages = () => {
    return (
        <section className="advantages">
            <div className="advantages__container container">
                <div className="advantages__content-title">
                    <span className="advantages__subtitle">Более 500 бустов</span>
                    <h2 className="advantages__title">Вот что мы предлагаем</h2>
                </div>
               <div className="swiper">
                   <Swiper
                       className="mySwiper"
                       modules={[Navigation, Pagination, Scrollbar, A11y]} // Подключаем необходимые модули
                       spaceBetween={30}
                       slidesPerView={3}
                       pagination={{ clickable: true }}
                       navigation={{
                           nextEl: '.swiper-button-next', // Класс кастомной кнопки "вперед"
                           prevEl: '.swiper-button-prev' // Класс кастомной кнопки "назад"
                       }}
                       loop={true} // Добавлено для зацикливания
                       breakpoints={{
                           640: {
                               slidesPerView: 1,
                           },
                           768: {
                               slidesPerView: 2,
                           },
                           1024: {
                               slidesPerView: 3,
                           },
                           1280: {
                               slidesPerView: 4,
                           },
                       }}
                   >
                       <SwiperSlide>Слайд 1</SwiperSlide>
                       <SwiperSlide>Слайд 2</SwiperSlide>
                       <SwiperSlide>Слайд 3</SwiperSlide>
                       <SwiperSlide>Слайд 4</SwiperSlide>
                       <SwiperSlide>Слайд 5</SwiperSlide>
                   </Swiper>

                   {/* Кастомные стрелки навигации */}
                   <div className="swiper-button-prev"></div>
                   <div className="swiper-button-next"></div>
               </div>
            </div>
        </section>
    );
};

export default Advantages;
