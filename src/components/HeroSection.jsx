import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstAnimation } from '../redux/slices/firstAnimationSlice';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Button from '../UI/Button';
import { FaPlayCircle } from "react-icons/fa";
import CircularText from '../UI/CircularText';

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger, ScrollSmoother);

function HeroSection() {
    const { firstAnimation } = useSelector((store) => store.firstAnimation);
    const dispatch = useDispatch();
    let smoother = null;

    const isMobile = () => {
        return window.innerWidth <= 768;
    };

    useEffect(() => {
        if (!isMobile()) {
            smoother = ScrollSmoother.create({
                smooth: 3,
                effects: true,
                normalizeScroll: true,
            });
            window.smoother = smoother;
            smoother.paused(true);
        }

        return () => {
            if (smoother) {
                smoother.kill();
                smoother = null;
            }
        };
    }, [firstAnimation]);

    useGSAP(() => {
        if (firstAnimation) {
            const tl = gsap.timeline({
                defaults: {
                    duration: 1,
                    ease: 'expo'
                },
                onComplete: () => {
                    dispatch(setFirstAnimation(false));
                }
            });
            tl.to('.hero-img .img-wrapper', {
                height: '150px',
                delay: 0.6
            });
            tl.to('.hero-img .img-wrapper', {
                width: '100%',
            });
            tl.to('.hero-img .img-wrapper', {
                height: '100%',
            });
        }
    }, []);

    useGSAP(() => {
        if (!firstAnimation) {
            const split = new SplitText('.hero-title', { type: 'chars' });
            const masterTl = gsap.timeline({
                defaults: {
                    duration: 1.3,
                    ease: 'power4.out'
                }
            });

            masterTl.from(split.chars, {
                opacity: 0,
                y: 40,
                stagger: 0.05,
            });

            masterTl.to('.logo-wrapper', {
                y: 0,
                opacity: 1
            }, '-=1.2');
            masterTl.to('.nav a', {
                y: 0,
                opacity: 1,
                stagger: 0.1,
            }, '-=1.1');
            masterTl.to('header .icon-wrapper', {
                y: 0,
                opacity: 1,
            }, '-=1.1');
            masterTl.from('.hero-box-1', {
                y: -35,
                opacity: 0
            }, '-=1');
            masterTl.from('.hero-box-2', {
                y: -35,
                opacity: 0
            }, '-=0.8');
            masterTl.from('.circular-text-wrapper', {
                y: -35,
                opacity: 0,
                onComplete: () => {
                    if (window.smoother && !isMobile()) {
                        window.smoother.paused(false);
                    }
                }
            }, '-=1.1');
            masterTl.to('.hero-img .img-wrapper', {
                scale: 1.2,
                duration: 3
            }, '-=1.2');
        }
    }, [firstAnimation]);

    useEffect(() => {
        if (!firstAnimation) {
            const scrollTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.hero-content',
                    scrub: true,
                    start: 'top top'
                }
            });

            scrollTl.to('.hero-title', {
                y: 80,
                opacity: 0
            });
            scrollTl.to('.hero-box-1', {
                y: -100,
                opacity: 0
            }, 0);
            scrollTl.to('.hero-box-2', {
                y: -50,
                opacity: 0
            }, 0);
            scrollTl.to('.circular-text-wrapper', {
                y: -130,
                opacity: 0
            }, 0);
        }
    }, [firstAnimation]);

    return (
        <section className="h-[60vh] md:h-screen overflow-hidden">
            <div className="hero-img flex items-center justify-center h-full w-full">
                <div className="img-wrapper effect relative h-full flex items-center justify-center">
                    <img
                        src="/images/hero.webp"
                        alt="Hero Image"
                        className='w-full h-full object-cover growingAnimation'
                    />
                </div>
            </div>
            {
                !firstAnimation && (
                    <div className="hero-content w-full h-[60vh] md:h-screen absolute top-0 left-0 flex flex-col items-center justify-center">
                        <div className="title-wrapper text-center">
                            <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-black tracking-[3px]">Contemporary</h1>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 justify-center items-center absolute left-0 bottom-10 container mx-auto right-0">
                            <div className="hero-box hero-box-1 p-3 xl:p-5 hidden lg:block lg:col-span-5 xl:col-span-4 rounded-xl text-white-2 flex flex-col items-start justify-center">
                                <p className='line-clamp-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate quas ex, culpa dolor nihil officiis, optio nisi quae adipisci odio quo. Maiores ullam labore nobis iusto, repellendus ipsa quidem.</p>
                                <Button className='mt-5' />
                            </div>

                            <div className="hero-box hero-box-2 p-2 lg:p-3 xl:p-5 md:col-start-1 lg:col-start-6 col-span-6 lg:col-span-3 xl:col-span-2 rounded-xl text-white-2 flex items-center justify-center relative">
                                <div className="img-wrapper h-full w-full rounded-xl">
                                    <img src="/images/home.webp" alt="Home Image" className='w-full h-full object-cover rounded-xl' />
                                </div>
                                <FaPlayCircle className='play-icon absolute top-[50%] left-[50%] text-5xl cursor-pointer' />
                            </div>

                            <div className="circular-text-wrapper col-span-6 lg:col-span-4 xl:col-span-6 ml-auto hidden md:block">
                                <CircularText text="E-Design * E-Design * " onHover='speedUp' spinDuration={20} className='col-span-6 ml-auto' />
                            </div>
                        </div>

                    </div>
                )
            }
        </section>
    );
}

export default HeroSection;
