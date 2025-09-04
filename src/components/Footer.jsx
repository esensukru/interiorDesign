import React from 'react'

function Footer() {
    return (
        <footer className="bg-black mt-6 sm:mt-10 py-10">
            <div className="container mx-auto footer-content">
                <div className="footer-top flex justify-between items-start">
                    <div className="text-center lg:text-start lg:w-[45%]">
                        <h2 className="text-4xl sm:text-6xl xl:text-7xl font-semibold text-white mb-3 lg:mb-10 leading-12 md:leading-18 xl:leading-23">Engage with Us in Conversation</h2>
                        <p className="font-medium text-neutral-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, omnis nostrum. Tempora dicta excepturi vitae cupiditate labore iure perspiciatis optio ducimus! Nihil provident temporibus voluptate eligendi? Iure dicta iste laboriosam!</p>
                    </div>
                    <div className="w-[40%] hidden lg:block">
                        <div className="img-wrapper w-full h-80">
                            <img src="/images/home-11.webp" alt="Home Image" className='rounded-3xl w-full h-full object-cover' />
                        </div>
                    </div>
                </div>

                <div className="footer-bottom grid grid-cols-12 mt-10 lg:mt-25 gap-5 lg:gap-0">
                    <div className="col-span-12 sm:col-span-4 lg:col-span-3">
                        <div className="h3 font-semibold text-lg text-white mb-2 text-center lg:text-start">About</div>
                        <div className="flex flex-col items-center lg:items-start text-neutral-500 gap-1">
                            <a href="#">Our Story</a>
                            <a href="#">Store Locator</a>
                            <a href="#">Sustainability</a>
                            <a href="#">Careers</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>

                    <div className="col-span-12 sm:col-span-4 lg:col-span-3">
                        <div className="h3 font-semibold text-lg text-white mb-2 text-center lg:text-start">Informations</div>
                        <div className="flex flex-col items-center lg:items-start text-neutral-500 gap-1">
                            <a href="#">Prices and Payments</a>
                            <a href="#">Shopping</a>
                            <a href="#">Return Policy</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>

                    <div className="col-span-12 sm:col-span-4 lg:col-span-3">
                        <div className="h3 font-semibold text-lg text-white mb-2 text-center lg:text-start">Social Media</div>
                        <div className="flex flex-col items-center lg:items-start text-neutral-500 gap-1">
                            <a href="#">Instagram</a>
                            <a href="#">Facebook</a>
                            <a href="#">LinkedIn</a>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-3 flex justify-center lg:justify-end items-center lg:items-end mt-5 sm:mt-12 lg:mt-25">
                        <h2 className="text-4xl sm:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white">Poliform</h2>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer