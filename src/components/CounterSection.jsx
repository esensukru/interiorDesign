import React from 'react'
import Counter from '../UI/Counter'

function CounterSection() {
    return (
        <section className='container mx-auto counter-section my-10 grid grid-cols-4'>
            <div className="box flex flex-wrap text-black rounded-2xl h-30 px-20">
                <Counter
                    from={0}
                    to={500}
                    separator='+'
                    className='text-7xl font-light'
                />
                <span className='text-7xl font-light relative ml-1 -top-1'>+</span>
                <span className="text-lg text-neutral-400 w-full font-medium">Products</span>
            </div>

            <div className="box flex flex-wrap text-black rounded-2xl h-30 px-20">
                <Counter
                    from={0}
                    to={20}
                    separator='+'
                    className='text-7xl font-light'
                />
                <span className='text-7xl font-light relative ml-1 -top-1'>+</span>
                <span className="text-lg text-neutral-400 w-full font-medium">Projects</span>
            </div>

            <div className="box flex flex-wrap text-black rounded-2xl h-30 px-20">
                <Counter
                    from={0}
                    to={50}
                    separator='+'
                    className='text-7xl font-light'
                />
                <span className='text-7xl font-light relative ml-1 -top-1'>+</span>
                <span className="text-lg text-neutral-400 w-full font-medium">Satisfied Customers</span>
            </div>

            <div className="box flex flex-wrap text-black rounded-2xl h-30 px-20">
                <Counter
                    from={0}
                    to={1}
                    separator='+'
                    className='text-7xl font-light'
                />
                <span className='text-3xl font-medium'>st</span>
                <span className="text-lg text-neutral-400 w-full font-medium">Top in 1 Paris</span>
            </div>

        </section>
    )
}

export default CounterSection