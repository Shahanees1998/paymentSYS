// pages/index.js
// import '../styles/globals.css'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Home () {
  return (
        <>
            <div
                id="home"
                className="relative overflow-hidden pt-[120px] md:pt-[130px] lg:pt-[160px]"
            >
                <img className="absolute w-40 mt-20" src="/images/about/vector.png" />
                <div className="container">
                    <div className="-mx-4 flex flex-wrap items-center relative z-10">
                        <div className="w-full px-4">
                            <div
                                className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                                data-wow-delay=".2s"
                            >
                                <h1
                                    className="mb-6 text-4xl font-bold leading-snug text-dark sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]"
                                >
                                    Our Story
                                </h1>
                                <p
                                    className="mx-auto mb-9 max-w-[600px] text-base font-medium text-dark text-opacity-70 sm:text-lg sm:leading-[1.44]"
                                >
                                    {'  We’re on a mission to create a global payment ecosystem that connects businesses and consumers everywhere'}
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/1 lg:w-1/1">
                            <img className="w-full px-10 mb-12" src="/images/about/banner.png" />
                            <div>
                                <p
                                    className="mx-auto mb-9 px-10 text-center text-base font-medium text-dark text-opacity-70 sm:text-lg sm:leading-[1.44]"
                                >
                                    {`                  In 2002, emerchantpay was founded out of a need to better support merchants who were finding it difficult to navigate the quickly evolving payment landscape. At this time, payment gateways, choice of local payment methods and risk and fraud management often weren’t being optimised for their target markets. By building a passionate team of payments experts and one-stop-shop product offering, we earned our position as a trusted payments partner for global growth. Ever since, we’ve been perfecting our personal approach for online, mobile and point of sale payments to ensure your customers receive a seamless experience.
`}                  </p>
                            </div>
                            <div className="px-10">
                                <div className="w-full h-2 rounded-full bg-slide">
                                    <div className="w-50 h-2 rounded-full bg-primary"></div>
                                </div>
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
                                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                                    Why work with <br />us?
                                </h2>

                                <a href="javascript:void(0)" className="inline-flex items-center justify-center rounded-full border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark">
                                    Get In Touch
                                </a>
                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-1/2">
                            <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                                We’re on a mission to create a global payment ecosystem that connects businesses and consumers everywhere. We’re a leading online, mobile and point of sale payment service provider helping businesses optimise their in-store, in-app and online payments. Our team of experts tailor payment experiences customers will love while increasing conversion rates and revenue.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full border mt-16"></div>

            <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                                <h2
                                    className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]"
                                >
                                    Payments Made Easy
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-10 md:w-1/2 lg:w-1/2">
                            <div className="wow fadeInUp group border mb-12 rounded-xl px-6 py-5" data-wow-delay=".1s">
                                <div className="flex items-center">
                                    <img className="w-10 mr-5" src="/images/about/arrow.png" />
                                    <h4 className="text-xl font-bold text-gray-7 dark:text-white">
                                        Seamless global payment
                                    </h4>
                                </div>

                            </div>
                            <div className="wow fadeInUp group border mb-12 rounded-xl px-6 py-5" data-wow-delay=".1s">
                                <div className="flex items-center">
                                    <img className="w-10 mr-5" src="/images/about/arrow.png" />
                                    <h4 className="text-xl font-bold text-gray-7 dark:text-white">
                                        Highest quality of services to keep your business running smoothly
                                    </h4>
                                </div>

                            </div>
                            <div className="wow fadeInUp group border mb-12 rounded-xl px-6 py-5" data-wow-delay=".1s">
                                <div className="flex items-center">
                                    <img className="w-10 mr-5" src="/images/about/arrow.png" />
                                    <h4 className="text-xl font-bold text-gray-7 dark:text-white">
                                        Innovative technology
                                    </h4>
                                </div>

                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 lg:w-1/2">
                            <div className="wow fadeInUp group" data-wow-delay=".1s">
                                <img className="w-full" src="/images/hero/payments.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}
