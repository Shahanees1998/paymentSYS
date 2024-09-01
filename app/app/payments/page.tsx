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
                  Online Payments <br />Made <span className="text-primary">Easy</span>
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  We work closely with you to tailor your online payment methods, offering customers a seamless digital payments experience
                </p>

                <a href="javascript:void(0)" className="inline-flex items-center justify-center rounded-xl border border-primary bg-primary px-7 py-3 text-center text-base font-bold text-white hover:border-blue-dark hover:bg-blue-dark">
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
            <img src="/images/about/payment-banner.png" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s' }}>
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="flex items-center justify-center w-full mt-12 mb-5">
            <div className="lineHeading bg-primary mr-3"></div>
            <p className="text-base font-semibold leading-relaxed text-center text-body-color dark:text-dark-6 mr-3">
              TRUSTED BY AMAZING BRANDS
            </p>
            <div className="lineHeading bg-primary"></div>
          </div>
          <div className="w-full px-10 lg:w-1/1">
            <div className="bg-grey w-full rounded-xl px-10 py-5">
              <div className="flex flex-wrap justify-between">
                <img className="py-5" src="/images/about/1.png" />
                <img className="py-5" src="/images/about/2.png" />
                <img className="py-5" src="/images/about/3.png" />
                <img className="py-5" src="/images/about/4.png" />
                <img className="py-5" src="/images/about/5.png" />
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
                More Payment types, <br />More Conversions
              </h2>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
              Offer your customers a range of online payment methods. Our powerful API helps streamline the checkout experience and increase conversion rates
              We deliver an optimised payments integration with our customisable solution, tailored to your business needs.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s' }}>
        <div className="-mx-4 flex flex-wrap items-center px-10 pt-20">
          <div className="w-full px-4 pb-16 lg:w-1/2 border-r border-b border-primary border-opacity-40">
            <div className="max-w-[540px] lg:mb-0 lg:py-10 lg:px-10 md:py-10 md:px-10 xl:py-10 xl:px-10">
              <div className="h-107">
                <img className="mb-3" src="/images/about/phone.png" />
              </div>
              <h2 className="mb-3 text-2xl font-bold leading-tight text-dark dark:text-white sm:leading-[1.2]">
                Phone
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
                Take secure Mail and Over The Phone (MOTO) transactions with our user-friendly Virtual Terminal.
              </p>
            </div>
          </div>

          <div className="w-full px-4 pb-16 lg:w-1/2 border-b border-primary border-opacity-40">
            <div className="max-w-[540px] lg:mb-0 lg:py-10 lg:px-10 md:py-10 md:px-10 xl:py-10 xl:px-10">
              <div className="h-107">
                <img className="mb-3" src="/images/about/webpage.png" />
              </div>
              <h2 className="mb-3 text-2xl font-bold leading-tight text-dark dark:text-white sm:leading-[1.2]">
                Website
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
                Engage a wider audience and tap into new markets with popular global payment methods your customers know and trust.
              </p>
            </div>
          </div>

          <div className="w-full px-4 pb-16 lg:w-1/2 border-r border-primary border-opacity-40">
            <div className="max-w-[540px] lg:mb-0 lg:py-10 lg:px-10 md:py-10 md:px-10 xl:py-10 xl:px-10">
              <div className="h-107">
                <img className="mb-3" src="/images/about/link.png" />
              </div>
              <h2 className="mb-3 text-2xl font-bold leading-tight text-dark dark:text-white sm:leading-[1.2]">
                Pay by link
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
                Generate and send secure payment links to your customers via email and SMS.
              </p>
            </div>
          </div>

          <div className="w-full px-4 pb-16 lg:w-1/2 border-primary border-opacity-40">
            <div className="max-w-[540px] lg:mb-0 lg:py-10 lg:px-10 md:py-10 md:px-10 xl:py-10 xl:px-10">
              <div className="h-107">
                <img className="mb-3" src="/images/about/subscription.png" />
              </div>
              <h2 className="mb-3 text-2xl font-bold leading-tight text-dark dark:text-white sm:leading-[1.2]">
                Subscription
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
                Encourage customer loyalty and increase repeat spending with recurring payments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-20">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 text-center lg:mb-[70px]">
            <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
              Flexible Integration Options
            </h2>
          </div>
        </div>
      </div>
      <div className="-mx-4 flex flex-wrap items-center">
        <div className="w-full px-10 md:w-1/2 lg:w-1/2">
          <div className="wow fadeInUp group border mb-12 rounded-xl px-6 py-5" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
            <div className="flex items-center">
              <img className="w-10 mr-5" src="/images/about/arrow.png" />
              <h4 className="text-xl font-bold text-gray-7 dark:text-white">
                Hosted payment page
              </h4>
            </div>

          </div>
          <div className="wow fadeInUp group border mb-12 rounded-xl px-6 py-5" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
            <div className="flex items-center">
              <img className="w-10 mr-5" src="/images/about/arrow.png" />
              <h4 className="text-xl font-bold text-gray-7 dark:text-white">
                Client-side encryption
              </h4>
            </div>

          </div>
          <div className="wow fadeInUp group border mb-12 rounded-xl px-6 py-5" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
            <div className="flex items-center">
              <img className="w-10 mr-5" src="/images/about/arrow.png" />
              <h4 className="text-xl font-bold text-gray-7 dark:text-white">
                Innovative technology
              </h4>
            </div>

          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/2">
          <div className="wow fadeInUp group" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
            <img className="w-full" src="/images/about/payments.png" />
          </div>
        </div>
      </div>
    </div>

    <div className="bg-dark-blue pb-16 mb-12">
      <div className="container mt-12">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 py-10">
            <div className="mx-auto text-center">
              <h2 className="mb-3 text-3xl font-bold text-white dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                Other Products We Offer
              </h2>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap items-center justify-center px-11">
          <div className="px-10 md:w-1/2 lg:w-1/4">
            <div className="wow fadeInUp group" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
              <img className="mx-auto mb-5" src="/images/about/pos.png" />
              <h2 className="mb-3 text-center text-3xl font-bold text-dark dark:text-white md:leading-[1.2]">
                POS Terminals
              </h2>
            </div>
          </div>
          <div className="px-10 md:w-1/2 lg:w-1/4">
            <div className="wow fadeInUp group" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
              <img className="mx-auto mb-5" src="/images/about/credit.png" />
              <h2 className="mb-3 text-center text-3xl font-bold text-dark dark:text-white md:leading-[1.2]">
                Credit Cards
              </h2>
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
