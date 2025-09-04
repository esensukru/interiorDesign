import React from 'react'
import Counter from '../UI/Counter'

function CounterSection() {
    return (
        <section className='container mx-auto counter-section mt-6 sm:my-10 grid grid-cols-4 gap-5'>
            <div className="box flex flex-wrap text-black rounded-2xl h-30 px-5 xl:px-20 col-span-2 md:col-span-1 md:mx-auto text-start justify-start h-auto">
                <Counter
                    from={0}
                    to={500}
                    separator='+'
                    className='text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-light'
                />
                <span className='text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-light relative ml-1 -top-1'>+</span>
                <span className="md:text-lg text-neutral-400 w-full font-medium">Products</span>
            </div>

            <div className="box flex flex-wrap text-black rounded-2xl h-30 px-5 xl:px-20 col-span-2 md:col-span-1 mx-auto text-end md:text-start justify-end md:justify-start h-auto">
                <Counter
                    from={0}
                    to={20}
                    separator='+'
                    className='text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-light'
                />
                <span className='text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-light relative ml-1 -top-1'>+</span>
                <span className="md:text-lg text-neutral-400 w-full font-medium">Projects</span>
            </div>

            <div className="box flex flex-wrap text-black rounded-2xl h-30 px-5 xl:px-20 col-span-2 md:col-span-1 md:mx-auto text-start justify-start h-auto">
                <Counter
                    from={0}
                    to={50}
                    separator='+'
                    className='text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-light'
                />
                <span className='text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-light relative ml-1 -top-1'>+</span>
                <span className="md:text-lg text-neutral-400 w-full font-medium">Satisfied Customers</span>
            </div>

            <div className="box flex flex-wrap text-black rounded-2xl h-30 px-5 xl:px-20 col-span-2 md:col-span-1 mx-auto text-end md:text-start justify-end md:justify-start h-auto">
                <Counter
                    from={0}
                    to={1}
                    separator='+'
                    className='text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-light'
                />
                <span className='text-xl lg:text-3xl font-light lg:font-medium'>st</span>
                <span className="md:text-lg text-neutral-400 w-full font-medium">Top in 1 Paris</span>
            </div>

        </section>
    )
}

export default CounterSection