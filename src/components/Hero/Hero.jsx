import React from 'react';
import discord from '../../assets/icons/discord.svg';
import vk from '../../assets/icons/vk.svg';
import telegram from '../../assets/icons/telegram.svg';
import email from '../../assets/icons/email.svg';
import Computers from "../Computers/Computers.jsx";
import './_Hero.scss';

const Hero = () => {

    const heroList = [
        {
            id: 1,
            image: discord,
            link: "https://discord.gg/Ea8FuHNuJT",
        },
        {
            id: 2,
            image: vk,
            link: "https://vk.com/clean_ok69",
        },
        {
            id: 3,
            image: telegram,
            link: "https://t.me/Clean_0K",
        },
        {
            id: 4,
            image: email,
            link: "mailto:gamerboy131964@gmail.com",
        },
    ];

    return (
        <section className="hero">
            <div className="hero__social">
                {heroList.map((item) => (
                    <div className="social__item" key={item.id}>
                        <a href={item.link} className="social__link">
                            <img src={item.image} alt="icon" className="social__img"/>
                        </a>
                    </div>
                ))}
            </div>
            <div className="hero__container container">
                <div className="hero__content">
                    <h1 className="hero__title">
                        Лучшая оптимизация <br/>
                        для вашего ПК
                    </h1>
                    <p className="hero__text">
                        Ускорьте работу вашего компьютера: советы <br/>
                        и инструменты для максимальной производительности.
                    </p>
                    <a href="#" className="hero__link">купить оптимизацию</a>
                </div>
                {/*<div className="mouse">*/}
                {/*    <div className="roll"></div>*/}
                {/*</div>*/}
            </div>

            <Computers/>

        </section>
    );
};

export default Hero;
