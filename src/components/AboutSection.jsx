import React, { useEffect } from 'react'
import Button from '../UI/Button'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

function AboutSection() {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top center',
            },
            defaults: {
                duration: .5
            }
        })
        tl.from('.about-section .img-wrapper .overlay', {
            clipPath: 'inset(0% 0% 100% 0%)',
            opacity: 0,
        })
        tl.from('.about-section .img-wrapper img', {
            clipPath: 'inset(0% 0% 100% 0%)',
            opacity: 0,
        })
        tl.to('.about-section .img-wrapper img', {
            padding: '15px',
        })
        tl.from('.about-content > *', {
            opacity: 0,
            y: 40,
            stagger: .2
        }, '-=1')
    }, [])

    return (
        <section className="container mx-auto about-section grid grid-cols-12 gap-10 h-164">
            <div className="img-wrapper col-span-7 h-full relative">
                <div className="overlay z-1"></div>
                <img src="/images/home-4.webp" alt="Home Image" className='rounded-4xl inline-block w-full h-full object-cover relative z-2' />
            </div>

            <div className="about-content flex flex-col justify-center gap-5 col-span-5 h-full">
                <span className="font-medium category">Elegance - Timeless</span>
                <h2 className="text-7xl font-semibold leading-23">Modern Style Timeless Charm</h2>
                <p className='font-medium w-[55%]'>Discover Poliform's 2024 preview, featuring sofas, chairs, and armchairs embodying diverse lifestyle concepts, alongside striking tables, coffee tables, and sideboards.</p>
                <Button text='About Us' className='w-max' />
            </div>
        </section>
    )
}

export default AboutSection