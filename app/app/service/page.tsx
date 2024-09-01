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
                  <span className="text-primary">Digital goods </span> and services payment solutions
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  Say goodbye to handling multiple payment providers and processes. Our fully licenced gateway and acquiring is available in one platform. Backed by over 20 years of experience, you can trust us to provide a payment setup that’s designed for your success.
                </p>

                <a href="javascript:void(0)" className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3 text-center text-base font-bold text-white hover:border-blue-dark hover:bg-blue-dark">
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
            <img className="mx-auto" src="/images/about/retail-service.png" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-20 mb-12">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 text-center lg:mb-[70px]">
            <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
              Let payments sit in the background
            </h2>
            <p className="mb-3 text-md mx-auto max-w-[600px] font-normal text-body-color dark:text-white md:leading-[1.2]">
              Payments should be a breeze for your customers, not a hurdle. We’ll work with you to ensure that your checkout experience is as frictionless as possible.
            </p>
          </div>
        </div>
      </div>
      <div className="-mx-4 flex flex-wrap items-center">
        <div className="w-full px-10 md:w-1/2 lg:w-1/2">
          <div className="wow fadeInUp group border mb-12 rounded-xl px-6 py-5" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
            <div className="flex items-center">
              <img className="w-10 mr-5" src="/images/about/arrow.png" />
              <h4 className="text-xl font-bold text-gray-7 dark:text-white">
                Access major payment methods
              </h4>
            </div>

          </div>
          <div className="wow fadeInUp group border mb-12 rounded-xl px-6 py-5" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
            <div className="flex items-center">
              <img className="w-10 mr-5" src="/images/about/arrow.png" />
              <h4 className="text-xl font-bold text-gray-7 dark:text-white">
                Pay in just a few taps with card tokenisation
              </h4>
            </div>

          </div>
          <div className="wow fadeInUp group border mb-12 rounded-xl px-6 py-5" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
            <div className="flex items-center">
              <img className="w-10 mr-5" src="/images/about/arrow.png" />
              <h4 className="text-xl font-bold text-gray-7 dark:text-white">
                Accept transactions online
              </h4>
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/2">
          <div className="wow fadeInUp group" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
            <img className="w-full" src="/images/about/retail-service-1.png" />
          </div>
        </div>
      </div>
    </div>

     <section className="dark:bg-dark">
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s' }}>
          <div className="-mx-4 flex flex-wrap items-center mt-20">
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
