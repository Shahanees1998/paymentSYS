// pages/index.js
// import '../styles/globals.css'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Home () {
  return (
        <>
            <div
                id="home"
                className="relative overflow-hidden bg-white pt-[120px] md:pt-[130px] lg:pt-[160px]"
            >
                <div className="container">
                    <div className="wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s' }}>
                        <div className="-mx-4 flex flex-wrap items-center">
                            <div className="w-full px-4 lg:w-1/2">
                                <div className="mb-12 max-w-[540px] lg:mb-0">
                                    <h2 className="mb-5 text-5xl font-semibold leading-tight text-dark dark:text-white sm:leading-[1.2]">
                                        <span className="text-primary">PAY-GR</span> Events
                                    </h2>
                                    <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                                        {`                                        We enjoy speaking with merchants across all industries and understanding what they are looking for in their payments partner. Whether you're well-established or just starting out, come and speak with us to learn how we can help you optimise your payments performance and grow
`}
                                    </p>

                                    <a href="javascript:void(0)" className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3 text-center text-base font-bold text-white hover:border-blue-dark hover:bg-blue-dark">
                                        Get In Touch
                                    </a>
                                </div>
                            </div>
                            <div className="w-full px-4 lg:w-1/2">
                                <img src="/images/about/events.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-dark-blue mb-12 mt-16">
                <div className="container mt-12">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 py-10">
                            <div className="mx-auto text-center">
                                <h2 className="mb-8 text-3xl font-bold text-white dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                                    Ready to partner with a team of dedicated payments experts?
                                </h2>
                                <a href="javascript:void(0)" className="inline-flex items-center justify-center rounded-xl bg-white px-10 py-3 text-center text-base font-bold text-dark hover:border-blue-dark hover:bg-blue-dark">
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="dark:bg-dark">
                <div className="container">
                    <div className="wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s' }}>
                        <div className="-mx-4 flex flex-wrap items-center mt-16">
                            <div className="w-full px-4 lg:w-1/2">
                                <div className="mb-12 max-w-[540px] lg:mb-0">
                                    <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2] Nunito">
                                        Ready to make payments easy?
                                    </h2>
                                    <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                                        We will help in making your payments easy
                                    </p>

                                    <a href="javascript:void(0)" className="inline-flex items-center justify-center rounded-full border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark">
                                        Get Started
                                    </a>
                                </div>
                            </div>

                            <div className="w-full px-4 lg:w-1/2">
                                <img src="/images/hero/make-payment.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}
