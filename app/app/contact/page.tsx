// pages/index.js
// import '../styles/globals.css'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Home () {
  return (
        <>
            <div
                id="home"
                className="relative overflow-hidden pt-[120px] md:pt-[130px] lg:pt-[100px]"
            >
                <div className="contact-banner">
                    <div className="container">
                        <div className="-mx-4 flex flex-wrap items-center relative z-10">
                            <div className="w-full px-4 flex items-center">
                                <div
                                    className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                                    data-wow-delay=".2s"
                                >
                                    <h1
                                        className="mb-6 text-4xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]"
                                    >
                                        Contact Us
                                    </h1>
                                    <p
                                        className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]"
                                    >
                                        {'We’re here to assist you with any questions or concerns you may have. Whether you need support with transactions, have feedback, or just want to learn more about our services, don’t hesitate to reach out!"'}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s' }}>
                        <div className="-mx-4 flex flex-wrap items-center px-10 pt-20">
                            <div className="w-full px-4 lg:w-1/2">
                                <div className="mb-12 max-w-[540px] lg:mb-0">
                                    <div className="contactCard px-5 py-5 rounded-xl mb-5">
                                        <h3 className="mb-2 text-2xl font-semibold md:leading-[1.42] text-dark dark:text-white">
                                            USA
                                        </h3>
                                        <div className="flex items-center mb-8">
                                            <img className="mr-3" src="/images/hero/location.png" />
                                                <p className="text-1xl font-normal md:leading-[1.42] text-dark dark:text-white">
                                                    69 street near mall, Washington DC USA
                                                </p>
                                        </div>
                                        <div className="flex items-center">
                                            <img className="mr-3" src="/images/hero/chat.png" />
                                                <p className="text-1xl font-normal md:leading-[1.42] text-dark dark:text-white">
                                                    ma7459226@gmail.com
                                                </p>
                                        </div>
                                    </div>
                                    <div className="contactCard px-5 py-5 rounded-xl">
                                        <h3 className="mb-2 text-2xl font-semibold md:leading-[1.42] text-dark dark:text-white">
                                            Pakistan
                                        </h3>
                                        <div className="flex items-center mb-8">
                                            <img className="mr-3" src="/images/hero/location.png" />
                                                <p className="text-1xl font-normal md:leading-[1.42] text-dark dark:text-white">
                                                    69 street near mall, Washington DC USA
                                                </p>
                                        </div>
                                        <div className="flex items-center">
                                            <img className="mr-3" src="/images/hero/chat.png" />
                                                <p className="text-1xl font-normal md:leading-[1.42] text-dark dark:text-white">
                                                    ma7459226@gmail.com
                                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-4 lg:w-1/2">
                                <div className="wow fadeInUp rounded-lg bg-white dark:bg-dark-2 py-5 px-5 shadow-lg dark:shadow-none" data-wow-delay=".2s
            " style={{ visibility: 'visible', animationDelay: '0.2s' }}>
                                    <h3 className="mb-2 text-2xl font-semibold md:text-[28px] md:leading-[1.42] text-dark dark:text-white">
                                        Send us a message
                                    </h3>
                                    <form>
                                        <div className="mb-[22px]">
                                            <input type="text" name="Email" placeholder="Email" className="bg-transparent w-full text-body-color dark:text-dark-6 placeholder:text-body-color/60 border px-5 py-3 border-[#f1f1f1] dark:border-dark-3 rounded-xl focus:border-primary focus:outline-none" />
                                        </div>
                                        <div className="mb-[22px]">
                                            <input type="text" name="Subject" placeholder="Subject" className="bg-transparent w-full text-body-color dark:text-dark-6 placeholder:text-body-color/60 border px-5 py-3 border-[#f1f1f1] dark:border-dark-3 rounded-xl focus:border-primary focus:outline-none" />
                                        </div>
                                        <div className="mb-[22px]">
                                            <textarea name="Message" placeholder="Message" className="bg-transparent w-full text-body-color dark:text-dark-6 placeholder:text-body-color/60 border px-5 py-3 border-[#f1f1f1] dark:border-dark-3 rounded-xl focus:border-primary focus:outline-none"></textarea>
                                        </div>
                                        <div className="mb-0">
                                            <button type="submit" className="inline-flex items-center w-full justify-center px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out rounded-md bg-primary hover:bg-blue-dark">
                                                Send
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full border mt-16"></div>
            </div>
        </>
  )
}
