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
                                        <span className="text-primary">Licence</span> And <br />Certification
                                    </h2>
                                    <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                                        Safe, secure and seamless payment experiences are at the core of our product offering. Our teams of payment experts constantly assess changing regulations to ensure every transaction meets the highest security standards.
                                    </p>

                                    <a href="javascript:void(0)" className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3 text-center text-base font-bold text-white hover:border-blue-dark hover:bg-blue-dark">
                                        Get In Touch
                                    </a>
                                </div>
                            </div>
                            <div className="w-full px-4 lg:w-1/2">
                                <img src="/images/about/licence.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-dark-blue mb-12 mt-16">
                <div className="container mt-12">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 py-10">
                            <div className="">
                                <h2 className="mb-5 text-2xl font-bold text-white dark:text-white md:leading-[1.2]">
                                    FCA licence
                                </h2>
                                <p className="mb-8 text-md font-normal text-white dark:text-white md:leading-[1.5]">
                                    The Financial Conduct Authority (FCA) is a financial regulatory body in the United Kingdom. It regulates financial firms and provides services to consumers, whilst maintaining the integrity of the United Kingdom’s financial markets. emerchantpay Ltd. is authorised (Reg. No. 900778) to issue electronic money (e-money) and provides payment services under the Electronic Money Regulations 2011 by the Financial Services Authority of the United Kingdom.
                                </p>
                            </div>
                            <div className="">
                                <h2 className="mb-5 text-2xl font-bold text-white dark:text-white md:leading-[1.2]">
                                    ISO 9001:2008 Certification
                                </h2>
                                <p className="mb-8 text-md font-normal text-white dark:text-white md:leading-[1.5]">
                                    The ISO 9001:2008 Certification is the internationally recognised quality management system standard. The independent monitoring and stringent certificate renewal process ensures emerchantpay continually meets best industry practices from inspections of expert, unbiased Q&A teams capable of assessing technical operations and verifying full compliance.
                                </p>
                            </div>
                            <div className="">
                                <h2 className="mb-5 text-2xl font-bold text-white dark:text-white md:leading-[1.2]">
                                    ISO/IEC 27001:2013 Certification
                                </h2>
                                <p className="mb-8 text-md font-normal text-white dark:text-white md:leading-[1.5]">
                                    ISO/IEC 27001:2013 specifies the requirements for establishing, implementing, maintaining and continually improving an information security management system within the company. It also includes requirements for the assessment and treatment of information security risks. emerchantpay Ltd. is awarded full ISO/IEC 27001:2013 certification, assuring the management system for information security is in place.
                                </p>
                            </div>
                            <div className="">
                                <h2 className="mb-5 text-2xl font-bold text-white dark:text-white md:leading-[1.2]">
                                    PCI DSS Compliance
                                </h2>
                                <p className="mb-8 text-md font-normal text-white dark:text-white md:leading-[1.5]">
                                    {`                PCI Data Security Standards help protect the safety of cardholder data. They set the operational and technical requirements for organisations accepting or processing payment transactions, and for software developers and manufacturers of applications and devices used in those transactions. emerchantpay Ltd.'s payment gateway is PCI DSS Level 1 compliant, the highest level of compliance.
`}
                                </p>
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
