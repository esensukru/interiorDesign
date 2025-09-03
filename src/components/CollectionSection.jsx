import React, { useEffect } from 'react'
import Button from '../UI/Button'
import { HiArrowUpRight } from "react-icons/hi2"
import { informations } from '../data/DataForCollectionSection'
import gsap from 'gsap'

function CollectionSection() {
    const chunkedData = [];
    for (let i = 0; i < informations.length; i += 2) {
        chunkedData.push(informations.slice(i, i + 2));
    }

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.collection-section',
                start: 'top 70%',
                markers: true
            },
            defaults: {
                duration: .5
            }
        });

        tl.from('.collection-section .top-area h2', {
            opacity: 0,
            y: 40
        })
        tl.from('.collection-section .top-area a', {
            opacity: 0,
            y: 40,
        }, '-=.2')
        tl.from('.collection-section .top-area p', {
            opacity: 0,
            y: 40,
        }, '-=.2')
        tl.from('.collection-section .box > div', {
            opacity: 0,
            y: 40,
            stagger: .3,
            scale: .8
        }, '-=.2')
    }, [])

    return (
        <section className='container mx-auto collection-section mt-10'>
            <div className="top-area grid grid-cols-12">
                <div className="col-span-6">
                    <h2 className="text-7xl font-semibold leading-23">Explore Our Proudly Collection</h2>
                </div>
                <div className="col-start-9 col-span-3 flex flex-col items-end gap-5 text-end top-content">
                    <Button />
                    <p className='font-medium'>Poliform will showcase its vision of contemporary architecture, interior design trends, and innovative living at Salone de Mobile.Milano 2024</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-5 mt-10">
                {
                    chunkedData.map((box, index) => (
                        <div key={index} className="flex flex-col gap-5 box">
                            {
                                box.map((box) => (
                                    <div key={box.id} className={`relative ${box.height}`}>
                                        <div className="img-wrapper h-full">
                                            <div className="effect h-full"></div>
                                            <img src={box.imageURL} alt={box.title} className='rounded-3xl w-full h-full object-cover' />
                                        </div>
                                        <div className="content absolute bottom-0 left-0 w-full rounded-3xl px-7 pb-5 flex justify-between items-center">
                                            <h3 className="text-white font-medium text-3xl tracking-[2px]">{box.title}</h3>
                                            <div className="icon bg-white w-10 h-10 rounded-full text-black flex items-center justify-center text-lg">
                                                <HiArrowUpRight />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default CollectionSection