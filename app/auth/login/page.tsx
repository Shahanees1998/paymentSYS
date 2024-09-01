// pages/index.js
// import '../styles/globals.css'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Home () {
  return (
        <>
           <body className="auth">
    <div className="container">
      <a href="#"><img className="mt-12" src="/images/auth/logo.png" /></a>
      <div className="wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s' }}>
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 mt-16 max-w-[540px] lg:mb-0">
              <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
                Login to continue
              </p>
              <h2 className="mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-[40px] sm:leading-[1.2] Nunito">
                Login to your account
              </h2>
              <div className="mb-[22px] relative">
                <label className="text-white text-md font-medium">Email</label>
                <input style={{ marginTop: '0.5rem' }} type="text" name="Email" placeholder="Email" className="bg-dark-Purple w-full text-white dark:text-dark-6 placeholder:text-white border px-5 py-3 border-Purple dark:border-dark-3 rounded-xl focus:border-primary focus:outline-none" />
                <img className="absolute right-0 mr-5 mt_5" src="/images/auth/check.png" />
              </div>
              <div className="mb-[22px] relative">
                <label className="text-white text-md font-medium">Password</label>
                <input style={{ marginTop: '0.5rem' }} type="text" name="Email" placeholder="***********" className="bg-dark-Purple w-full text-white dark:text-dark-6 placeholder:text-white border px-5 py-3 border-Purple dark:border-dark-3 rounded-xl focus:border-primary focus:outline-none" />
                <img className="absolute right-0 mr-5 mt_6" src="/images/auth/show.png" />
              </div>

              <a href="/app/home" className="inline-flex items-center mt-8 justify-center rounded-xl bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark">
                Login Account <img className="w-3 ml-5" src="/images/auth/arrow.png" />
              </a>

              <p className="text-base text-lg mt-12 leading-relaxed text-white dark:text-dark-6">
                Don’t have an account?  <a href="/auth/signup"><span className="text-blue-primary">Sing up</span></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </body>

        </>
  )
}
