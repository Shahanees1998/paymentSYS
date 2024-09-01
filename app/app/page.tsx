// pages/index.js
// import '../styles/globals.css'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Home () {
  return (
        <>
            <body className="bg-gray-2">

                <div
                    id="home"
                    className="relative overflow-hidden pt-[120px] md:pt-[130px] lg:pt-[160px]"
                >
                    <img className="absolute sm:hidden" src="/images/hero/element.png" />
                    <img className="absolute right-0 mr-5" src="/images/hero/Vector.png" />
                    <img className="absolute right-0 mr-20 mt-20" src="/images/hero/element-1.png" />
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
                                        World E-Payment
                                        <br />Solutions
                                    </h1>
                                    <p
                                        className="mx-auto mb-9 max-w-[600px] text-base font-medium text-dark text-opacity-70 sm:text-lg sm:leading-[1.44]"
                                    >
                                        Our end-to-end online and in-store payment solutions make accepting payments seamless for you and your customers.
                                    </p>
                                    <ul
                                        className="mb-10 flex flex-wrap items-center justify-center gap-5"
                                    >
                                        <li>
                                            <a
                                                href="https://links.tailgrids.com/play-download"
                                                className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-[14px] text-center text-base font-semibold text-white shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color"
                                            >
                                                Get Started
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 flex flex-wrap justify-center relative">
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <img className="w-full" src="/images/hero/banner-img1.png" />
                        </div>
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <img className="w-full" src="/images/hero/banner-img2.png" />
                        </div>
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <img className="w-full" src="/images/hero/banner-img3.png" />
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
                                    <h4 className="mb-3 text-xl font-bold text-gray-7 dark:text-white">
                                        Online Payments
                                    </h4>
                                    <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                                        Accept seamless online and cross-border payments across all customer devices.
                                    </p>
                                    <a
                                        href="#"
                                        className="text-base font-medium bg-dark px-6 py-3 bg-opacity-20 rounded-lg text-white hover:bg-opacity-100 hover:bg-primary dark:text-white dark:hover:text-primary"
                                    >
                                        Learn More
                                    </a>
                                </div>
                                <div className="wow fadeInUp group border mb-12 rounded-xl px-6 py-5" data-wow-delay=".1s">
                                    <h4 className="mb-3 text-xl font-bold text-gray-7 dark:text-white">
                                        Point of Sale Payments
                                    </h4>
                                    <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                                        Accept seamless online and cross-border payments across all customer devices.
                                    </p>
                                    <a
                                        href="E"
                                        className="text-base font-medium bg-dark px-6 py-3 bg-opacity-20 rounded-lg text-white hover:bg-opacity-100 hover:bg-primary dark:text-white dark:hover:text-primary"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <div className="w-full px-4 md:w-1/2 lg:w-1/2">
                                <div className="wow fadeInUp group" data-wow-delay=".1s">
                                    <img className="w-full" src="/images/hero/payments.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border mt-16"></div>
                </section>

                <section
                    id="about"
                    className="bg-gray-1 pb-8 dark:bg-dark-2"
                >
                    <div className="container">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full flex flex-wrap justify-between px-10">
                                <div className="max-w-[485px] text-center">
                                    <h2
                                        className="text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]"
                                    >
                                        Discover our features
                                    </h2>
                                </div>
                                <a
                                    href="#"
                                    className="text-base flex items-center font-medium bg-transparent border px-6 py-3 bg-opacity-20 rounded-lg text-dark hover:bg-opacity-100 hover:bg-primary dark:text-white dark:hover:text-primary"
                                >
                                    Learn More <img className="w-3 ml-2" src="/images/hero/arrow.png" />
                                </a>
                            </div>
                        </div>
                        <div className="-mx-4 flex flex-wrap items-center">
                            <div className="w-full px-10 md:w-1/3 lg:w-1/3">
                                <div className="wow fadeInUp group mt-12" data-wow-delay=".1s">
                                    <div className="featureFirst mb-5">
                                        <div className="blur-img">
                                            <h4
                                                className="text-md font-bold mb-4 text-white dark:text-white md:leading-[1.2]"
                                            >
                                                Risk and Fraud Management
                                            </h4>
                                            <p className="text-gray-7 mb-4 dark:text-dark-6 text-sm">
                                                We use a sophisticated real-time, rules-based analytics engine to generate anti-fraud models for your business. This helps reduce decline rates, and improve dispute and chargeback management.
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <a
                                                    href="#"
                                                    className="text-base flex items-center font-medium bg-transparent underline bg-opacity-20 rounded-lg text-white"
                                                >
                                                    Learn More
                                                </a>
                                                <a href="#"><img className="w-10" src="/images/hero/feature-arrow.png" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-10 md:w-1/3 lg:w-1/3">
                                <div className="wow fadeInUp group mt-12" data-wow-delay=".1s">
                                    <div className="featureSecond mb-5">
                                        <div className="blur-img">
                                            <h4
                                                className="text-md font-bold mb-4 text-white dark:text-white md:leading-[1.2]"
                                            >
                                                Reporting
                                            </h4>
                                            <p className="text-gray-7 mb-4 dark:text-dark-6 text-sm">
                                                We help you understand how your payment flow is performing with our detailed transaction reporting tools. This snapshot of your payment gateway operations forms the foundation of a clear strategy to optimise transactions.
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <a
                                                    href="#"
                                                    className="text-base flex items-center font-medium bg-transparent underline bg-opacity-20 rounded-lg text-white"
                                                >
                                                    Learn More
                                                </a>
                                                <a href="#"><img className="w-10" src="/images/hero/feature-arrow.png" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-10 md:w-1/3 lg:w-1/3">
                                <div className="wow fadeInUp group mt-12" data-wow-delay=".1s">
                                    <div className="featureThird mb-5">
                                        <div className="blur-img">
                                            <h4
                                                className="text-md font-bold mb-4 text-white dark:text-white md:leading-[1.2]"
                                            >
                                                Acquiring
                                            </h4>
                                            <p className="text-gray-7 mb-4 dark:text-dark-6 text-sm">
                                                We help you understand how your payment flow is performing with our detailed transaction reporting tools. This snapshot of your payment gateway operations forms the foundation of a clear strategy to optimise transactions.
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <a
                                                    href="#"
                                                    className="text-base flex items-center font-medium bg-transparent underline bg-opacity-20 rounded-lg text-white"
                                                >
                                                    Learn More
                                                </a>
                                                <a href="#"><img className="w-10" src="/images/hero/feature-arrow.png" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slide">
                            <div className="w-50 h-2 rounded-full bg-primary"></div>
                        </div>
                    </div>
                </section>

                <section
                    id="testimonials"
                    className="overflow-hidden bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]"
                >
                    <div className="container mx-auto">
                        <img className="absolute" src="/images/hero/slider-design.png" />
                        <img className="absolute right-0 mr-5 mt-18" src="/images/hero/slider-design.png" />
                        <div className="-mx-4 flex flex-wrap justify-center">
                            <div className="w-full px-4">
                                <div className="mx-auto mb-[60px] max-w-[485px] text-center">
                                    <span className="mb-2 block text-lg font-semibold text-primary">
                                        Testimonials
                                    </span>
                                    <h2
                                        className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px] Nunito"
                                    >
                                        People Talk About Us
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="-m-5">
                            <div className="swiper testimonial-carousel common-carousel p-5">

                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div
                                            className="rounded-xl bg-white px-4 py-[30px] shadow-testimonial dark:bg-dark sm:px-[30px]"
                                        >
                                            <a href="#" className="flex items-center gap-4 mb-4">
                                                <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                                                    <img
                                                        src="/images/hero/client.png"
                                                        alt="author"
                                                        className="h-[50px] w-[50px] overflow-hidden rounded-full"
                                                    />
                                                </div>

                                                <div>
                                                    <h3
                                                        className="text-sm font-semibold text-dark dark:text-white"
                                                    >
                                                        Angel Rose
                                                    </h3>
                                                    <p className="text-xs text-body-secondary">Creative Manager</p>
                                                </div>
                                            </a>

                                            <p className="mb-6 text-base text-body-color dark:text-dark-6">
                                               {` “Our members are so impressed. It's intuitive. It's clean.
                                                It's distraction free. If you're building a community.`}
                                            </p>

                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div
                                            className="rounded-xl bg-white px-4 py-[30px] shadow-testimonial dark:bg-dark sm:px-[30px]"
                                        >
                                            <a href="#" className="flex items-center gap-4 mb-4">
                                                <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                                                    <img
                                                        src="/images/hero/client.png"
                                                        alt="author"
                                                        className="h-[50px] w-[50px] overflow-hidden rounded-full"
                                                    />
                                                </div>

                                                <div>
                                                    <h3
                                                        className="text-sm font-semibold text-dark dark:text-white"
                                                    >
                                                        Angel Rose
                                                    </h3>
                                                    <p className="text-xs text-body-secondary">Creative Manager</p>
                                                </div>
                                            </a>

                                            <p className="mb-6 text-base text-body-color dark:text-dark-6">
                                     {`           “Our members are so impressed. It's intuitive. It's clean.
                                                It's distraction free. If you're building a community.`}
                                            </p>

                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div
                                            className="rounded-xl bg-white px-4 py-[30px] shadow-testimonial dark:bg-dark sm:px-[30px]"
                                        >
                                            <a href="#" className="flex items-center gap-4 mb-4">
                                                <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                                                    <img
                                                        src="/images/hero/client.png"
                                                        alt="author"
                                                        className="h-[50px] w-[50px] overflow-hidden rounded-full"
                                                    />
                                                </div>

                                                <div>
                                                    <h3
                                                        className="text-sm font-semibold text-dark dark:text-white"
                                                    >
                                                        Angel Rose
                                                    </h3>
                                                    <p className="text-xs text-body-secondary">Creative Manager</p>
                                                </div>
                                            </a>

                                            <p className="mb-6 text-base text-body-color dark:text-dark-6">
                                              {`  “Our members are so impressed. It's intuitive. It's clean.
                                                It's distraction free. If you're building a community.`}
                                            </p>

                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div
                                            className="rounded-xl bg-white px-4 py-[30px] shadow-testimonial dark:bg-dark sm:px-[30px]"
                                        >
                                            <a href="#" className="flex items-center gap-4 mb-4">
                                                <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                                                    <img
                                                        src="/images/hero/client.png"
                                                        alt="author"
                                                        className="h-[50px] w-[50px] overflow-hidden rounded-full"
                                                    />
                                                </div>

                                                <div>
                                                    <h3
                                                        className="text-sm font-semibold text-dark dark:text-white"
                                                    >
                                                        Angel Rose
                                                    </h3>
                                                    <p className="text-xs text-body-secondary">Creative Manager</p>
                                                </div>
                                            </a>

                                            <p className="mb-6 text-base text-body-color dark:text-dark-6">
                                {`                “Our members are so impressed. It's intuitive. It's clean.
                                                It's distraction free. If you're building a community.`}
                                            </p>

                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div
                                            className="rounded-xl bg-white px-4 py-[30px] shadow-testimonial dark:bg-dark sm:px-[30px]"
                                        >
                                            <a href="#" className="flex items-center gap-4 mb-4">
                                                <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                                                    <img
                                                        src="/images/hero/client.png"
                                                        alt="author"
                                                        className="h-[50px] w-[50px] overflow-hidden rounded-full"
                                                    />
                                                </div>

                                                <div>
                                                    <h3
                                                        className="text-sm font-semibold text-dark dark:text-white"
                                                    >
                                                        Angel Rose
                                                    </h3>
                                                    <p className="text-xs text-body-secondary">Creative Manager</p>
                                                </div>
                                            </a>

                                            <p className="mb-6 text-base text-body-color dark:text-dark-6">
                                          {`      “Our members are so impressed. It's intuitive. It's clean.
                                                It's distraction free. If you're building a community.`}
                                            </p>

                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div
                                            className="rounded-xl bg-white px-4 py-[30px] shadow-testimonial dark:bg-dark sm:px-[30px]"
                                        >
                                            <a href="#" className="flex items-center gap-4 mb-4">
                                                <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                                                    <img
                                                        src="/images/hero/client.png"
                                                        alt="author"
                                                        className="h-[50px] w-[50px] overflow-hidden rounded-full"
                                                    />
                                                </div>

                                                <div>
                                                    <h3
                                                        className="text-sm font-semibold text-dark dark:text-white"
                                                    >
                                                        Angel Rose
                                                    </h3>
                                                    <p className="text-xs text-body-secondary">Creative Manager</p>
                                                </div>
                                            </a>

                                            <p className="mb-6 text-base text-body-color dark:text-dark-6">
                                          {`      “Our members are so impressed. It's intuitive. It's clean.
                                                It's distraction free. If you're building a community.`}
                                            </p>

                                        </div>
                                    </div>

                                </div>

                                <div className="mt-[60px] flex items-center justify-center gap-1">
                                    <div className="swiper-button-prev">
                                        <svg
                                            className="fill-current"
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19.25 10.2437H4.57187L10.4156 4.29687C10.725 3.9875 10.725 3.50625 10.4156 3.19687C10.1062 2.8875 9.625 2.8875 9.31562 3.19687L2.2 10.4156C1.89062 10.725 1.89062 11.2063 2.2 11.5156L9.31562 18.7344C9.45312 18.8719 9.65937 18.975 9.86562 18.975C10.0719 18.975 10.2437 18.9062 10.4156 18.7687C10.725 18.4594 10.725 17.9781 10.4156 17.6688L4.60625 11.7906H19.25C19.6625 11.7906 20.0063 11.4469 20.0063 11.0344C20.0063 10.5875 19.6625 10.2437 19.25 10.2437Z"
                                            />
                                        </svg>
                                    </div>

                                    <div className="swiper-button-next">
                                        <svg
                                            className="fill-current"
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19.8 10.45L12.6844 3.2313C12.375 2.92192 11.8938 2.92192 11.5844 3.2313C11.275 3.54067 11.275 4.02192 11.5844 4.3313L17.3594 10.2094H2.75C2.3375 10.2094 1.99375 10.5532 1.99375 10.9657C1.99375 11.3782 2.3375 11.7563 2.75 11.7563H17.4281L11.5844 17.7032C11.275 18.0126 11.275 18.4938 11.5844 18.8032C11.7219 18.9407 11.9281 19.0094 12.1344 19.0094C12.3406 19.0094 12.5469 18.9407 12.6844 18.7688L19.8 11.55C20.1094 11.2407 20.1094 10.7594 19.8 10.45Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border mt-16"></div>
                </section>

                <section className="dark:bg-dark">
                    <div className="container">
                        <div className="wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s' }}>
                            <div className="-mx-4 flex flex-wrap items-center">
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

            </body>
        </>
  )
}
