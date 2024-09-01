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
                  <span className="text-primary">POS</span> Terminals
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  Our end-to-end POS payment solutions and card terminals help you grow your business by creating a simple, secure user experience for you and your customers
                </p>

                <a href="javascript:void(0)" className="inline-flex items-center justify-center rounded-xl border border-primary bg-primary px-7 py-3 text-center text-base font-bold text-white hover:border-blue-dark hover:bg-blue-dark">
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
            <img src="/images/about/pos-banner.png" />
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
              Services
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
                Apple Pay and Google Pay
              </h4>
            </div>

          </div>
          <div className="wow fadeInUp group border mb-12 rounded-xl px-6 py-5" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
            <div className="flex items-center">
              <img className="w-10 mr-5" src="/images/about/arrow.png" />
              <h4 className="text-xl font-bold text-gray-7 dark:text-white">
                Accept chip contactless payments
              </h4>
            </div>

          </div>
          <div className="wow fadeInUp group border mb-12 rounded-xl px-6 py-5" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
            <div className="flex items-center">
              <img className="w-10 mr-5" src="/images/about/arrow.png" />
              <h4 className="text-xl font-bold text-gray-7 dark:text-white">
                Optimise payment acceptance rates
              </h4>
            </div>
          </div>
          <div className="wow fadeInUp group border mb-12 rounded-xl px-6 py-5" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
            <div className="flex items-center">
              <img className="w-10 mr-5" src="/images/about/arrow.png" />
              <h4 className="text-xl font-bold text-gray-7 dark:text-white">
                Customer support via phone and email
              </h4>
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/2">
          <div className="wow fadeInUp group" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
            <img className="w-full" src="/images/about/service.png" />
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
                More terminal options <br />Greater Performence
              </h2>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
              Our range of portable and countertop POS terminals are chip and pin and NFC enabled, configured to suit your unique business needs
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s' }}>
        <div className="-mx-4 flex flex-wrap items-center px-10 pt-20">
          <div className="w-full px-4 lg:w-1/3">
            <img src="/images/about/mc1.png" />
            <div className="card px-5 py-5 shadowCustom">
              <h4 className="text-xl font-bold text-dark mb-4">
                PAX A920
              </h4>
              <p className="text-md font-medium text-body-color mb-5">
                The PAX A920 is a mobile terminal that simplifies payments for you and your customers
              </p>
              <a href="javascript:void(0)" className="inline-flex w-full items-center justify-center rounded-xl bg-dark-blue px-7 py-3 text-center text-base font-bold text-white hover:border-blue-dark hover:bg-blue-dark">
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/3">
            <img src="/images/about/mc2.png" />
            <div className="card px-5 py-5 shadowCustom">
              <h4 className="text-xl font-bold text-dark mb-4">
                PAX A920
              </h4>
              <p className="text-md font-medium text-body-color mb-5">
                The PAX A920 is a mobile terminal that simplifies payments for you and your customers
              </p>
              <a href="javascript:void(0)" className="inline-flex w-full items-center justify-center rounded-xl bg-dark-blue px-7 py-3 text-center text-base font-bold text-white hover:border-blue-dark hover:bg-blue-dark">
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/3">
            <img src="/images/about/mc3.png" />
            <div className="card px-5 py-5 shadowCustom">
              <h4 className="text-xl font-bold text-dark mb-4">
                PAX A920
              </h4>
              <p className="text-md font-medium text-body-color mb-5">
                The PAX A920 is a mobile terminal that simplifies payments for you and your customers
              </p>
              <a href="javascript:void(0)" className="inline-flex w-full items-center justify-center rounded-xl bg-dark-blue px-7 py-3 text-center text-base font-bold text-white hover:border-blue-dark hover:bg-blue-dark">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-2 rounded-full bg-slide mt-12">
        <div className="w-50 h-2 rounded-full bg-primary"></div>
      </div>
    </div>

    <div className="bg-dark-blue mb-12 mt-16">
      <div className="container mt-12">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 py-10">
            <div className="mx-auto text-center">
              <h2 className="mb-8 text-3xl font-bold text-white dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                Compare POS Terminals
              </h2>
              <p className="text-md font-normal text-white dark:text-white md:leading-[1.2]">
                View a chart that compares key technical specifications for POS terminals such as<br />connectivity options, supported transactions, and more.
              </p>
              <a href="javascript:void(0)" className="inline-flex mt-12 items-center justify-center rounded-xl bg-white px-10 py-3 text-center text-base font-bold text-dark hover:border-blue-dark hover:bg-blue-dark">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

     <div className="container mt-16">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 text-center lg:mb-[70px]">
            <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
              Get Started with a Payment Expert
            </h2>
          </div>
        </div>
      </div>
      <div className="-mx-4 flex flex-wrap items-center">
        <div className="w-full px-10 md:w-1/1 lg:w-1/1">
          <div className="wow fadeInUp group" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
            <div className="mb-[22px]">
              <input type="text" name="Email" placeholder="I want to speak with someone about...*" className="bg-transparent w-full text-body-color dark:text-dark-6 placeholder:text-body-color/60 border px-8 py-5 border-[#b7bec5] dark:border-dark-3 rounded-xl focus:border-primary focus:outline-none" />
            </div>

          </div>
        </div>
        <div className="w-full px-10 md:w-1/2 lg:w-1/2">
          <div className="wow fadeInUp group" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
            <div className="mb-[22px]">
              <input type="text" name="Email" placeholder="First Name*" className="bg-transparent w-full text-body-color dark:text-dark-6 placeholder:text-body-color/60 border px-8 py-5 border-[#b7bec5] dark:border-dark-3 rounded-xl focus:border-primary focus:outline-none" />
            </div>

          </div>
        </div>
        <div className="w-full px-10 md:w-1/2 lg:w-1/2">
          <div className="wow fadeInUp group" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
            <div className="mb-[22px]">
              <input type="text" name="Email" placeholder="Last Name*" className="bg-transparent w-full text-body-color dark:text-dark-6 placeholder:text-body-color/60 border px-8 py-5 border-[#b7bec5] dark:border-dark-3 rounded-xl focus:border-primary focus:outline-none" />
            </div>

          </div>
        </div>
        <div className="w-full px-10 md:w-1/2 lg:w-1/2">
          <div className="wow fadeInUp group" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
            <div className="mb-[22px]">
              <input type="text" name="Email" placeholder="Work Email Address*" className="bg-transparent w-full text-body-color dark:text-dark-6 placeholder:text-body-color/60 border px-8 py-5 border-[#b7bec5] dark:border-dark-3 rounded-xl focus:border-primary focus:outline-none" />
            </div>

          </div>
        </div>
        <div className="w-full px-10 md:w-1/2 lg:w-1/2">
          <div className="wow fadeInUp group" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
            <div className="mb-[22px]">
              <input type="text" name="Email" placeholder="Work Phone Number*" className="bg-transparent w-full text-body-color dark:text-dark-6 placeholder:text-body-color/60 border px-8 py-5 border-[#b7bec5] dark:border-dark-3 rounded-xl focus:border-primary focus:outline-none" />
            </div>

          </div>
        </div>
        <div className="w-full px-10 md:w-1/2 lg:w-1/2">
          <div className="wow fadeInUp group" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
            <div className="mb-[22px]">
              <input type="text" name="Email" placeholder="Company Name*" className="bg-transparent w-full text-body-color dark:text-dark-6 placeholder:text-body-color/60 border px-8 py-5 border-[#b7bec5] dark:border-dark-3 rounded-xl focus:border-primary focus:outline-none" />
            </div>

          </div>
        </div>
        <div className="w-full px-10 md:w-1/2 lg:w-1/2">
          <div className="wow fadeInUp group" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
            <div className="mb-[22px]">
              <input type="text" name="Email" placeholder="Country Name*" className="bg-transparent w-full text-body-color dark:text-dark-6 placeholder:text-body-color/60 border px-8 py-5 border-[#b7bec5] dark:border-dark-3 rounded-xl focus:border-primary focus:outline-none" />
            </div>

          </div>
        </div>
        <div className="w-full px-10 md:w-1/1 lg:w-1/1">
          <div className="wow fadeInUp group" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
            <div className="mb-[22px]">
              <textarea name="Email" placeholder="Tell us more about your bussiness and the type of payment you are looking to accept*" className="bg-transparent w-full text-body-color dark:text-dark-6 placeholder:text-body-color/60 border px-8 py-5 border-[#b7bec5] dark:border-dark-3 rounded-xl focus:border-primary focus:outline-none" ></textarea>
            </div>

          </div>
        </div>
        <div className="w-full px-10 md:w-1/1 lg:w-1/1">
          <div className="wow fadeInUp group" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s' }}>
            <div className="flex items-center mb-4">
              <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 mr-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label className="text-sm font-medium text-gray-900 dark:text-gray-300">By providing my contact information, I consent to receive communications from emerchantpay about relevant content, products and services</label>
            </div>
            <a href="javascript:void(0)" className="inline-flex mt-12 items-center w-full justify-center rounded-xl bg-dark-blue px-10 py-3 text-center text-base font-bold text-white hover:border-blue-dark hover:bg-blue-dark">
              Send
            </a>
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
