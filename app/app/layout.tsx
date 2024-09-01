import type { Metadata } from 'next'
import '../globals-public.css'
import React from 'react'
// import { fixSession } from 'libs/helpers'

import '../globals.scss'
import '../data-tables-css.css'
import 'primeicons/primeicons.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Couriler',
  description: 'Your personal courier service'
}

export default async function RootLayout ({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: { lang: string }
}>): Promise<JSX.Element> {
  // const session = await getServerSession()
  // await fixSession(session)
  // const dict = getDictionary(params.lang)

  return (
        <html lang={params.lang} className="h-full text-xs 2xl:text-base" style={{ fontSize: '1rem' }}>
            <body className={'h-full'}>
                <header
                    className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent"
                >
                    <div className="container">
                        <div className="relative -mx-4 flex items-center justify-between">
                            <div className="max-w-full px-4">
                                <a href="index.html" className="navbar-logo block w-full py-5">
                                    <img
                                        src="/images/logo/logo.svg"
                                        alt="logo"
                                        className="header-logo w-full"
                                    />
                                </a>
                            </div>
                            <div className="flex w-full items-center justify-between px-4 relative z-40">
                                <div>
                                    <button
                                        id="navbarToggler"
                                        className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                                    >
                                        <span
                                            className="relative my-[6px] block h-[2px] w-[30px] bg-primary"
                                        ></span>
                                        <span
                                            className="relative my-[6px] block h-[2px] w-[30px] bg-primary"
                                        ></span>
                                        <span
                                            className="relative my-[6px] block h-[2px] w-[30px] bg-primary"
                                        ></span>
                                    </button>
                                    <nav
                                        id="navbarCollapse"
                                        className="absolute right-4 z-40 top-full hidden w-full max-w-[250px] rounded-lg bg-transparent py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6"
                                    >
                                        <ul className="blcok lg:flex 2xl:ml-20">
                                            <li className="group relative">
                                                <a
                                                    href="/app/home"
                                                    className="ud-menu-scroll mx-8 flex py-2 text-base font-semibold text-gray-7 group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-grey-200 lg:group-hover:text-blue lg:group-hover:opacity-70"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li className="group relative">
                                                <a
                                                    href="/app/service"
                                                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-gray-7 group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-gray-7 lg:group-hover:text-blue lg:group-hover:opacity-70 xl:ml-10"
                                                >
                                                    {/* Solutions */}
                                                    Services
                                                </a>
                                            </li>

                                            <li className="group relative">
                                                <a
                                                    href="/app/events"
                                                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-gray-7 group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-gray-7 lg:group-hover:text-blue lg:group-hover:opacity-70 xl:ml-10"
                                                >
                                                    Events
                                                </a>
                                            </li>
                                            <li className="group relative">
                                                <a
                                                    href={'/app/industry'}
                                                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-gray-7 group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-gray-7 lg:group-hover:text-blue lg:group-hover:opacity-70 xl:ml-10"
                                                >
                                                    Industry
                                                </a>
                                            </li>
                                            <li className="group relative">
                                                <a
                                                    href="/app/industriese"
                                                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-gray-7 group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-gray-7 lg:group-hover:text-blue lg:group-hover:opacity-70 xl:ml-10"
                                                >
                                                    Company
                                                </a>
                                            </li>
                                            <li className="group relative">
                                                <a
                                                    href="/app/retail"
                                                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-gray-7 group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-gray-7 lg:group-hover:text-blue lg:group-hover:opacity-70 xl:ml-10"
                                                >
                                                    {/* Partners */}
                                                    Retail
                                                </a>
                                            </li>
                                            <li className="group relative">
                                                <a
                                                    href="/app/license"
                                                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-gray-7 group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-gray-7 lg:group-hover:text-blue lg:group-hover:opacity-70 xl:ml-10"
                                                >
                                                    {/* Resources */}
                                                    License
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="flex items-center justify-end pr-16 lg:pr-0">
                                    <div className="hidden sm:flex">
                                        <Link
                                            href={'/app/contact'}
                                            className="signUpBtn rounded-full bg-transparent border border-dark-3 px-6 py-2 text-base font-medium text-dark mr-3 duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                                        >
                                            Contact us
                                        </Link>
                                        <a
                                            href="/auth/login"
                                            className="signUpBtn rounded-full bg-primary px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                                        >
                                            Login
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {children}
                <footer
                    className="wow fadeInUp relative z-10 bg-primary pt-20 mt-20 lg:pt-[100px]"
                    data-wow-delay=".15s"
                >
                    <div className="container">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
                                <div className="mb-10 w-full">
                                    <a
                                        href="javascript:void(0)"
                                        className="mb-6 inline-block max-w-[160px]"
                                    >
                                        <img
                                            src="/images/logo/footer-logo.png"
                                            alt="logo"
                                            className="max-w-full"
                                        />
                                    </a>
                                    <p className="mb-8 max-w-[270px] text-base text-white">
                                        emerchantpay Ltd is duly authorised electronic money institution subject to the prudential supervision of the UK Financial Conduct
                                    </p>
                                </div>
                            </div>
                            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
                                <div className="mb-10 w-full">
                                    <h4 className="mb-9 text-lg font-semibold text-white">Company</h4>
                                    <ul>
                                        <li>
                                            <a
                                                href="/app/about"
                                                className="mb-3 inline-block text-base text-white hover:text-white"
                                            >
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="javascript:void(0)"
                                                className="mb-3 inline-block text-base text-white hover:text-white"
                                            >
                                                Testimonials
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="javascript:void(0)"
                                                className="mb-3 inline-block text-base text-white hover:text-white"
                                            >
                                                Getting started
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
                                <div className="mb-10 w-full">
                                    <h4 className="mb-9 text-lg font-semibold text-white">Products</h4>
                                    <ul>
                                        <li>
                                            <a
                                                href="/app/payments"
                                                className="mb-3 inline-block text-base text-white hover:text-white"
                                            >
                                                Online payments
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/app/pos"
                                                className="mb-3 inline-block text-base text-white hover:text-white"
                                            >
                                                POS terminals
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="javascript:void(0)"
                                                className="mb-3 inline-block text-base text-white hover:text-white"
                                            >
                                                Card issuing
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
                                <div className="mb-10 w-full">
                                    <h4 className="mb-9 text-lg font-semibold text-white">Servces</h4>
                                    <ul>
                                        <li>
                                            <a
                                                href="javascript:void(0)"
                                                className="mb-3 inline-block text-base text-white hover:text-white"
                                            >
                                                Acquiring
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="javascript:void(0)"
                                                className="mb-3 inline-block text-base text-white hover:text-white"
                                            >
                                                Global payment methods
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="javascript:void(0)"
                                                className="mb-3 inline-block text-base text-white hover:text-white"
                                            >
                                                Platforms and partnerships
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="mt-5 border-t border-[#8890A4] border-opacity-40 py-8"
                    >
                        <div className="container">
                            <div className="-mx-4 flex flex-wrap">
                                <div className="w-full px-4 md:w-1/3 lg:w-1/2">
                                    <div className="my-1">
                                        <p className="text-base text-white">
                                            ©Trafalgar PTY LTD 2020. All rights reserved

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>
            </body>
        </html>
  )
}
