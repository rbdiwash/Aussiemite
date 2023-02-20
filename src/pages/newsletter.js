import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const newsletter = () => {
  return (
    <>
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
        <Navbar />
        <header class="w-full container mx-auto">
          <div class="flex flex-col items-center py-12">
            <a
              class="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
              href="#"
            >
              Newsletter
            </a>
            <p class="text-lg text-gray-600">Lorem Ipsum Dolor Sit Amet</p>
          </div>
        </header>
        <nav
          class="w-full py-4 border-t border-b bg-[#f18f16]"
          x-data="{ open: false }"
        >
          <div class="block sm:hidden">
            <a
              href="#"
              class="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
            >
              Topics
            </a>
          </div>
          <div class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
            <div class="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
              <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                Foods
              </a>
              <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                Drinks
              </a>
              <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                Vegetables
              </a>
              <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                Cocktails
              </a>
            </div>
          </div>
        </nav>
        <div class="container mx-auto flex flex-wrap py-6 text-black">
          <section class="w-full md:w-2/3 flex flex-col items-center px-3">
            <article class="flex flex-col shadow my-4">
              <a href="#" class="hover:opacity-75">
                <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" />
              </a>
              <div class="bg-white flex flex-col justify-start p-6">
                <a
                  href="#"
                  class="text-blue-700 text-sm font-bold uppercase pb-4"
                >
                  Foods
                </a>
                <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">
                  Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
                </a>
                <p href="#" class="text-sm pb-3">
                  By{" "}
                  <a href="#" class="font-semibold hover:text-gray-800">
                    David Grzyb
                  </a>
                  , Published on April 25th, 2020
                </p>
                <a href="#" class="pb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula
                  lacus, quis iaculis dui porta volutpat. In sit amet posuere
                  magna..
                </a>
                <a href="#" class="uppercase text-gray-800 hover:text-black">
                  Continue Reading <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </article>

            <article class="flex flex-col shadow my-4">
              <a href="#" class="hover:opacity-75">
                <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=2" />
              </a>
              <div class="bg-white flex flex-col justify-start p-6">
                <a
                  href="#"
                  class="text-blue-700 text-sm font-bold uppercase pb-4"
                >
                  Automotive, Finance
                </a>
                <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">
                  Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
                </a>
                <p href="#" class="text-sm pb-3">
                  By{" "}
                  <a href="#" class="font-semibold hover:text-gray-800">
                    David Grzyb
                  </a>
                  , Published on January 12th, 2020
                </p>
                <a href="#" class="pb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula
                  lacus, quis iaculis dui porta volutpat. In sit amet posuere
                  magna..
                </a>
                <a href="#" class="uppercase text-gray-800 hover:text-black">
                  Continue Reading <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </article>

            <article class="flex flex-col shadow my-4">
              <a href="#" class="hover:opacity-75">
                <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=3" />
              </a>
              <div class="bg-white flex flex-col justify-start p-6">
                <a
                  href="#"
                  class="text-blue-700 text-sm font-bold uppercase pb-4"
                >
                  Sports
                </a>
                <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">
                  Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
                </a>
                <p href="#" class="text-sm pb-3">
                  By{" "}
                  <a href="#" class="font-semibold hover:text-gray-800">
                    David Grzyb
                  </a>
                  , Published on October 22nd, 2019
                </p>
                <a href="#" class="pb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula
                  lacus, quis iaculis dui porta volutpat. In sit amet posuere
                  magna..
                </a>
                <a href="#" class="uppercase text-gray-800 hover:text-black">
                  Continue Reading <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </article>

            <div class="flex items-center py-8">
              <a
                href="#"
                class="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center"
              >
                1
              </a>
              <a
                href="#"
                class="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"
              >
                2
              </a>
              <a
                href="#"
                class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
              >
                Next <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </section>

          <aside class="w-full md:w-1/3 flex flex-col items-center px-3">
            <div class="w-full bg-white shadow flex flex-col my-4 p-6">
              <p class="text-xl font-semibold pb-5">About Us</p>
              <p class="pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas mattis est eu odio sagittis tristique. Vestibulum ut
                finibus leo. In hac habitasse platea dictumst.
              </p>
              <a
                href="#"
                class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
              >
                Get to know us
              </a>
            </div>

            <div class="w-full bg-white shadow flex flex-col my-4 p-6">
              <p class="text-xl font-semibold pb-5">Instagram</p>
              <div class="grid grid-cols-3 gap-3">
                <img
                  class="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
                />
                <img
                  class="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
                />
                <img
                  class="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=3"
                />
                <img
                  class="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=4"
                />
                <img
                  class="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=5"
                />
                <img
                  class="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=6"
                />
                <img
                  class="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=7"
                />
                <img
                  class="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=8"
                />
                <img
                  class="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=9"
                />
              </div>
              <a
                href="#"
                class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6"
              >
                <i class="fab fa-instagram mr-2"></i> Follow @dgrzyb
              </a>
            </div>
          </aside>
        </div>{" "}
        <Footer />
      </div>
    </>
  );
};

export default newsletter;
