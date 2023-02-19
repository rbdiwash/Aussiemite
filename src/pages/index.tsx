import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import P1 from "./assets/products/AussieMite1.jpeg";
import P2 from "./assets/products/AussieMite2.jpeg";
import P3 from "./assets/products/AussieMite3.jpeg";
import P4 from "./assets/products/AussieMite4.jpeg";
import P5 from "./assets/products/AussieMite5.jpeg";
import P6 from "./assets/products/AussieMite6.jpeg";
import P7 from "./assets/products/AussieMite7.jpeg";
import cover1 from "./assets/products/Toast.jpg";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc: P1,
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc: P2,
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc: P3,
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc: P4,
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },

    // More products...
  ];
  const [open, setOpen] = useState(false);
  const features = [
    { name: "Origin", description: "Designed by Good Goods, Inc." },
    {
      name: "Material",
      description:
        "Solid walnut base with rare earth magnets and powder coated steel card cover",
    },
    { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
    {
      name: "Finish",
      description: "Hand sanded and finished with natural oil",
    },
    { name: "Includes", description: "Wood card tray and 3 refill packs" },
    {
      name: "Considerations",
      description:
        "Made from natural materials. Grain and color vary with each item.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <>
      <Head>
        <title>Aussiemite</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="isolate bg-[#eedfcd]">
          <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fill-opacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9089FC" />
                  <stop offset="1" stop-color="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <Navbar open={open} setOpen={setOpen} />
          <main>
            <div className="relative px-6 lg:px-8">
              <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Announcing our next round of funding.{" "}
                    <a href="#" className="font-semibold text-indigo-600">
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    PROUDLY AUSTRALIAN OWNED AND MADE SINCE 2001.
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    AUSSIEMITE IS CRAFTED IN SMALL BATCHES FROM QUALITY
                    AUSTRALIAN AND NEW ZEALAND INGREDIENTS TO PROVIDE A YEAST
                    SPREAD THAT’S SMOOTH IN TASTE AND KIND ON TASTEBUDS.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                    <a
                      href="#"
                      className="text-base font-semibold leading-7 text-gray-900"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fill-opacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9089FC" />
                      <stop offset="1" stop-color="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className=" bg-white text-black">
              <Slider {...settings}>
                <div>
                  <div className="w-full">
                    <Image
                      src={cover1.src}
                      alt=""
                      className="h-[700px] object-cover bg-cover w-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="w-full">
                    <Image
                      src={P2.src}
                      alt=""
                      className="h-[700px] object-cover bg-cover w-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="w-full">
                    <Image
                      src={cover1.src}
                      alt=""
                      className="h-[700px] object-cover bg-cover w-full"
                    />
                  </div>
                </div>
              </Slider>
            </div>
            <div className="bg-white">
              <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Our Products
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {products.map((product) => (
                    <div key={product.id} className="group relative">
                      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                        <picture>
                          <Image
                            src={product.imageSrc.src}
                            alt={product.imageAlt}
                            className="h-full w-full object-cover object-center shadow-lg lg:h-full lg:w-full rounded-lg hover:shadow-lg border"
                          />
                        </picture>
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-md font-semibold text-gray-700">
                            <Link href={"/single"}>
                              <span
                                aria-hidden="true"
                                // className="absolute inset-0"
                              />
                              {product.name}
                            </Link>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.color}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>{" "}
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    View all Products
                  </a>
                </div>
              </div>
            </div>{" "}
            <div className="bg-[#eedfcd]">
              <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center">
                  <div className="sm:max-w-lg">
                    <span className="font text-3xl font-bold  text-gray-700 sm:text-5xl leading-10">
                      High in mood boosting B Vitamins and minerals
                    </span>
                    <p className="mt-4 text-2xl text-gray-500 leading-normal">
                      AUSSIEMITE IS CRAFTED IN SMALL BATCHES FROM QUALITY
                      AUSTRALIAN AND NEW ZEALAND INGREDIENTS TO PROVIDE A YEAST
                      SPREAD THAT’S SMOOTH IN TASTE AND KIND ON TASTEBUDS.
                    </p>
                  </div>
                  <div>
                    <Image src={P5.src} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden bg-white py-20">
              <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                  <div className="sm:max-w-lg">
                    <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                      Summer products are finally here
                    </h1>
                    <p className="mt-4 text-xl text-gray-500">
                      This year, our new summer collection will shelter you from
                      the harsh elements of a world that doesn't care if you
                      live or die.
                    </p>
                  </div>
                  <div>
                    <div className="mt-10">
                      {/* Decorative image grid */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                      >
                        <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                          <div className="flex items-center space-x-6 lg:space-x-8">
                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                              <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                <Image
                                  src={P1.src}
                                  alt=""
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <Image
                                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                  alt=""
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                            </div>
                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <Image
                                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                                  alt=""
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <Image
                                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                                  alt=""
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <Image
                                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                                  alt=""
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                            </div>
                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <Image
                                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                                  alt=""
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <Image
                                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                                  alt=""
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <a
                        href="#"
                        className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                      >
                        Shop Collection
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
                  <div className="max-w-xl lg:max-w-lg">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Subscribe to our newsletter.
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-300">
                      Nostrud amet eu ullamco nisi aute in ad minim nostrud
                      adipisicing velit quis. Duis tempor incididunt dolore.
                    </p>
                    <div className="mt-6 flex max-w-md gap-x-4">
                      <label htmlFor="email-address" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="min-w-0 flex-auto rounded-md border border-white/10 bg-white/5 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Enter your email"
                      />
                      <button
                        type="submit"
                        className="flex-none rounded-md bg-indigo-500 py-1.5 px-3.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                    <div className="flex flex-col items-start">
                      <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                          />
                        </svg>
                      </div>
                      <dt className="mt-4 font-semibold text-white">
                        Weekly articles
                      </dt>
                      <dd className="mt-2 leading-7 text-gray-400">
                        Non laboris consequat cupidatat laborum magna. Eiusmod
                        non irure cupidatat duis commodo amet.
                      </dd>
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                          />
                        </svg>
                      </div>
                      <dt className="mt-4 font-semibold text-white">No spam</dt>
                      <dd className="mt-2 leading-7 text-gray-400">
                        Officia excepteur ullamco ut sint duis proident non
                        adipisicing. Voluptate incididunt anim.
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <svg
                className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
                viewBox="0 0 1155 678"
                fill="none"
              >
                <path
                  fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
                  fill-opacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9089FC" />
                    <stop offset="1" stop-color="#FF80B5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <Transition.Root show={open} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                      <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                      >
                        <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                              <div className="flex items-start justify-between">
                                <Dialog.Title className="text-lg font-medium text-gray-900">
                                  Shopping cart
                                </Dialog.Title>
                                <div className="ml-3 flex h-7 items-center">
                                  <button
                                    type="button"
                                    className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                    onClick={() => setOpen(false)}
                                  >
                                    <span className="sr-only">Close panel</span>
                                    <XMarkIcon
                                      className="h-6 w-6"
                                      aria-hidden="true"
                                    />
                                  </button>
                                </div>
                              </div>

                              <div className="mt-8">
                                <div className="flow-root">
                                  <ul
                                    role="list"
                                    className="-my-6 divide-y divide-gray-200"
                                  >
                                    {products.map((product) => (
                                      <li
                                        key={product.id}
                                        className="flex py-6"
                                      >
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                          <Image
                                            src={product.imageSrc.src}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center"
                                          />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                          <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                              <h3>
                                                <a href={product.href}>
                                                  {product.name}
                                                </a>
                                              </h3>
                                              <p className="ml-4">
                                                {product.price}
                                              </p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500">
                                              {product.color}
                                            </p>
                                          </div>
                                          <div className="flex flex-1 items-end justify-between text-sm">
                                            <p className="text-gray-500">
                                              Qty 1
                                            </p>

                                            <div className="flex">
                                              <button
                                                type="button"
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                              >
                                                Remove
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>Subtotal</p>
                                <p>$262.00</p>
                              </div>
                              <p className="mt-0.5 text-sm text-gray-500">
                                Shipping and taxes calculated at checkout.
                              </p>
                              <div className="mt-6">
                                <a
                                  href="#"
                                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                >
                                  Checkout
                                </a>
                              </div>
                              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                <p>
                                  or
                                  <Link href="/cart">
                                    <button
                                      type="button"
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                      onClick={() => setOpen(false)}
                                    >
                                      Continue Shopping
                                      <span aria-hidden="true"> &rarr;</span>
                                    </button>
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
            <div className="bg-white">
              <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Technical Specifications
                  </h2>
                  <p className="mt-4 text-gray-500">
                    The walnut wood card tray is precision milled to perfectly
                    fit a stack of Focus cards. The powder coated steel divider
                    separates active cards from new ones, or can be used to
                    archive important task lists.
                  </p>

                  <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    {features.map((feature) => (
                      <div
                        key={feature.name}
                        className="border-t border-gray-200 pt-4"
                      >
                        <dt className="font-medium text-gray-900">
                          {feature.name}
                        </dt>
                        <dd className="mt-2 text-sm text-gray-500">
                          {feature.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                  <Image
                    src={P1.src}
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100"
                  />
                  <Image
                    src={P7.src}
                    alt="Top down view of walnut card tray with embedded magnets and card groove."
                    className="rounded-lg bg-gray-100"
                  />
                  <Image
                    src={P6.src}
                    alt="Side of walnut card tray with card groove and recessed card area."
                    className="rounded-lg bg-gray-100"
                  />
                  <Image
                    src={P1.src}
                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                    className="rounded-lg bg-gray-100"
                  />
                </div>
              </div>
            </div>
            <Footer />
          </main>
        </div>
      </main>
    </>
  );
}
