import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import slidersData from '../../../slidersData.js';
import {Pagination, Navigation} from 'swiper/modules';
import './_Advantages.scss';
import {NavLink} from "react-router-dom";

const Advantages = () => {
    const [priceCurrency, setPriceCurrency] = useState('RUB');

    const togglePrice = () => {
        setPriceCurrency(prev => (prev === 'RUB' ? 'EUR' : 'RUB'));
    };

    return (
        <section className="advantages">
            <div className="advantages__container container">
                <div className="advantages__title-content">
                    <h2 className="advantages__title">
                        Нам доверяют более <br/>
                        500+ наших клиентов
                    </h2>
                    <div className="price-toggle">
                        <button onClick={togglePrice}>
                            {priceCurrency === 'RUB' ? 'Показать в EUR' : 'Показать в RUB'}
                        </button>
                    </div>
                </div>

                <Swiper
                    className="mySwiper"
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    pagination={{clickable: true}}
                    navigation
                    modules={[Pagination, Navigation]}
                >
                    {slidersData.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="slide__content">
                                <div className="slide__item">
                                    <h3 className="slide__title">{slide.title}</h3>
                                    <p className="slide__text">{slide.description}</p>
                                    <p className="slide__price">
                                        Цена: {priceCurrency === 'RUB' ? slide.priceRUB : slide.priceEUR} {priceCurrency}
                                    </p>
                                    <button className="button button--animated slide__link">
                                        <NavLink to={'/'}>
                                            <span className="button__text">КУПИТЬ</span>
                                        </NavLink>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Advantages;
