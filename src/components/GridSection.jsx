import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { HiArrowUpRight } from "react-icons/hi2"
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function GridSection() {
    useGSAP(() => {
        ScrollTrigger.matchMedia({
            "(min-width: 1024px)": function () {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.grid-section',
                        start: '5% 5%',
                        end: '+=3000',
                        scrub: true,
                        pin: true
                    },
                    defaults: {
                        ease: 'power1.out',
                        duration: 1,
                    }
                });
                tl.from('.box-wrapper.animation .overlay', {
                    clipPath: 'inset(0% 0% 100% 0%)',
                })
                tl.from('.box-wrapper.animation img', {
                    clipPath: 'inset(0% 0% 100% 0%)',
                }, '-=.8')
                tl.to('.box-wrapper.animation', {
                    padding: '15px',
                    duration: .5
                })
                tl.from('.box-wrapper .effect', {
                    opacity: 0
                })
                tl.from('.grid-box', {
                    clipPath: 'inset(0% 0% 100% 0%)',
                    stagger: .3
                }, '-=.7')
                tl.from('.text-content .text', {
                    opacity: 0,
                    y: -40,
                    stagger: .2,
                    ease: 'power4.out'
                })
            }
        })
    }, [])

    return (
        <section className='container mx-auto mt-10 flex flex-wrap lg:flex-nowrap gap-4 grid-section h-full lg:h-164'>
            <div className="w-[100%] lg:w-[60%] 2xl:w-[75%] h-full">
                <div className="box-wrapper animation relative w-full h-60 lg:h-full flex items-center justify-center">
                    <div className="overlay z-1"></div>
                    <div className="effect z-3"></div>
                    <img
                        src="/images/home-3.webp"
                        alt="Home Image"
                        className='rounded-3xl w-full h-full object-cover relative z-2'
                    />
                    <div className="text-content absolute z-5 text-center">
                        <span className='border-2 border-white text-white rounded-4xl py-1 px-5 lg:py-2 lg:px-7 inline-block mb-2 font-semibold text'>Aesthetic</span>
                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white text">Modern</h2>
                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white text">Minimalist</h2>
                    </div>
                </div>
            </div>

            <div className="w-[100%] lg:w-[40%] 2xl:w-[25%] flex flex-col gap-4">
                <div className="grid-box bg-cream col-span-3 rounded-3xl flex flex-col justify-between items-start p-7 h-55 lg:h-60">
                    <span className='border-2 border-black rounded-4xl py-1 px-5 lg:py-2 lg:px-7 inline-block mb-2 font-semibold'>Aesthetic</span>
                    <p className='text-black font-medium w-full lg:w-[80%]'>Aesthetic furniture where every piece tells a story of style</p>
                    <h2 className="text-3xl font-semibold w-full lg:w-[60%]">Into a gallery of elegance</h2>
                </div>

                <div className="col-span-3 rounded-3xl bg-[url(/images/chair.webp)] bg-center bg-no-repeat bg-cover p-7 bg-effect h-55 lg:h-100 cursor-pointer grid-box">
                    <div className="content-area relative">
                        <span className='border-2 border-white text-white rounded-4xl py-1 px-4 lg:py-2 lg:px-4 inline-block mb-2 font-semibold'>Best Furniture</span>
                        <p className='font-medium text-lg text-white mt-5'>Indulge the artistry<br />of everyday living</p>
                    </div>
                    <div className="absolute -right-3 -bottom-3 bg-white-2 w-20 h-20 rounded-full text-white flex items-center justify-center text-2xl p-2.5">
                        <div className="icon bg-black w-full h-full rounded-full text-white flex items-center justify-center text-2xl">
                            <HiArrowUpRight />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default GridSection